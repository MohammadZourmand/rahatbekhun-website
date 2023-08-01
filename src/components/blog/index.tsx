
import PageHeader from "../global/elements/header/pageHeader";
import Footer from "../global/footer";
import BestArticles from "./bestArticles";
import NewArticles from "./getNews";
import SearchBox from "./searchbox";
import SortSlider from "./sortSlider";

const Blog : React.FC = () => {

    return (
        <>
            <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[65vh]" 
                title={"وبلاگ"}
                breadcrumbItems={[
                    {href : "/blog", value : "وبلاگ"}
                ]} 
                imgBgSrc={"/images/blog/aerial-view-man-typing-retro-typewriter.jpg"}                
            />
            <SearchBox />
            <SortSlider />
            <BestArticles />
            <NewArticles />
            <Footer />
        </>      
    )
}

export default Blog;