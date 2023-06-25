// ? react & next ================
import Link from "next/link";
import {useState} from "react";

// ? libraries ===================
import PN from "persian-number";

// ? assets ======================
import { AlarmBrokenIcon, CartBrokenIcon, CategoryBroken, UserBrokenIcon } from "@/assets/icons";
import CloseIcon from "../mobile/closeIcon";
import Heading6 from "../../elements/headings/h6";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Cart from "./cart";

interface PopupIconsProps {
    isWhite : boolean
}

const PopupIcons : React.FC<PopupIconsProps> = ({isWhite}) => {
    
    const [cartInfo, setCartInfo] = useState({})



    const linkStyle = `group cursor-pointer flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    return (
        <>
            <Cart isWhite={isWhite}/>
            <Link href={"/profile"} className={`${linkStyle} md:flex hidden`}>
                <AlarmBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
                <span className={`absolute -bottom-1 -right-1 bg-baby-4 px-2 rounded-full`}> {PN.convertEnToPe(1)} </span>
            </Link>
            <Link href={"/profile"} className={`${linkStyle} md:flex hidden`}>
                <UserBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
            </Link>
            <Link href={"/profile"} className={`${linkStyle} lg:hidden`}>
                <CategoryBroken cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
            </Link>
        </>
    )
}

export default PopupIcons;