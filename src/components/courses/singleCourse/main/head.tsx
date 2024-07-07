import FaSpan from "@/components/global/elements/translators/faSpan"
import Paragraph from "@/components/global/elements/paragraph"
import FiveStars from "@/components/global/elements/boxes/stars/fiveStars"
import Image from "next/image"

const Header = () => {

    return (
        <div className="grid grid-cols-12 sm:mt-12 mt-6 items-center px-2">
            <div className="sm:col-span-3 xs:col-span-4 col-span-12 flex items-center">
                <div>
                    <Image
                        className="rounded-full border-2 border-white shadow-all-md"
                        src="/images/home/teachers/mohammad-zourmand.jpg"
                        alt="Mohammad-zourmand-creator-of-rahat-bekhun"
                        width={48}
                        height={48}
                    />
                </div>
                <div className="mr-4 py-1">
                    <Paragraph cls="text-xs text-gray-500" text="آموزگار" />
                    <Paragraph cls="text-sm mt-1 text-gray-700 !font-extrabold" text="محمد زورمند" />
                </div>
            </div>
            <div className="sm:col-span-3 xs:col-span-4 col-span-6 xs:mt-0 mt-6">
                <div className="">
                    <Paragraph cls="text-xs text-gray-500" text="آخرین بروزرسانی :" />
                    <FaSpan cls="text-sm !mt-1 text-gray-700 !font-extrabold" value={"25 اردیبهشت 1401"}/>
                </div>
            </div>
            <div className="sm:col-span-6 xs:col-span-4 col-span-6 xs:mt-0 mt-6">
                <Paragraph cls="text-xs text-gray-500" text="امتیاز دوره :" />
                <div className="flex items-center">
                    <FiveStars />
                    <FaSpan cls="text-sm mt-1 mr-2 text-gray-700 !font-extrabold" value={"(4.5)"}/>
                </div>
            </div>
        </div>
    )
}

export default Header