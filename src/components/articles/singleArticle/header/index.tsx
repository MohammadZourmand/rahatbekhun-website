import { ClockBroken } from "@/assets/icons"
import Breadcrumb, { BreadcrumbItemsProps } from "@/components/global/elements/boxes/breadcrumb"
import Paragraph from "@/components/global/elements/paragraph"
import { badgeBgColorChooser, badgeTextColorChooser, badgeTextTranslator, singleArticleBadgeBgColorChooser } from "@/components/global/elements/translators/badgeColorChooser"
import Navbar from "@/components/global/navbar"
import Image from "next/image"
import { convertEnToPe } from "persian-number"
interface SingleArticlePageHeaderProps {
    title : string,
    imgBgSrc : string
    imgBgAlt : string
    imgBgCls ?: string
    cls ?: string
    category : string
    author : string
    date : string
}

const SingleArticlePageHeader = ({
    title,
    imgBgSrc,
    imgBgAlt,
    imgBgCls,
    cls,
    category,
    author,
    date
} : SingleArticlePageHeaderProps) => {

    return (
        <header className={` lg:bg-[center_top_-8rem]
            ${cls} overflow-hidden sm:h-[30rem] h-[25rem] bg-cover relative w-full
        `}>
            <Image
                src={imgBgSrc}
                className={`${imgBgCls} absolute xl:-top-20 left-0 w-full -z-10`}
                alt={imgBgAlt}
                fill
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            <Navbar isWhite={true} />
            <div className={`text-white sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center xl:my-24 my-20 xs:rounded-[5rem] rounded-[3rem]`}>
                <div className={`${singleArticleBadgeBgColorChooser(category)} z-0 mb-6 text-white justify-self-start text-sm font-semibold  px-3 py-[3px] rounded`}>{badgeTextTranslator(category)}</div>
                <h2 className="sm:text-[3.5rem] text-[1.9rem] tracking-tight !leading-tight font-black md:text-right text-center z-10">{title}</h2>
                <div className="flex mt-3">
                    <div className="flex mt-4 mb-4 items-center">
                    <Image
                        src={'/images/home/teachers/mohammad-zourmand.jpg'}
                        className={`w-9 h-9 border-2 border-white shadow-xl rounded-full z-0`}
                        alt={"author"}
                        width={36}
                        height={36}
                    />
                        <Paragraph cls="z-0 text-sm mr-3 text-white" text={author} />
                    </div>
                    <div className="flex items-center mr-12">
                        <ClockBroken cls="ml-2 w-5 h-5 fill-white z-0" />
                        <Paragraph cls="font-medium text-sm mt-0.5 z-0 text-white" text={convertEnToPe(date)} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SingleArticlePageHeader;