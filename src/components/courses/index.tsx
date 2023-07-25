// ? react =======================
import { useState , FC } from "react";

// ? components & types ==========
import PageHeader from "../global/elements/header/pageHeader";
import CoursesPageMain from "./main";
import Footer from "../global/footer";

const Courses : FC = () => {

    return (
        <>
            <PageHeader
                cls="!h-[80vh]"
                title="دوره های آموزشی"
                breadcrumbItems={[
                    {href : "courses", value : "دوره های آموزشی"}
                ]}
                imgBgSrc={'./images/courses/portrait-pretty-young-girl-smiling.jpg'}
            />
            <CoursesPageMain />
            <Footer cls="mt-8" />
        </>
    )
}

export default Courses;