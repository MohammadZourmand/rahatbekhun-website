import Worksheets from "@/components/worksheets";
import { NextPage } from "next";
import Head from "next/head";

const WorksheetsPage : NextPage = () => {

    return (
        <>
            <Head>
                <title>کاربرگ های آموزشی</title>
            </Head>
            <Worksheets />
        </>
    )
}

export default WorksheetsPage;