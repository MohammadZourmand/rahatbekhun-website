import { ReactNode } from "react"

interface SectionHeaderProps {
    cls ?: string
    icon1 : ReactNode
    icon2 : ReactNode
    smallText : string
    largeText : string
    rightAlignment ?: boolean
}

const SectionHeader = ({
    cls,
    icon1,
    icon2,
    smallText,
    largeText,
    rightAlignment
} : SectionHeaderProps) => {

    return (
        <h2 className={`${cls} ${rightAlignment ? "items-right " : "items-center"} flex flex-col space-y-3 relative text-center text-3xl py-6`}>
            <span className="font-semibold text-lg text-slate-500"> {smallText} </span>
            <span className={`${rightAlignment && "!text-right"} font-bold text-center text-2xl text-slate-800`}> {largeText} </span>
            {icon1}
            {icon2}
        </h2>
    )
}

export default SectionHeader;