import Link from "next/link";
import { FC } from "react";

interface BlueLinkProps {
    href : string
    text : string
    cls ?: string
}


const BlueLink : FC<BlueLinkProps> = ({href, text, cls}) => {

    return (
        <Link className={`${cls} text-baby-9`} href={href}>
            {text}
        </Link>
    )
}

export default BlueLink;