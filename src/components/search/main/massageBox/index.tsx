import { useState } from "react";
import Link from "next/link";

import Lottie from "lottie-react";

import orangeAlert from "@/animations/orange-alert.json";
import Paragraph from "@/components/global/elements/paragraph";
import CloseIcon from "@/components/global/navbar/mobile/closeIcon";

const MassageBox = () => {

    const [isShow, setIsShow] = useState<boolean>(true)

    return (
        <div className={`${isShow ? "flex" : "hidden"} animate-fade relative mt-28 sm:flex-row flex-col mx-2 xs:mx-6 sm:mx-2 md:mx-6 bg-amber-400/40 rounded-md`}>
            <CloseIcon 
                setState={setIsShow}
                cls="absolute left-4 top-4 fill-amber-700"
                color="rgb(217 119 6)"
            />
            <Lottie className="w-32 h-32 self-center" animationData={orangeAlert} />
            <div className="flex flex-col sm:p-8 px-4 pb-8">
                <Paragraph
                    cls="!text-amber-700 text-lg font-medium sm:!text-right !text-center"
                    text={`${17} مورد شبیه اون چیزی که خواستی پیدا کردم !`}
                />
                <p className="text-amber-600 mt-4 text-sm font-medium sm:!text-right !text-center">
                    اگه جستجوی دقیق تری میخوای رو
                    <Link className="font-extrabold mx-1" href={"/"}> اینجا </Link>
                    کلیک کن.
                </p>
            </div>
        </div>
    )
}

export default MassageBox;