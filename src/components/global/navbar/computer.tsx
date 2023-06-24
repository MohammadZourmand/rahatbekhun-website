// ? react =======================
import Link from "next/link";

// ? components ==================
import WebsiteName from "../elements/boxes/websiteName";

// ? assets ======================
import { SearchBrokenIcon } from "@/assets/icons";
import SubMenus from "./subMenus";
import PopupIcons from "./popups";


interface ComputerNavbarProps {
    cls ?: string
    subMenusCls ?: string
    setIsFocusOnSearch : React.Dispatch<React.SetStateAction<boolean>>
    isWhite : boolean
}


const ComputerNavbar : React.FC<ComputerNavbarProps> = ({subMenusCls, cls, setIsFocusOnSearch, isWhite}) => {

    const linkStyle = `group flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    return (
        <div className={`${cls} flex justify-between items-center rounded-lg`}>
            <div className="flex items-center">
                <WebsiteName isWhite={isWhite} cls="justify-center ml-8" />
                <SubMenus isWhite={isWhite} cls={subMenusCls} />
            </div>
            <div className="flex items-center space-x-reverse space-x-3 xl:px-10 lg:px-6">
                <div onClick={() => setIsFocusOnSearch(true)} className={`${linkStyle}`}>
                    <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
                </div>
                <PopupIcons isWhite={isWhite} />
            </div>
        </div>
    )
}

export default ComputerNavbar;