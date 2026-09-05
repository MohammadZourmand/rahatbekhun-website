import WhiteBtn from "@/components/form/buttons/white"
import Heading5 from "@/components/elements/headings/h5"
import Image from "next/image"

interface OpaCartProps {
    text : string
    btnText : string
    href : string
    cls ?: string
    src : string
    btnCls ?: string
    textCls ?: string
}

const OpaCart = ({
    text,
    btnText,
    href,
    cls,
    src,
    btnCls,
    textCls
} : OpaCartProps) => {

    return (
        <div className={`${cls} 2xl:h-72 xl:h-56 lg:h-72 md:h-64 sm:h-56 xs:h-80 h-56 group relative flex items-center overflow-hidden rounded-lg`}>
            <Image 
                src={src}
                className="group-hover:scale-110 transition duration-500"
                alt={btnText}
                fill
            />
            <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full bg-black/50 group-hover:bg-baby-9/80 transition duration-500">
                <Heading5 cls={`${textCls}`} color="text-white xl:px-16 !leading-relaxed !font-extrabold" center={true} text={text} /> 
                <WhiteBtn text={btnText} href={href} cls={`${btnCls} text-sm mt-4 font-semibold`} />
            </div>
        </div>
    )
}

export default OpaCart;