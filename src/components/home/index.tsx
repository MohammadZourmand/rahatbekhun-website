import Footer from "../global/footer";
import Navbar from "../global/navbar";
import Sentences from "./BigSentences";
import BigEvent from "./bigEvent";
import HomeHeader from "./header";
import OfferClasses from "./offerClasses";
import Teachers from "./teachers";
import Welcome from "./welcome";


const Home : React.FC = () => {

    return (
        <>
            <Navbar isFixed={false} />
            <HomeHeader />
            <Welcome />
            <OfferClasses />
            <BigEvent />
            <Teachers />
            <Sentences />
            <Footer />
        </>
    )
}

export default Home;