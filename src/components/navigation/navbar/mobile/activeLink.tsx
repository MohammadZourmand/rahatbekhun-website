'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
import { ReactElement } from "react";

interface Props {
    children : ReactElement | (({active} : {active : boolean}) => ReactElement)
    href : string
    as ?: string
    className ?: string
}

const ActiveLink = ({children, href, ...props} : Props) => {

    const asPath = usePathname()
    const active = asPath === href || asPath === props?.as

    return (
        <Link href={href} {...props}>
            {
                typeof children === 'function'
                ? children({active})
                : children
            }
        </Link>
    )

}

export default ActiveLink;