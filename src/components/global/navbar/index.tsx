import {useState} from "react";

import { IconMenu2 } from "@tabler/icons-react";

import MobileNavbar from "./mobile";
import ComputerNavbar from "./computer";
import WebsiteName from "../elements/boxes/websiteName";


const Navbar : React.FC = () => {

    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    
    return (
        <nav className="flex justify-between items-center sm:px-12 px-1 shadow-md">
            {/* website Name & logo */}
            <WebsiteName />
            {/* website menus */}
            <section>
                <IconMenu2 className="ml-2 xl:hidden block cursor-pointer" color="#2c3e50" onClick={() => setShowNavbar(true)}/>
                <MobileNavbar setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
                <ComputerNavbar />
            </section>
        </nav>
    )
}

export default Navbar;