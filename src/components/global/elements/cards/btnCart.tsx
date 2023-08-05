import WhiteBtn from "@/components/global/elements/buttons/white"
import Heading5 from "@/components/global/elements/headings/h5"

interface OpaCartProps {
    text : string
    btnText : string
    href : string
    cls ?: string
    src : string
    btnCls ?: string
    textCls ?: string
}

const OpaCart : React.FC<OpaCartProps> = ({
    text,
    btnText,
    href,
    cls,
    src,
    btnCls,
    textCls
}) => {

    return (
        <div className={`${cls} group relative flex items-center overflow-hidden rounded-lg`}>
            <img className="group-hover:scale-110 transition duration-500" src={src} alt="be-online-teacher-in-rahatbekhun" />
            <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full bg-black/50 group-hover:bg-baby-9/80 transition duration-500">
                <Heading5 cls={`${textCls}`} color="text-white xl:px-16 !leading-relaxed !font-extrabold" center={true} text={text} /> 
                <WhiteBtn text={btnText} href={href} cls={`${btnCls} text-sm mt-4 font-semibold`} />
            </div>
        </div>
    )
}

export default OpaCart;