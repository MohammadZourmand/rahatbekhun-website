import {useState} from "react";

import { IconMenu2 } from "@tabler/icons-react";

import MobileNavbar from "./mobile";
import ComputerNavbar from "./computer";
import WebsiteName from "../elements/boxes/websiteName";

interface NavbarProps {
    isFixed : boolean
}

const Navbar : React.FC<NavbarProps> = ({isFixed}) => {

    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    
    return (
        <nav className={`
            ${isFixed && "absolute top-0 z-50 w-full !shadow-none"}
            shadow-md
        `}>
            <div className={`${isFixed && "md:mx-16 mx-4 !pl-0"} flex justify-between items-center sm:px-12 px-1`}>
                {/* website Name & logo */}
                <WebsiteName isFixed={false} />
                {/* website menus */}
                <section>
                    <IconMenu2 className={`${isFixed && "scale-[2] p-[.3rem]"} ml-8 xl:hidden block cursor-pointer`} stroke={3} color="#2c3e50" onClick={() => setShowNavbar(true)}/>
                    <MobileNavbar setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
                    <ComputerNavbar isFixed={isFixed} />
                </section>
            </div>
        </nav>
    )
}

export default Navbar;