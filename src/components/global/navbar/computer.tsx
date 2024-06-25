// ? react =======================
import Link from "next/link";
import dynamic from "next/dynamic";

// ? components ==================
import WebsiteName from "../elements/boxes/websiteName";
import WindowSize from "../functions/windowSize";

// ? assets ======================
import { SearchBrokenIcon } from "@/assets/icons";

const SubMenus = dynamic(() => import("./subMenus"))
const PopupIcons = dynamic(() => import("./popups"))

interface ComputerNavbarProps {
    cls ?: string
    subMenusCls ?: string
    isWhite : boolean
}

const ComputerNavbar = ({subMenusCls, cls, isWhite} : ComputerNavbarProps) => {

    const linkStyle = `group flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    return (
        <div className={`${cls} flex justify-between items-center rounded-lg pt-1`}>
            <div className="flex items-center">
                <WebsiteName isWhite={isWhite} cls="justify-center ml-8" />
                {WindowSize().width >= 1024 && <SubMenus isWhite={isWhite} cls={subMenusCls} />}
            </div>
            <div className="flex items-center md:gap-x-3 gap-x-2 xl:px-10 lg:px-6">
                <Link href={"/search"} className={`${linkStyle}`}>
                    <SearchBrokenIcon cls={"lg:w-6 w-5 lg:h-6 h-5 group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
                </Link>
                {WindowSize().width >= 1024 && <PopupIcons isWhite={isWhite} /> }
            </div>
        </div>
    )
}

export default ComputerNavbar;