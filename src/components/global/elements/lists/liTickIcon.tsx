import { IconCheck } from "@tabler/icons-react";

interface LiTickIconProps {
    text : string
    cls ?: string
    iconCls ?: string
}

const LiTickIcon = ({text, cls, iconCls} : LiTickIconProps) => {

    return (
        <li className={`${cls} flex items-center`}>
            <IconCheck className={`w-5 h-5 ${iconCls}`} color="green"/>
            <p className="mr-2">{text}</p>
        </li>
    )
}

export default LiTickIcon;