'use client'

import { useState} from "react";
import dynamic from "next/dynamic";

import { UserBrokenIcon } from "@/assets/icons";

const UserPanelPopupBox = dynamic(() => import("./popup"))

interface UserPanelPopupProps {
    isWhite : boolean
}

const UserPanelPopup = ({ isWhite } : UserPanelPopupProps) => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="relative flex">
            {/* // ! LINK ICON */}
            <div onClick={() => setShow(true)} className={`group cursor-pointer flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition flex`}>
                <UserBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
            </div>
            {/* // ! POPUP */}
            { show && <UserPanelPopupBox setShow={setShow} />}
        </div>
    )
}

export default UserPanelPopup;