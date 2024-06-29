'use'

// ? React =======================
import dynamic from "next/dynamic";

// ? components ==================
import WindowSize from "../functions/windowSize";
import WebsiteName from "../elements/boxes/websiteName";
import SubMenus from "./subMenus";
import { SearchBrokenIcon } from "@/assets/icons";
import PopupIcons from "./popups";
import Link from "next/link";

const FloatBtn = dynamic(() => import(/* webpackChunkName : "float-btn" */"./mobile/floatBtn"))

interface NavbarProps {
    isWhite : boolean
    cls ?: string
}

const Navbar = ({isWhite, cls} : NavbarProps) => {

    const linkStyle = `group flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center py-4 px-1 transition`  

    return (
        <>
            <nav className={`${cls} min-w-[320px] grid grid-cols-12 w-full px-4 items-center`}>
                <div className={`col-span-12 flex justify-between items-center rounded-lg pt-1`}>
                    
                    <div className="flex items-center">
                        <WebsiteName isWhite={isWhite} cls="justify-center ml-8" />
                        {
                            1222 >= 1024 && <SubMenus isWhite={isWhite} />
                        }
                    </div>

                    <div className="flex items-center gap-x-3">
                        
                        {
                            1222 >= 1024
                                ? <PopupIcons isWhite={isWhite} />
                                : <FloatBtn />
                        }
                        
                        <Link href={"/search"} className={`${linkStyle}`}>
                            <SearchBrokenIcon cls={"lg:w-6 w-5 lg:h-6 h-5 group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;