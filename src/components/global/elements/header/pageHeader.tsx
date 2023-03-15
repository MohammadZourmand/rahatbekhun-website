import PinkBtn from "@/components/global/elements/buttons/pink";
import PinkWave from "../../waves/pinkWave";
import WhiteWave from "../../waves/whiteWave";
import { useEffect, useState } from "react";

interface PageHeaderProps {
    hasLinkBtn : boolean,
    head1 ?: string,
    head2 ?: string,
    linkText ?: string,
    mainText ?: string,
    page : string
}

const PageHeader : React.FC<PageHeaderProps> = ({
    hasLinkBtn,
    head1,
    head2,
    linkText,
    mainText,
    page
}) => {

    return (
        <header className={`
            ${hasLinkBtn ? "h-[48rem]" : "h-[40rem]"}
            ${page === "blog" && "bg-[url('/images/blog/keyboard-with-yellow-flowers-cup.jpg')]"}
            ${page === "home" && "bg-[url('/images/home/drawing-by-desk.jpg')] "}
            bg-center bg-no-repeat bg-cover
            flex items-center justify-center overflow-hidden relative w-full
        `}>
            {
                hasLinkBtn
                ?
                    (
                        <div className="absolute sm:left-[100px] xs:left-[20px] left-[1.5vw] top-16 sm:w-[32rem] sm:h-[32rem] xs:w-[28rem] xs:h-[28rem] w-[90vw] h-[32rem] sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center xs:rounded-[5rem] rounded-[3rem] bg-white">
                            <h2 className="roosta text-baby-1 sm:text-[96px] text-[88px] !leading-tight font-extrabold md:text-right text-center"> {head1} </h2>
                            <h3 className="roosta text-baby-4 sm:text-4xl !leading-none text-[1.45rem] my-8"> {head2} </h3>
                            <PinkBtn text={linkText ?? ""} />
                        </div>
                    )
                :
                    (
                        <div className="absolute sm:left-[100px] xs:left-[20px] left-[1.5vw] top-16 sm:w-[32rem] sm:h-[32rem] xs:w-[28rem] xs:h-[28rem] w-[90vw] h-[32rem] sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center">
                            <h1 className="roosta text-slate-800 sm:text-[96px] text-[88px] !leading-tight font-extrabold md:text-right text-center"> {mainText} </h1>
                        </div>
                    )
            }
            {
                hasLinkBtn && <PinkWave cls={`absolute xl:-bottom-[116px] lg:-bottom-[90px] md:-bottom-[60px] sm:-bottom-[40px] xs:-bottom-[20px] -bottom-[14px] scale-y-[.362] z-[2]`}/>             
            }
            <WhiteWave cls={`absolute xl:-bottom-[128px] lg:-bottom-[100px] md:-bottom-[70px] sm:-bottom-[50px] xs:-bottom-[30px] -bottom-[22px]  ${page !== "home" && "md:-bottom-[60px] xs:-bottom-[40px] -bottom-[24px] scale-y-[.6]"} z-[3]`}/>
        </header>
    )
}

export default PageHeader;