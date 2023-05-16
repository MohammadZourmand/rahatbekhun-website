import Footer from "../global/footer";
import Navbar from "../global/navbar";
import Header from "./homeHeader";
import Sentences from "./BigSentences";
import BigEvent from "./bigEvent";
import Teachers from "./teachers";
import Welcome from "./welcome";
import GameLearning from "./gameLearning";
import Courses from "./courses";
import Inviting from "./inviting";


const Home : React.FC = () => {

    return (
        <>
            <Header />
            <Welcome />
            <GameLearning />
            <Courses />
            <Inviting />
            {/* <BigEvent />
            <Teachers />
            <Sentences />
            <Footer /> */}
        </>
    )
}

export default Home;