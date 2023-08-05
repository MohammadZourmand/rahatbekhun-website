
import {FC} from "react";
import RelatedArticles from "./relatedArticle";
import CommentsPart from "./commentsPart";

interface SingleArticleMainFooterProps {

} 

const SingleArticleMainFooter : FC<SingleArticleMainFooterProps> = ({}) => {

    return (
        <>
            <RelatedArticles />
            <CommentsPart cls="mt-24" />
        </>
    )
} 

export default SingleArticleMainFooter;