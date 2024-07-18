import Worksheets from "@/components/worksheets";
import { worksheetsbreadCrumbsJson } from "@/meta/worksheets";
import apiHelper from "@/utils/axios";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: 'کاربرگ های آموزشی',
    description: 'کاربرگ های درس های ریاضی و فارسی و علوم و ... پایه های اول تا ششم ابتدایی با سطح های مختلف از آسان تا سخت',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/worksheets'
    }
}

const WorksheetsPage = async () => {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(worksheetsbreadCrumbsJson) }}
            />
            <Worksheets />
        </>
    )
}

export default WorksheetsPage;