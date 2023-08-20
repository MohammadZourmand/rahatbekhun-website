import Link from "next/link";

import { EditBrokenIcon, HomeBrokenIcon, PhoneBroken } from "@/assets/icons";

import { MobileNavbarList } from "./data";
import NavList from "./list";

const Links : React.FC = () => {

    const iconStyle = "relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"
    const linkStyle = "flex items-center font-semibold text-lg group cursor-pointer"
    const textStyle = "group-hover:-translate-x-2 transition duration-500"

    return (
        <div className="my-4 flex flex-col w-full">
            <Link href="/" className={linkStyle}>
                <HomeBrokenIcon cls={iconStyle} />
                <span className={textStyle}> خانه </span>
            </Link>
            {
                MobileNavbarList.map((item, index) => (
                    <NavList listInfo={item} key={index}/>
                ))
            }
            <Link href="blog" className={linkStyle}>
                <EditBrokenIcon cls={iconStyle} />
                <span className={textStyle}> وبلاگ </span>
            </Link>
            <Link href="about" className={linkStyle}>
                <PhoneBroken cls={iconStyle} />
                <span className={textStyle}> ارتباط با ما </span>
            </Link>
        </div>
    )
}

export default Links;