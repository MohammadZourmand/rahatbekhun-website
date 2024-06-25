
import { ChartBrokenIcon, ChatBrokenIcon, UserBrokenIcon } from "@/assets/icons";
import Link from "next/link";

interface LinkBoxProps {
    iconName : string
    cls ?: string
    title : string
    href : string
}

const iconChooser = (iconName : string) => {
    switch (iconName) {
        case "user": return (<UserBrokenIcon cls="fill-white w-8 h-8"/>)
        case "chart": return (<ChartBrokenIcon cls="fill-white w-8 h-8"/>)
        case "chat": return (<ChatBrokenIcon cls="fill-white w-8 h-8"/>)
    }
}

const LinkBox = ({iconName, cls, title, href} : LinkBoxProps) => {
    return (
        <Link href={href} className={`${cls} hover:-translate-y-3 hover:scale-105 duration-500 transition rounded-lg flex flex-col space-y-2 items-center justify-center`}>
            <div>
                {iconChooser(iconName)}
            </div>
            <div>
                <span className="text-sm text-white">{title}</span>
            </div>
        </Link>
    )
}

export default LinkBox;