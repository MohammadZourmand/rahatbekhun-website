'use client'

import {useState} from "react";
import dynamic from "next/dynamic";

import PN from "persian-number";

import { AlarmBrokenIcon } from "@/assets/icons";

const MessagesPopup = dynamic(() => import("./popup"))

interface MessagesProps {
    isWhite : boolean
}

const Messages = ({ isWhite } : MessagesProps) => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="relative flex">
            {/* // ! LINK ICON */}
            <div onClick={() => setShow(true)} className={`group cursor-pointer flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition flex`}>
                <AlarmBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
                <span className={`absolute -bottom-1 -right-1 bg-baby-4 px-2 rounded-full`}> {PN.convertEnToPe(1)} </span>
            </div>
            {/* // ! POPUP */}
            { show && <MessagesPopup setShow={setShow} />}
        </div>
    )
}

export default Messages;