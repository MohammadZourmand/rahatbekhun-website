import MatchedArticles from "./matchedArticles";
import ArticlesSideBar from "./sidebar";

interface ArticlesPageMain {

}

const ArticlesPageMain : React.FC<ArticlesPageMain> = () => {

    return (
        <main className="grid grid-cols-12 max-w-[1200px] gap-x-24 mx-auto mt-12">
            <MatchedArticles />
            <ArticlesSideBar />
        </main>
    )
}

export default ArticlesPageMain;