import {useEffect, useRef, useState} from "react";

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
            <div className={`${isFixed && "xl:mx-16 lg:mx-6 md:mx-16 mx-4 !pl-0"} z-[9999] flex justify-between items-center sm:px-12 px-1`}>
                {/* website Name & logo */}
                <WebsiteName isFixed={false} />
                {/* website menus */}
                    <ComputerNavbar isFixed={isFixed} />
            </div>
        </nav>
    )
}

export default Navbar;