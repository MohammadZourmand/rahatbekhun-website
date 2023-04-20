import {useEffect, useRef, useState} from "react";

import ComputerNavbar from "./computer";
import WebsiteName from "../elements/boxes/websiteName";


import { AlarmBrokenIcon, CartBrokenIcon, SearchBrokenIcon, UserBrokenIcon } from "@/assets/icons";
import Link from "next/link";

interface NavbarProps {
    cls : string
}

const Navbar : React.FC<NavbarProps> = ({cls}) => {

    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    
    const linkStyle = `group flex items-center justify-center border border-baby-6 bg-baby-6 rounded-full w-12 h-12 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    return (
        <nav className={`${cls} grid grid-cols-12 items-center`}>
            <div className={`col-span-12 grid grid-cols-12 justify-between items-center sm:px-12 shadow-all-lg my-6 mx-32 mb-0 py-4 px-4 group rounded-xl after:hidden`}>
                <WebsiteName cls="col-span-3" />
                <div className="col-span-6">
                    
                </div>
                <div className="flex col-span-3 justify-around px-6">
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <UserBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <CartBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <AlarmBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                </div>
            </div>
            <ComputerNavbar cls="col-span-12"/>
        </nav>
    )
}

export default Navbar;