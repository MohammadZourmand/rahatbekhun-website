import { XIcon } from "@/assets/icons";
import { Dispatch, SetStateAction } from "react";

interface CloseIconProps {
    state ?: boolean,
    setState : Dispatch<SetStateAction<boolean>>,
    cls ?: string,
    color ?: string,
    stroke ?: any
}

const CloseIcon = ({
    state,
    setState,
    cls,
    color,
    stroke
} : CloseIconProps) => {

    return (
        <XIcon
            color={color ?? "#2c3e50"}
            cls={`${cls} z-50 cursor-pointer`}
            stroke={stroke ?? "4"}
            onClick={() => setState(false)} 
        />
    )
}

export default CloseIcon;