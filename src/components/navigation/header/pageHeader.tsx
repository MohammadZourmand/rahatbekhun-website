import Image from "next/image";
import Navbar from "../navbar";
import Breadcrumb, { BreadcrumbItemsProps } from "../../elements/boxes/breadcrumb";

interface PageHeaderProps {
    title : string,
    breadcrumbItems : BreadcrumbItemsProps[]
    imgBgSrc : string
    imgBgCls ?: string
    cls ?: string
    imgBoxCls ?: string
}

const PageHeader = ({
    title,
    breadcrumbItems,
    imgBgSrc,
    imgBgCls,
    cls,
    imgBoxCls
} : PageHeaderProps) => {

    return (
        <header className={` lg:bg-[center_top_-8rem]
            ${cls} overflow-hidden sm:h-[30rem] h-[25rem] bg-cover relative w-full
        `}>
            <div className={`${imgBoxCls} absolute w-full h-[130%] left-0`}>
                <Image
                    className={`${imgBgCls} -z-10`}
                    src={imgBgSrc}
                    alt={title}
                    fill
                    priority
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            <Navbar isWhite={true} />
            <div className={`text-white sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center xl:my-24 my-20 xs:rounded-[5rem] rounded-[3rem]`}>
                <h2 className="sm:text-5xl text-[1.9rem] !leading-tight font-black md:text-right text-center z-10">{title}</h2>
                <Breadcrumb items={breadcrumbItems} isWhite={true} />
            </div>
        </header>
    )
}

export default PageHeader;