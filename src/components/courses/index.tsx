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
                title="دوره های آموزشی"
                breadcrumbItems={[
                    {href : "courses", value : "دوره های آموزشی"}
                ]}
                imgBgSrc={'./images/courses/school-girl-wearing-headphones-virtual-school.jpg'}
            />
            <CoursesPageMain />
            <Footer cls="mt-8" />
        </>
    )
}

export default Courses;