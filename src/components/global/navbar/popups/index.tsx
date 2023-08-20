// ? react & next ================
import {useState} from "react";

// ? libraries ===================
import PN from "persian-number";

// ? assets ======================
import { AlarmBrokenIcon, CategoryBroken, UserBrokenIcon } from "@/assets/icons";
import Cart from "./cart";
import Messages from "./messages";
import UserPanelPopup from "./user";

interface PopupIconsProps {
    isWhite : boolean
}

const PopupIcons : React.FC<PopupIconsProps> = ({isWhite}) => {
    
    const [cartInfo, setCartInfo] = useState({})

    const linkStyle = `group cursor-pointer flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    return (
        <>
            <Cart isWhite={isWhite}/>
            <Messages isWhite={isWhite} />
            <UserPanelPopup isWhite={isWhite} />
        </>
    )
}

export default PopupIcons;