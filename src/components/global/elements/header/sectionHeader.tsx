import { ReactNode } from "react"

interface SectionHeaderProps {
    cls ?: string
    icon1 : ReactNode
    icon2 : ReactNode
    smallText : string
    largeText : string
}

const SectionHeader : React.FC<SectionHeaderProps> = ({
    cls,
    icon1,
    icon2,
    smallText,
    largeText
}) => {

    return (
        <h2 className={`${cls} flex flex-col items-center space-y-3 relative text-center text-3xl py-6 px-14`}>
            <span className="font-semibold text-lg text-slate-500"> {smallText} </span>
            <span className="font-bold text-2xl text-slate-800"> {largeText} </span>
            {icon1}
            {icon2}
        </h2>
    )
}

export default SectionHeader;