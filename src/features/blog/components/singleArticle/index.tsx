'use client'

import PageHeader from "@/components/navigation/header/pageHeader";
import SingleArticlePageHeader from "./header";
import SingleArticleMain from "./main";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

const SingleArticle = ({data}) => {

    const articleInfo= {
        head : '',
        imgSrc : '',
        imgAlt : '',
        category : '',
        author : '',
        date : '',
    }

    return (
        <div>
            <Navbar isWhite={false} />
            <SingleArticleMain data={data} />
            <Footer cls="mt-32" />
        </div>
    )
}

export default SingleArticle;