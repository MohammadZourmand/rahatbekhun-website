
import PageHeader from "../global/elements/header/pageHeader";
import IsMaking from "../global/elements/making";
import Footer from "../global/footer";
import Navbar from "../global/navbar";


const Blog = () => {

    return (
        <>
            {/* <PageHeader
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
            <Footer /> */}
            <Navbar isWhite={false}/>
            <IsMaking />
            <Footer />
        </>      
    )
}

export default Blog;