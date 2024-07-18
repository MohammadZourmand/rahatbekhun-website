import Navbar from "../global/navbar";
import InstructorMain from "./main";
import Footer from "../global/footer";

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