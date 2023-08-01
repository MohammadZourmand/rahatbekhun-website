import RecentFiles from "./recentFiles";
import Searchbox from "./searchbox";
import SubjectsPart from "./subjectsPart";
import TagsPart from "./tagsPart";

interface ArticlesSideBarProps {
    cls ?: string
}

const ArticlesSideBar : React.FC<ArticlesSideBarProps> = () => {

    return (
        <aside className="col-span-4 flex flex-col">
            <Searchbox />
            <RecentFiles />
            <SubjectsPart />
            <TagsPart />
        </aside>
    )
}

export default ArticlesSideBar;