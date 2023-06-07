import Footer from "../global/footer";
import Navbar from "../global/navbar";
import FloatSidebar from "./floatSidebar";
import SingleCourseMain from "./main";

interface SingleCourseProps {

}

const SingleCourse : React.FC<SingleCourseProps> = () => {

    return (
        <>
            <Navbar isWhite={false} cls={"shadow-xl shadow-gray-200 pb-4"} />
            <main className="grid grid-cols-12 gap-x-24 pt-28 px-40 bg-gray-50 pb-28">
                <SingleCourseMain cls="col-span-8"/>
                <FloatSidebar cls="col-span-4 self-start"/>
            </main>
            <Footer />
        </>
    )
}

export default SingleCourse;