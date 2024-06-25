import Link from "next/link";

interface LiFooterProps {
    item : {href : string, name : string}
}


const LiFooter = ({item} : LiFooterProps) => {

    return (
        <li className="text-gray-600 lg:text-right text-center">
            <Link href={item.href}>
                {item.name}
            </Link>
        </li>
    )
}

export default LiFooter;