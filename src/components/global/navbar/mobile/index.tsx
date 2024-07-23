'use client'

import {  HomeBrokenIcon } from "@/assets/icons";
import { Dispatch, SetStateAction, useState } from "react";
import Option from "./option";
import MoreOption from "./more";
import Link from "next/link";

import MenuBtn from "./menuBtn";
import Search from "./search";
import { usePathname } from "next/navigation";

const setMenuChildren = (value : string, setMenu : Dispatch<SetStateAction<string>>) => {

    return (<>{
        value === 'posts' || value === 'worksheets' || value === 'courses'
        ? (<Option value={value} />)
        : value === 'more'
            ? (<MoreOption />)
            : (<Search setMenu={setMenu}/>)
    }</>)
}

const ResponsiveMenu = () => {

    const [menu, setMenu] = useState<string>('')

    const path = usePathname()

    const menuShower = (value : string) => {
        menu === value
            ? setMenu('')
            : setMenu(value)
    }

    return (
        <div className='z-20 fixed flex flex-col gap-y-3 lg:hidden bottom-0 left-0 w-full'>
            {
                menu !== '' && <div className={`${menu !== "search" && 'bg-gray-800'} z-20 animate-scaleY rounded-3xl shadow-lg py-5 px-3 mx-2 w-[93%] self-center`}>
                    {(setMenuChildren(menu, setMenu))}
                </div>
            }
            <div className='relative z-30 bg-gray-800 flex items-center justify-evenly'>
                <MenuBtn name="دوره ها" url="courses" menuShower={menuShower}/>
                <MenuBtn name="کاربرگ" url="worksheets" menuShower={menuShower}/>
                <Link href={"/"} className={`${path === '/' ? 'bg-sky-400' : 'bg-amber-500'} relative bottom-1 border-2 border-gray-200 !rounded-b-3xl rounded-full px-5 py-2 scale-[1.4] flex flex-col items-center`}>
                    <HomeBrokenIcon cls="fill-white w-8 h-8"/>
                    <div className={`text-xs font-semibold mt-1 text-white`}>خانه</div>
                </Link>
                <MenuBtn name="پست ها" url="posts" menuShower={menuShower}/>
                <MenuBtn name="بیشتر" url="more" menuShower={menuShower}/>
            </div>
            {menu !== '' && <div className="animate-fade z-10 fixed top-0 left-0 w-full h-full bg-gray-900/50" onClick={() => setMenu('')}></div>}
        </div>
    )
}

export default ResponsiveMenu;