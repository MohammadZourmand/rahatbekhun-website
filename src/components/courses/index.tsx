// ? react =======================
import { useState , FC } from "react";

// ? components & types ==========
import PageHeader from "../global/elements/header/pageHeader";
import CoursesPageMain from "./main";
import Footer from "../global/footer";
import Selecter from "../global/elements/inputs/selecter";

const Courses : FC = () => {

    const state = {
        selecter1 : ["option 1", "option 2", "option 3", "option 4"],
    }

    const [values, setValues] = useState({
        selecter1 : "option 1"
    })

    const handler = (key : string, value : string) => {
        setValues((prevState) => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

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
            <Selecter
                name={"selecter1"}
                options={state.selecter1}
                setter={handler}
                values={values}
            />
        </>
    )
}

export default Courses;