import { Dispatch, SetStateAction } from "react";

import CloseIcon from "./closeIcon";
import WebsiteName from "../websiteName";
import Links from "./links";
import UserBtns from "./userBtns";
import NavImg from "./navImg";
import Shadow from "./shadow";

interface MobileNavbarProps {
    setShowNavbar : Dispatch<SetStateAction<boolean>>,
    showNavbar : boolean,
}

const MobileNavbar : React.FC<MobileNavbarProps> = ({
    setShowNavbar,
    showNavbar
}) => {

    return (
        <div className={`${showNavbar ? "block" : "hidden"} fixed top-0 left-0 w-full h-full z-[999]`}>
            <Shadow setShowNavbar={setShowNavbar} />
            <div className="fixed flex flex-col items-start px-8 py-6 right-0 top-0 h-screen bg-white overflow-y-auto z-[99999]">
                <CloseIcon
                    state={showNavbar}
                    setState={setShowNavbar}
                    cls={"absolute top-2 left-2 cursor-pointer"}
                />
                <WebsiteName />
                <Links />
                <UserBtns />
                <NavImg />
            </div>
        </div>
    )
}

export default MobileNavbar;