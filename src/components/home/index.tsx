import Footer from "../global/footer";
import Navbar from "../global/navbar";
import Header from "./homeHeader";
import Sentences from "./BigSentences";
import BigEvent from "./bigEvent";
import Teachers from "./teachers";
import Welcome from "./welcome";
import GameLearning from "./gameLearning";
import Courses from "./courses";


const Home : React.FC = () => {

    return (
        <>
            <Header />
            <Welcome />
            <GameLearning />
            <Courses />
            {/* <BigEvent />
            <Teachers />
            <Sentences />
            <Footer /> */}
        </>
    )
}

export default Home;