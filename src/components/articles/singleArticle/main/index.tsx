
import {FC} from "react";
import ArticlesSideBar from "../../main/sidebar";
import Paragraph from "@/components/global/elements/paragraph";
import Sentence from "@/components/global/elements/paragraph/sentence";
import BlueLink from "@/components/global/elements/links/blueLink";
import Heading5 from "@/components/global/elements/headings/h5";
import TagBox from "@/components/global/elements/boxes/tag";
import { MessageIcon, SendIcon } from "@/assets/icons";
import SingleArticlesMainText from "./text";
import SingleArticleMainFooter from "./footer";

interface SingleArticleMainProps {

}

const SingleArticleMain : FC<SingleArticleMainProps> = () => {

    return (
        <main className="grid grid-cols-12 xl:max-w-[1200px] xl:gap-x-24 lg:gap-x-12 mx-auto px-2 mt-12">
            <article className="lg:col-span-8 col-span-12 lg:p-0 sm:py-12 md:px-12 sm:px-28 xs:p-4">
                <SingleArticlesMainText />
                <SingleArticleMainFooter />
            </article>
            <ArticlesSideBar />
        </main>
    )
}

export default SingleArticleMain;