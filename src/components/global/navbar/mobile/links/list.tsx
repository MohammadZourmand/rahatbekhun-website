
import Link from "next/link";
import {FC, useState} from "react";
import { MobileNavbarListProps } from "./data";
import { PaperBrokenIcon, VideoBrokenIcon } from "@/assets/icons";

interface NavListProps {
    listInfo : MobileNavbarListProps
}

const NavList : FC<NavListProps> = ({
    listInfo
}) => {

    const [showList, setShowList] = useState<boolean>(false)

    return (
        <div className={"flex flex-col group cursor-pointer"}>
            <div
                onClick={() => setShowList(!showList)}
                className={"flex items-center font-semibold text-lg group cursor-pointer"}
            >
                <VideoBrokenIcon cls={"relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"} />
                <span className="group-hover:-translate-x-2 transition duration-500">{listInfo.name}</span>
            </div>
            {
                showList && <div className="flex flex-col mb-6 border-r-2 indent-6 w-full mr-4 px-2 text-base">
                    {
                        listInfo.items.map((item, index) => (
                            <Link href={"/"} className="py-3 font-normal rounded-lg cursor-pointer hover:bg-gray-200 w-full" key={index}>
                                {item}
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default NavList;