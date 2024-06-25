
// ? React =======================
import dynamic from "next/dynamic";

// ? components ==================
import ComputerNavbar from "./computer";
import WindowSize from "../functions/windowSize";

const FloatBtn = dynamic(() => import(/* webpackChunkName : "float-btn" */"./mobile/floatBtn"))

interface NavbarProps {
    isWhite : boolean
    cls ?: string
}

const Navbar = ({isWhite, cls} : NavbarProps) => {
    
    return (
        <>
            <nav className={`${cls} min-w-[320px] grid grid-cols-12 w-full px-4 items-center`}>
                <ComputerNavbar isWhite={isWhite} cls="col-span-12"/>
            </nav>
            {WindowSize().width <= 1024 && <FloatBtn />}
        </>
    )
}

export default Navbar;