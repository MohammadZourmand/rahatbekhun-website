import { CartBrokenIcon, DownloadPaperBrokenIcon, EyeBrokenIcon, FilterBrokenIcon, HomeBrokenIcon, LeftIcon, PlusIcon, SearchBrokenIcon } from "@/assets/icons";
import Link from "next/link";

interface IconBtnProps {
    cls ?: string
    id ?: string
    text : string
    type ?: "button" | "submit" | "reset"
    iconName : string
    href ?: string
    target ?: any
    onClick ?: any
    download ?: any
}

const iconChooser : (key : string) => any = (key : string) => {
    switch (key) {
        case "search":
            return (<SearchBrokenIcon cls="group-hover:scale-[1.2] transition fill-white w-6 h-6 mr-3"/>)
        case "eye":
            return (<EyeBrokenIcon cls="group-hover:scale-[1.2] transition fill-white w-6 h-6 mr-3"/>)
        case "filter":
            return (<FilterBrokenIcon cls="group-hover:scale-[1.2] transition fill-white w-6 h-6 mr-3"/>)
        case "cart":
            return (<CartBrokenIcon cls="group-hover:scale-[1.2] transition fill-white w-6 h-6 mr-3"/>)
        case "left":
            return (<LeftIcon cls="group-hover:scale-[1.05] group-hover:-translate-x-1.5 transition fill-white w-6 h-6 mr-3"/>)
        case "plus":
            return (<PlusIcon cls="group-hover:scale-[1.05] transition fill-white w-6 h-6 mr-3"/>)
        case "download":
            return (<DownloadPaperBrokenIcon cls="group-hover:scale-[1.05] transition fill-white w-6 h-6 mr-3"/>)
        case "home":
            return (<HomeBrokenIcon cls="group-hover:scale-[1.05] transition fill-white w-6 h-6 mr-3"/>)    
        default:
            return null
    }
}

const IconBtn = ({
    cls, text, href, iconName, ...props
} : IconBtnProps) => {

    return (
        href
        ? 
            (
                <Link
                    href={href} 
                    className={`${cls} group my-8 flex items-center justify-center transition-all text-center text-base font-semibold bg-baby-3 text-white p-5 rounded-xl`}
                    {...props}
                >
                    {text}
                    {iconChooser(iconName)}
                </Link>
            )
        : 
            (
                <button 
                    className={`${cls} group my-8 flex items-center justify-center transition-all text-center text-base font-semibold bg-baby-3 text-white p-5 rounded-xl`}
                    {...props}
                >
                    {text}
                    {iconChooser(iconName)}
                </button>
            )

    )
}

export default IconBtn;