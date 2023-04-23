import {useState} from "react";

import ComputerNavbar from "./computer";
import WebsiteName from "../elements/boxes/websiteName";


import { AlarmBrokenIcon, CartBrokenIcon, SearchBrokenIcon, UserBrokenIcon } from "@/assets/icons";
import Link from "next/link";

interface NavbarProps {
    cls : string
}

const Navbar : React.FC<NavbarProps> = ({cls}) => {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    const [selectedType, setSelectedType] = useState<number>(1)
    
    const linkStyle = `group flex items-center justify-center bg-baby-1 rounded-full w-12 h-12 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    interface searchTypesProps {
        id : number,
        type : string,
        img : string,
    }

    const searchTypes : searchTypesProps[] = [
        {
            id : 1,
            type : "تمامی مطالب",
            img : "./images/home/searchTypes/all.png",
        },
        {
            id : 2,
            type : "صفر تا صد",
            img : "./images/home/searchTypes/100.png",
        },
        {
            id : 3,
            type : "کاربرگ",
            img : "./images/home/searchTypes/worksheet.png",
        },
        {
            id : 4,
            type : "ویدیو",
            img : "./images/home/searchTypes/video.png",
        },
        {
            id : 5,
            type : "بازی",
            img : "./images/home/searchTypes/game.png",
        },
        {
            id : 6,
            type : "آزمون",
            img : "./images/home/searchTypes/exam.png",
        },
        {
            id : 7,
            type : "داستان",
            img : "./images/home/searchTypes/storybook.png",
        },
        {
            id : 8,
            type : "مقالات",
            img : "./images/home/searchTypes/articles.png",
        },
    ]

    return (
        <nav className={`${cls} grid grid-cols-12 items-center`}>
            {/* shadow for window when the search form is focus ... */}
            <div onClick={() => setIsFocus(false)} className={`${isFocus ? "fixed" : "hidden"} animate-fade bg-gray-900/80 z-40 top-0 left-0 w-full h-full`}></div>
            <div className={`relative col-span-12 grid grid-cols-12 gap-x-6 justify-between items-center sm:px-12 shadow-all-lg my-6 mx-32 mb-0 py-4 px-4 rounded-xl after:hidden`}>
                <WebsiteName cls="col-span-3" />
                <form className="group col-span-6 grid grid-cols-12 relative z-50">
                    <input onFocus={() => setIsFocus(true)} placeholder="دنبال چی میگردی ؟" type="text" className="placeholder:text-sm bg-slate-200 pr-12 py-3 col-span-12 rounded-xl focus:outline-none" />
                    <button className={`absolute top-1/4 right-3`}>
                        <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="#4b5563" />
                    </button>
                </form>
                <div className="flex col-span-3 justify-around px-6">
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <CartBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <AlarmBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                    <Link href={"/profile"} className={`${linkStyle}`}>
                        <UserBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    </Link>
                </div>
                <div className={`${isFocus ? "absolute" : "hidden"} top-28 left-[22%] grid grid-cols-12 justify-center z-50 w-7/12 h-96`}>
                    <h2 className="col-span-12 text-center nozha text-5xl py-6 text-white"> دنبال چه موضوعی می گردی ؟ </h2>
                    <section className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-4">
                        {
                            searchTypes.map((item : searchTypesProps) => (
                                <div onClick={() => setSelectedType(item.id)} key={item.id} className={`${selectedType === item.id && "!bg-baby-2"} cursor-pointer hover:bg-baby-2 bg-white rounded-xl col-span-3 p-4 flex flex-col items-center justify-center`}>
                                    <img className="w-20 h-20" src={item.img} alt="" />
                                    <p className="text-4xl nozha mt-4">{item.type}</p>
                                </div>
                            ))
                        }
                    </section>
                </div>
            </div>
            <ComputerNavbar cls="col-span-12"/>
        </nav>
    )
}

export default Navbar;