
import PageHeader from "../global/elements/header/pageHeader";
import Navbar from "./../global/navbar";

const Blog : React.FC = () => {

    return (
        <>
            <Navbar isFixed={true} />
            <PageHeader
                hasLinkBtn={false}
                mainText="وبلاگ"
                page="blog"
            />
        </>      
    )
}

export default Blog;