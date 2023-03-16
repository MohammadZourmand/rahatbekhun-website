
import PageHeader from "../global/elements/header/pageHeader";
import Navbar from "./../global/navbar";
import SearchBox from "./searchbox";

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
        </>      
    )
}

export default Blog;