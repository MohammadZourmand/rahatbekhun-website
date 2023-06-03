import Navbar from "../global/navbar";
import FloatSidebar from "./floatSidebar";
import SingleCourseMain from "./main";

interface SingleCourseProps {

}

const SingleCourse : React.FC<SingleCourseProps> = () => {

    return (
        <>
            <Navbar isWhite={false} cls={"shadow-xl shadow-gray-200 pb-4"} />
            <section className="grid grid-cols-12 gap-x-8 pt-28 px-40 bg-gray-50 pb-64">
                <SingleCourseMain cls="col-span-9"/>
                <FloatSidebar cls="col-span-3"/>
            </section>
        </>
    )
}

export default SingleCourse;