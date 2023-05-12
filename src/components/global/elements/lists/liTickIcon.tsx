import { IconCheck } from "@tabler/icons-react";

interface LiTickIconProps {
    text : string
}

const LiTickIcon : React.FC<LiTickIconProps> = ({text}) => {

    return (
        <li className="flex items-center">
            <IconCheck className="w-5 h-5" color="green"/>
            <p className="mr-2">{text}</p>
        </li>
    )
}

export default LiTickIcon;