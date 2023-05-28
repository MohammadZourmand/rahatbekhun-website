// ? react =============
import Link from "next/link"

export interface BreadcrumbItemsProps {
    href : string
    value : string
}

interface BreadcrumbProps {
    items : BreadcrumbItemsProps[]
    cls ?: string
}   

const Breadcrumb : React.FC<BreadcrumbProps> = ({cls, items}) => {

    return (
        <h3 className={`${cls} text-medium !leading-none my-8 z-10`}>
            <Link href={"//"}> خانه </Link>
            {
                items?.map((item : BreadcrumbItemsProps, index : number) => {
                    return (
                        <Link href={item?.href} key={index}>
                            <span className="relative mx-3 after:absolute after:bottom-2 after:left-0 after:w-1 after:h-1 after:bg-white after:rounded-full"></span>
                            <span>{item?.value}</span>
                        </Link>
                    )
                })
            }
        </h3>
    )
}

export default Breadcrumb;