import PageHeader from "../../../components/navigation/header/pageHeader";
import Footer from "../../../components/navigation/footer";
import GradeSort from "./pageMain/gradeSort";
import AllGrades from "./pageMain/allGrades";
import Description from "./pageMain/description";
import Teachers from "./pageMain/teachers";
import Info from "./pageMain/info";
import FAQ from "./pageMain/faq";

const Courses = () => {

    return (
        <>  
            <PageHeader
                cls="xl:h-[70vh]"
                imgBgCls="md:h-auto scale-y-[1.2] scale-x-[-1] xl:-top-36"
                title={"دوره های آموزشی"} 
                breadcrumbItems={[
                    {href : "courses", value : "دوره های آموزشی"}
                ]} 
                imgBgSrc={"/images/courses/person-holding-clapperboard-front-girl-rehearsing-backstage.webp"}
            />
            <section className="bg-gray-100 w-full">
                <Teachers />
                <GradeSort />
                <Description />
                <AllGrades />
                <Info />
                <FAQ />
            </section>
            <Footer cls="bg-gray-200 shadow-all-md"/>
        </>
    )
}

export default Courses;