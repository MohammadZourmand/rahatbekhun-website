import Footer from "../global/footer";
import Header from "./homeHeader";
import Sentences from "./BigSentences";
import Welcome from "./welcome";
// import GameLearning from "./gameLearning";
import Courses from "./courses";
import Inviting from "./inviting";
// import TeachersClasses from "./teachersClasses";
// import OfferedArticles from "./offeredArticles";

const Home = () => {

    return (
        <>
            <Header /> {/* size = 62.5KB */}
            <Welcome /> {/* size = 1.68KB */}
            {/* <GameLearning /> */}
            <Courses /> {/* size = 3.99KB */}
            <Inviting /> {/* size = 1.65KB */}
            {/* <TeachersClasses /> */}
            <Sentences /> {/* size = 23.5KB */}
            {/* <OfferedArticles /> */}
            <Footer /> {/* size = 399B */}
        </>
    )
}

export default Home;