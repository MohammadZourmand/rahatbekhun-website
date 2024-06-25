import {useState} from "react"
import Link from "next/link";


// ? components ==================
import { SubMenusValues } from "./subMenu/data";
import dynamic from "next/dynamic";

const SubMenu = dynamic(() => import(/* webpackChunkName : "iran" */'./subMenu'))

interface SubMenuProps {
    isWhite : boolean
    cls ?: string
}

const SubMenus = ({isWhite, cls} : SubMenuProps) => {

    const [showSubMenus, setShowSubMenus] = useState<boolean>(false)
    const linkStyle = `${isWhite ? "after:border-b-white" : "after:border-b-baby-1"} z-40 group py-5 px-1 after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] relative text-center nozha transition`

    return (
        <div className={`${cls} lg:flex hidden xl:space-x-reverse space-x-reverse xl:space-x-16 space-x-10 items-center justify-start xl:px-10 lg:px-6 text-baby-1 text-[1.7rem]`}>
                {
                    SubMenusValues.map((item, index) => {
                        return (
                            <div className={linkStyle} key={index} onMouseEnter={() => setShowSubMenus(true)}>
                                <div className={`${isWhite && "text-white"} nozha`}> {item?.name} </div>
                                {showSubMenus && <SubMenu
                                    item={item}
                                    isWhite={isWhite}
                                />}
                            </div>
                        )
                    })
                }
            <Link href={"/blog"} className={linkStyle}>
                <div className={`${isWhite && "text-white"} nozha`}>وبلاگ</div>
            </Link>
            <Link href={"/about"} className={linkStyle}>
                <div className={`${isWhite && "text-white"} nozha`}>درباره ما</div>
            </Link>
        </div>
    )
}

export default SubMenus;