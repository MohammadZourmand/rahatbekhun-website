import { FC } from "react";
import SingleArticlePageHeader from "./header";

interface SingleArticleProps {

}

const SingleArticle : FC<SingleArticleProps> = () => {

    return (
        <div>
            <SingleArticlePageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[80vh]"
                title="دوره های آموزشی"
                imgBgSrc={'./images/courses/portrait-pretty-young-girl-smiling.jpg'} breadcrumbItems={[]}            />
        </div>
    )
}

export default SingleArticle;