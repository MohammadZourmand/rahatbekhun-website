import Image from "next/image"

interface IconChooserProps {
    type : string
} 

export const TypeMessageIconChooser = ({type} : IconChooserProps) => {
    switch (type) {
        case "warning": return (
            <Image 
                src={"/images/icons/warning.webp"}
                alt="علامت-اخطار"
                width={56}
                height={56}
            />
        )
        case "info": return (
            <Image 
                src={"/images/icons/info.webp"}
                alt="علامت-اخطار"
                width={56}
                height={56}
            />
        )
        case "success": return (
            <Image 
                src={"/images/icons/checked.webp"}
                alt="علامت-تیک-موفقیت"
                width={56}
                height={56}
            />
        )
        default: return (
            <Image 
                src={"/images/icons/cancel.webp"}
                alt="علامت-ضربدر-ناموفق"
                width={56}
                height={56}
            />
        )
    }
}

export const messageBgColorChooser = (type : string) => {

    switch (type) {
        case "warning": return "bg-amber-400/60 hover:bg-amber-400/80"
        case "info": return "bg-cyan-400/60 hover:bg-cyan-400/100"
        case "success": return "bg-green-400/60 hover:bg-green-400/100"
        default: return "bg-rose-400/60 hover:bg-rose-400/100"
    }
}

export const messageHeadTextColorChooser = (type : string) => {

    switch (type) {
        case "warning": return "text-amber-900"
        case "info": return "text-blue-900"
        case "success": return "text-Emerald-900"
        default: return "text-rose-900"

    }
}

export const messageTextColorChooser = (type : string) => {

    switch (type) {
        case "warning": return "text-amber-800"
        case "info": return "text-blue-800"
        case "success": return "text-Emerald-800"
        default: return "text-rose-800"

    }
}