import { SearchBrokenIcon } from "@/assets/icons";
import { FC } from "react";

interface IconBtnProps {
    cls ?: string
    id ?: string
    text : string
    type ?: "button" | "submit" | "reset"
    iconName : string
}

const iconChooser : (key : string) => any = (key : string) => {
    switch (key) {
        case "search":
            
            return (<SearchBrokenIcon cls="group-hover:scale-[1.2] transition fill-white w-6 h-6 mr-3"/>)
    
        default:
            return null
    }
}

const IconBtn : FC<IconBtnProps> = ({
    cls, text, iconName, ...props
}) => {

    return (
        <button 
            className={`${cls} group my-8 flex items-center text-base font-semibold bg-baby-3 text-white p-5 rounded-xl`}
            {...props}
        >
            {text}
            {iconChooser(iconName)}
        </button>
    )
}

export default IconBtn;