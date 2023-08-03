import { FC } from "react";
import SingleArticlePageHeader from "./header";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import SingleArticleMain from "./main";
import Footer from "@/components/global/footer";

interface SingleArticleProps {

}

const SingleArticle : FC<SingleArticleProps> = () => {

    const articleInfo = useSelector((state : RootState) => state.articleInfoSlice)

    return (
        <div>
            <SingleArticlePageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[80vh]"
                title={articleInfo.head}
                imgBgSrc={articleInfo.imgSrc}
                imgBgAlt={articleInfo.imgAlt}
                category={articleInfo.category}
                author={articleInfo.author}
                date={articleInfo.date}
            />
            <SingleArticleMain />
            <Footer cls="mt-32" />
        </div>
    )
}

export default SingleArticle;