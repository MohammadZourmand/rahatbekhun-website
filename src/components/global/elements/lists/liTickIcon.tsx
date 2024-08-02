import { TickIcon } from "@/assets/icons";
import { ReactElement } from "react";

interface LiTickIconProps {
    text : string | ReactElement
    cls ?: string
    iconCls ?: string
}

const LiTickIcon = ({text, cls, iconCls} : LiTickIconProps) => {

    return (
        <li className={`${cls} flex items-center`}>
            <TickIcon cls="w-5 h-5" color="green"/>
            <p className="mr-2 flex items-center">{text}</p>
        </li>
    )
}

export default LiTickIcon;