import PageHeader from "../global/elements/header/pageHeader";
import Footer from "../global/footer";
import GradeSort from "./pageMain/gradeSort";
import AllGrades from "./pageMain/allGrades";
import Description from "./pageMain/description";
import AllTypes from "./pageMain/allTypes";
import Info from "./pageMain/info";
import FAQ from "./pageMain/faq";

const Worksheets = () => {

    return (
        <>  
            <PageHeader
                cls="xl:h-[70vh]"
                imgBgCls="md:h-auto h-full scale-x-[-1] xl:-top-36"
                title={"کاربرگ های آموزشی"} 
                breadcrumbItems={[
                    {href : "worksheets", value : "کاربرگ ها"}
                ]} 
                imgBgSrc={"/images/worksheets/girl-s-hand-writing-her-notebook.webp"}
            />
            <section className="bg-gray-100 w-full">
                <GradeSort />
                <AllGrades />
                <Description />
                <AllTypes />
                <Info />
                <FAQ />
            </section>
            <Footer cls="bg-gray-200 shadow-all-md"/>
        </>
    )
}

export default Worksheets;