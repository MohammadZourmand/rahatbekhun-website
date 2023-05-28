
import PageHeader from "../global/elements/header/pageHeader";
import Navbar from "./../global/navbar";
import LastestArticles from "./articles/lastestProjects";
import TrendingArticles from "./articles/trendingArticles";
import SearchBox from "./searchbox";
import SortSlider from "./sortSlider";

const Blog : React.FC = () => {

    return (
        <>
            <Navbar isWhite={true} />
            <PageHeader />
            <SearchBox />
            <SortSlider />
            <TrendingArticles />
        </>      
    )
}

export default Blog;