
import Lottie from "lottie-react";
import making from "@/animations/making.json"
import BlueBtn from "./buttons/blue";
import BlueLink from "./links/blueLink";


export default function IsMaking() {
    return (
        <div className="2xl:px-72 lg:px-16 xs:px-8 px-2 lg:gap-x-2 gap-y-10 lg:gap-y-0 flex lg:flex-row flex-col items-center justify-center lg:my-24 sm:my-16 my-12">
            <Lottie className="sm:w-96 w-64 sm:h-96 h-64" animationData={making} />  
            <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center  gap-y-4">
                <h2 className="sm:text-4xl lg:text-right text-center xs:text-2xl text-xl font-extrabold text-baby-6"> در حال ساخت این قسمت هستیم ... </h2>
                <p className="text-baby-1 lg:text-right text-center font-semibold !leading-loose lg:text-lg"> در آینده ای نزدیک این قسمت ساخته خواهد شد اخبار ساخت به شما اطلاع رسانی خواهد شد ! لذت یادگیری نزدیک است ! </p>
                <BlueLink href="/" text="برگردیم به صفحه اصلی" cls="bg-blue-500 rounded p-2 text-white"/>
            </div>
        </div>
    )
}