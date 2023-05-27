// ? react =======================
import { useState , FC } from "react";

// ? components & types ==========
import PageHeader from "../global/elements/header/pageHeader";
import CoursesPageMain from "./main";
import Footer from "../global/footer";

const Courses : FC = () => {


    return (
        <>
            <PageHeader title="دوره های آموزشی" pagination={["دوره های آموزشی"]} />
            <CoursesPageMain />
            <Footer cls="mt-8" />
        </>
    )
}

export default Courses;