
// ? React =======================
import {lazy , Suspense} from "react"

// ? components ==================
import ComputerNavbar from "./computer";
import WindowSize from "../functions/windowSize";

const FloatBtn = lazy(() => import(/* webpackChunkName : "float-btn" */"./mobile/floatBtn"))

interface NavbarProps {
    isWhite : boolean
}

const Navbar = ({isWhite} : NavbarProps) => {
    
    return (
        <>
            <nav className={`min-w-[320px] grid grid-cols-12 w-full px-4 items-center`}>
                <ComputerNavbar isWhite={isWhite} cls="col-span-12"/>
            </nav>
            <Suspense fallback={<p> Hello </p>}>
                {WindowSize().width <= 1024 && <FloatBtn />}
            </Suspense>
        </>
    )
}

export default Navbar;