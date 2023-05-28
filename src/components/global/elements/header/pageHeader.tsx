import Navbar from "../../navbar";
import Breadcrumb, { BreadcrumbItemsProps } from "../boxes/breadcrumb";


interface PageHeaderProps {
    title : string,
    breadcrumbItems : BreadcrumbItemsProps[]
    imgBgSrc : string
    imgBgCls ?: string
}

const PageHeader : React.FC<PageHeaderProps> = ({
    title,
    breadcrumbItems,
    imgBgSrc,
    imgBgCls
}) => {

    return (
        <header className={`
            lg:bg-[center_top_-8rem]
            overflow-hidden sm:h-[30rem] h-[25rem] bg-cover relative w-full
        `}>
            <img className={`${imgBgCls} absolute -top-20 left-0 w-full -z-10`} src={imgBgSrc} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
            <Navbar isWhite={true} />
            <div className={`text-white sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center my-32 xs:rounded-[5rem] rounded-[3rem]`}>
                <h2 className="sm:text-5xl text-[1.9rem] !leading-tight font-extrabold md:text-right text-center z-10">{title}</h2>
                <Breadcrumb items={breadcrumbItems} />
            </div>
        </header>
    )
}

export default PageHeader;