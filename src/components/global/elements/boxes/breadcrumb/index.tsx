// ? react =============
import Link from "next/link"

export interface BreadcrumbItemsProps {
    href : string
    value : string
}

interface BreadcrumbProps {
    items : BreadcrumbItemsProps[]
    cls ?: string
    isWhite : boolean
    size ?: string
}   

const Breadcrumb : React.FC<BreadcrumbProps> = ({cls, items, isWhite, size}) => {

    return (
        <h3 className={`${cls} ${isWhite === undefined ? "text-medium" : `text-${size}`} !leading-none my-8 z-10`}>
            <Link className={`${isWhite ? "text-white" : "text-gray-600"}`} href={"/"}> خانه </Link>
            {
                items?.map((item : BreadcrumbItemsProps, index : number) => {
                    return (
                        <Link className={`${isWhite ? "text-white" : "text-gray-600"}`} href={item?.href} key={index}>
                            <span className={`${isWhite ? "after:bg-white" : "after:bg-gray-600"} relative mx-3 after:absolute after:bottom-2 after:left-0 after:w-1 after:h-1 after:rounded-full`}></span>
                            <span>{item?.value}</span>
                        </Link>
                    )
                })
            }
        </h3>
    )
}

export default Breadcrumb;