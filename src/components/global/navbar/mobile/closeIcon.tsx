import { IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

interface CloseIconProps {
    state ?: boolean,
    setState : Dispatch<SetStateAction<boolean>>,
    cls ?: string,
    color ?: string,
    stroke ?: number
}

const CloseIcon : React.FC<CloseIconProps> = ({
    state,
    setState,
    cls,
    color,
    stroke
}) => {

    return (
        <IconX color={color ?? "#2c3e50"} className={cls} stroke={stroke ?? 4} onClick={() => setState(!state ?? false)} />
    )
}

export default CloseIcon;