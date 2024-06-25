import Link from "next/link"

interface WhiteBtnProps {
    cls ?: string
    text : string
    href : string
}

const WhiteBtn = ({href,cls,text} : WhiteBtnProps) => {

    return (
        <Link className={`${cls} hover:bg-white hover:text-gray-700 transition duration-500 text-white border border-white rounded-md px-4 py-2`} href={href}>
            {text}
        </Link>
    )
}

export default WhiteBtn;