import Navbar from "../global/navbar";
import HomeHeader from "./header";
import Welcome from "./welcome";


const Home : React.FC = () => {

    return (
        <>
            <Navbar />
            <HomeHeader />
            <Welcome />
        </>
    )
}

export default Home;