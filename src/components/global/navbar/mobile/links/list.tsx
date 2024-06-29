
import Link from "next/link";
import {useState} from "react";
import { MobileNavbarListProps } from "./data";
import { PaperBrokenIcon, VideoBrokenIcon } from "@/assets/icons";

interface NavListProps {
    listInfo : MobileNavbarListProps
}

const NavList = ({ listInfo } : NavListProps) => {

    const [showList, setShowList] = useState<boolean>(false)

    return (
        <div className={"flex flex-col group cursor-pointer"}>
            <div
                onClick={() => setShowList(!showList)}
                className={"flex items-center font-semibold text-lg group cursor-pointer"}
            >
                {listInfo.icon}
                <span className="group-hover:-translate-x-2 transition duration-500">{listInfo.name}</span>
            </div>
            {
                showList && <div className="flex flex-col animate-scaleX mb-6 border-r-2 indent-6 w-full mr-4 px-2 text-base">
                    {
                        listInfo.items.map((item, index) => (
                            <Link href={item.href} className="py-3 font-normal rounded-lg cursor-pointer hover:bg-gray-200 w-full" key={index}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default NavList;