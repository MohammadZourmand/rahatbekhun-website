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
            <Header />
            <Welcome />
            {/* <GameLearning /> */}
            <Courses />
            <Inviting />
            {/* <TeachersClasses /> */}
            <Sentences />
            {/* <OfferedArticles /> */}
            <Footer />
        </>
    )
}

export default Home;