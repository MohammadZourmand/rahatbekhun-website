import { IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

interface CloseIconProps {
    state ?: boolean,
    setState : Dispatch<SetStateAction<boolean>>,
    cls ?: string,
    color ?: string,
    stroke ?: number
}

const CloseIcon = ({
    state,
    setState,
    cls,
    color,
    stroke
} : CloseIconProps) => {

    return (
        <IconX color={color ?? "#2c3e50"} className={`${cls} z-50 cursor-pointer`} stroke={stroke ?? 4} onClick={() => setState(false)} />
    )
}

export default CloseIcon;