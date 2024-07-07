
import SingleWorksheet from "@/components/worksheets/singleWorksheet";
import apiHelper from "@/utils/axios";
import { ErrorToast } from "@/utils/swal";
import Head from "next/head";


const WorksheetsPage = async (props) => {

    let data;

    try {
        const res = await apiHelper().post(`http://localhost:5000/admin/worksheets/single?id=${props?.params?.worksheet}`)
        data = res?.data

    } catch (err) {
        ErrorToast('مشکلی در دریافت اطلاعات به وجود آمده است !')
        data = { data : []}
    }

    return (
        <>
            <Head>
                <title>کاربرگ های آموزشی</title>
            </Head>
            <SingleWorksheet data={data?.data} />
        </>
    )
}

export default WorksheetsPage;