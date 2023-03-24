
import PageHeader from "../global/elements/header/pageHeader";
import Navbar from "./../global/navbar";
import SearchBox from "./searchbox";
import SortSlider from "./sortSlider";

const Blog : React.FC = () => {

    return (
        <>
            <Navbar isFixed={true} />
            <PageHeader
                hasLinkBtn={false}
                mainText="وبلاگ"
                page="blog"
            />
            <SearchBox />
            <SortSlider />
        </>      
    )
}

export default Blog;