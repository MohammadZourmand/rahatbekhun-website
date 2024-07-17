
// ? components & types ==========
// import PageHeader from "../global/elements/header/pageHeader";
// import CoursesPageMain from "./main";
import IsMaking from "../global/elements/making";
import Footer from "../global/footer";
import Navbar from "../global/navbar";

const Courses = () => {

    return (
        <>
            {/* <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[80vh]"
                title="دوره های آموزشی"
                breadcrumbItems={[
                    {href : "courses", value : "دوره های آموزشی"}
                ]}
                imgBgSrc={'/images/courses/portrait-pretty-young-girl-smiling.webp'}
            />
            <CoursesPageMain /> */}
            <Navbar isWhite={false} />
            <IsMaking />
            <Footer cls="mt-8" />
        </>
    )
}

export default Courses;