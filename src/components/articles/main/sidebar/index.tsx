import RecentFiles from "./recentFiles";
import Searchbox from "./searchbox";
import SubjectsPart from "./subjectsPart";
import TagsPart from "./tagsPart";

interface ArticlesSideBarProps {
    cls ?: string
}

const ArticlesSideBar = ({cls} : ArticlesSideBarProps) => {

    return (
        <aside className="lg:col-span-4 col-span-12 flex flex-col md:px-12 sm:px-28 xs:p-4 lg:p-0 mt-8 xs:mt-0">
            <Searchbox />
            <RecentFiles />
            <SubjectsPart />
            <TagsPart />
        </aside>
    )
}

export default ArticlesSideBar;