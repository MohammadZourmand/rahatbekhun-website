import MatchedArticles from "./matchedArticles";
import ArticlesSideBar from "./sidebar";

interface ArticlesPageMain {

}

const ArticlesPageMain : React.FC<ArticlesPageMain> = () => {

    return (
        <main className="grid grid-cols-12 xl:max-w-[1200px] xl:gap-x-24 lg:gap-x-12 mx-auto px-2 mt-12">
            <MatchedArticles />
            <ArticlesSideBar />
        </main>
    )
}

export default ArticlesPageMain;