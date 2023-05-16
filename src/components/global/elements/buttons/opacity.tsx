import { LeftIcon } from "@/assets/icons"
import Link from "next/link"

interface TransparentBtnProps {
    cls ?: string
    text : string
    href : string
}


const TransparentBtn : React.FC<TransparentBtnProps> = ({
    cls,
    text,
    href
}) => {

    return (
        <Link className={`${cls} flex items-center gap-1 transition group bg-transparent text-gray-900  rounded-md px-5 py-2`} href={href}>
            {text}
            <LeftIcon cls="group-hover:-translate-x-1.5 mr-0.5 duration-500 transition" color="rgba(55 65 81)" />
        </Link>
    )
}

export default TransparentBtn;