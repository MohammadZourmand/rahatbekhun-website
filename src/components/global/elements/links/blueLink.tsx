import Link from "next/link";

interface BlueLinkProps {
    href : string
    text : string
    cls ?: string
}


const BlueLink = ({href, text, cls} : BlueLinkProps) => {

    return (
        <Link className={`${cls} text-baby-9`} href={href}>
            {text}
        </Link>
    )
}

export default BlueLink;