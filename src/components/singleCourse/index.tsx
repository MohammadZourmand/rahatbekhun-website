import Navbar from "../global/navbar";

interface SingleCourseProps {

}

const SingleCourse : React.FC<SingleCourseProps> = () => {

    return (
        <>
            <Navbar isWhite={false} cls={"shadow-xl shadow-gray-100 pb-4"} />
        </>
    )
}

export default SingleCourse;