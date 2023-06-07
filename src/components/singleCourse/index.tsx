import Footer from "../global/footer";
import Navbar from "../global/navbar";
import FloatSidebar from "./floatSidebar";
import SingleCourseMain from "./main";

interface SingleCourseProps {

}

const SingleCourse : React.FC<SingleCourseProps> = () => {

    return (
        <>
            {/* <div className="-rotate-[20deg] absolute top-[30rem] -right-28 w-40 h-48 bg-sky-300/90 rounded-full"></div> */}
            {/* <div className="absolute top-48 -left-24 h-40 w-40 rounded-full border-2 border-pink-500"></div> */}
            <Navbar isWhite={false} cls={"pb-4"} />
            <main className="grid grid-cols-12 lg:gap-x-24 pt-28 lg:px-40 bg-gray-50 pb-28">
                <SingleCourseMain cls="lg:col-span-8 col-span-12"/>
                <FloatSidebar cls="lg:col-span-4 col-span-12 self-start"/>
            </main>
            <Footer />
        </>
    )
}

export default SingleCourse;