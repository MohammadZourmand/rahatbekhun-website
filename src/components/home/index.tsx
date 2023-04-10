import Footer from "../global/footer";
import Navbar from "../global/navbar";
import BigSlider from "../global/sliders/bigSlider";
import Sentences from "./BigSentences";
import BigEvent from "./bigEvent";
import OfferClasses from "./offerClasses";
import Teachers from "./teachers";
import Welcome from "./welcome";


const Home : React.FC = () => {

    return (
        <>
            <BigSlider />
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