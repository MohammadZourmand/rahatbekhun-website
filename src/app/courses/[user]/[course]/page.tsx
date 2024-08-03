
import SingleWorksheet from "@/components/worksheets/singleWorksheet";
import { singleWorksheetbreadCrumbsJson, worksheetJsonLd } from "@/meta/worksheets";
import apiHelper from "@/utils/axios";
import { ErrorToast } from "@/utils/swal";

import type { Metadata } from 'next';

type Props = {
    params: { worksheet: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {

    let res;

    try {
        res = await apiHelper().post(`http://localhost:5000/admin/worksheets/single?id=${params?.worksheet}`)
    } catch (error) {
        console.log(error)
        return {}
    }

    const {name, info, hashtags} = res?.data?.data

    return {
        title: name,
        description : info,
        keywords : hashtags,
        alternates : {
            canonical : `https://rahatbekhun.com/worksheets/${params?.worksheet}`
        }
    }
}

const WorksheetsPage = async (props) => {

    let data;

    try {
        const res = await apiHelper().post(`http://localhost:5000/admin/worksheets/single?id=${props?.params?.worksheet}`)
        data = res?.data

    } catch (err) {
        ErrorToast('در دریافت اطلاعات مشکل داریم !')
        // redirect('/not-found')
        data = { data : []}
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(singleWorksheetbreadCrumbsJson(data?.data?.name,props?.params?.worksheet))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(worksheetJsonLd(data?.data))
                }}
            />
            <SingleWorksheet data={data?.data} params={props?.params}/>
        </>
    )
}

export default WorksheetsPage;