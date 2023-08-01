import Breadcrumb, { BreadcrumbItemsProps } from "@/components/global/elements/boxes/breadcrumb"
import Navbar from "@/components/global/navbar"

interface SingleArticlePageHeaderProps {
    title : string,
    breadcrumbItems : BreadcrumbItemsProps[]
    imgBgSrc : string
    imgBgCls ?: string
    cls ?: string
}

const SingleArticlePageHeader : React.FC<SingleArticlePageHeaderProps> = ({
    title,
    breadcrumbItems,
    imgBgSrc,
    imgBgCls,
    cls
}) => {

    return (
        <header className={` lg:bg-[center_top_-8rem]
            ${cls} overflow-hidden sm:h-[30rem] h-[25rem] bg-cover relative w-full
        `}>
            <img className={`${imgBgCls} absolute xl:-top-20 left-0 w-full -z-10`} src={imgBgSrc} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            <Navbar isWhite={true} />
            <div className={`text-white sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center xl:my-24 my-20 xs:rounded-[5rem] rounded-[3rem]`}>
                <h2 className="sm:text-5xl text-[1.9rem] !leading-tight font-extrabold md:text-right text-center z-10">{title}</h2>
                <Breadcrumb items={breadcrumbItems} isWhite={true} />
            </div>
        </header>
    )
}

export default SingleArticlePageHeader;