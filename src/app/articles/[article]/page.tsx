import Head from "next/head";
import { NextPage, NextPageContext } from "next";

import SingleArticle from "@/components/articles/singleArticle";


const SingleArticlePage : NextPage = (props : {query}) => {


    return (
        <>
            {/* <Head>
                <title>{articleInfo.head}</title>
            </Head> */}
            <SingleArticle />
        </>
    )
}

export default SingleArticlePage;