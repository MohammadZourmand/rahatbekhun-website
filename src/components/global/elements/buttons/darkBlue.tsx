import Link from "next/link"

interface DarkBlueBtnProps {
    cls ?: string
    text : string
    href : string
}


const DarkBlueBtn : React.FC<DarkBlueBtnProps> = ({
    cls,
    text,
    href
}) => {

    return (
        <Link className={`${cls} bg-baby-9 transition duration-500 shadow-lg shadow-white hover:shadow-gray-300 text-white rounded-md px-5 py-2`} href={href}>
            {text}
        </Link>
    )
}

export default DarkBlueBtn;