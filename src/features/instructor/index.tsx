import Navbar from "../../components/navigation/navbar";
import InstructorMain from "./main/instructorMain";
import Footer from "../../components/navigation/footer";

const Instructor = () => {

    return (
        <div className="relative overflow-hidden">
            <Navbar isWhite={false} />
            <InstructorMain />
            <Footer cls="mt-32"/>
        </div>
    )
}

export default Instructor;