
import ArticlesSideBar from "../../main/sidebar";
import SingleArticlesMainText from "./text";
import SingleArticleMainFooter from "./footer";

const SingleArticleMain = () => {

    return (
        <main className="grid grid-cols-12 xl:max-w-[1200px] xl:gap-x-24 lg:gap-x-12 mx-auto px-2 mt-12">
            <article className="lg:col-span-8 col-span-12 lg:p-0 sm:py-12 md:px-12 sm:px-28 xs:p-4 relative">
                <SingleArticlesMainText />
                <SingleArticleMainFooter />
            </article>
            <ArticlesSideBar />
        </main>
    )
}

export default SingleArticleMain;