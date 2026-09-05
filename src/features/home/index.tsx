
import Footer from "../../components/navigation/footer";
import Header from "./homeHeader";
import Sentences from "./BigSentences";
import Welcome from "./welcome";
import Courses from "./courses";
import Inviting from "./inviting";
import OfferedArticles from "./offeredArticles";
import TeachersClasses from "./teachersClasses";
import GameLearning from "./gameLearning";

const Home = () => {

    return (
        <>
            <Header /> {/* size = 62.5KB */}
            <Welcome /> {/* size = 1.68KB */}
            <GameLearning />
            <Courses /> {/* size = 3.99KB */}
            <Inviting /> {/* size = 1.65KB */}
            <TeachersClasses />
            <Sentences /> {/* size = 23.5KB */}
            <OfferedArticles />
            <Footer /> {/* size = 399B */}
        </>
    )
}

export default Home;