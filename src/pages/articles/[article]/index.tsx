import Head from "next/head";
import { NextPage, NextPageContext } from "next";

import { useDispatch } from "react-redux";

import SingleArticle from "@/components/articles/singleArticle";
import { cardsInfo } from "@/components/blog/bestArticles/data";
import { setArticleInfo } from "@/store/slices/article";

const SingleArticlePage : NextPage = (props : {query}) => {

    const dispatch = useDispatch()

    const articleInfo = cardsInfo.find((item) => {
        return item.linkName === props.query.article
    })

    dispatch(setArticleInfo(articleInfo))

    return (
        <>
            <Head>
                <title>{articleInfo.head}</title>
            </Head>
            <SingleArticle />
        </>
    )
}


export const getServerSideProps = async ({query}) => {
    
    return { 
        props : { 
            query 
        } 
    };
  }

export default SingleArticlePage;