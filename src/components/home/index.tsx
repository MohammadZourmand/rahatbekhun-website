import Navbar from "../global/navbar";
import BigEvent from "./bigEvent";
import HomeHeader from "./header";
import OfferClasses from "./offerClasses";
import Welcome from "./welcome";


const Home : React.FC = () => {

    return (
        <>
            <Navbar />
            <HomeHeader />
            <Welcome />
            <OfferClasses />
            <BigEvent />
        </>
    )
}

export default Home;