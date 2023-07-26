import Videos from "@/components/videos";
import { NextPage } from "next";
import Head from "next/head";


const VideosPage : NextPage = () => {

    return (
        <>
            <Head>
                <title> ویدیوهای آموزشی </title>
            </Head>
            <Videos />
        </>
    )
}

export default VideosPage;