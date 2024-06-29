
import FaSpan from "@/components/global/elements/translators/faSpan";
import Image from "next/image";

interface InfoBoxProps {
    value : string | number
    subject : string
    img : string
    imgCls ?: string
    cls ?: string
}

const InfoBox = ({ subject, value, img, imgCls, cls } : InfoBoxProps) => {

    return (
        <div className={`${cls} group flex flex-col col-span-4 items-center`}>
            <div className="bg-gray-200/50 shadow-all-lg rounded-full">
                <Image
                    alt={subject}
                    src={img}
                    className={`${imgCls} group-hover:scale-110 duration-500`}
                    width={64}
                    height={64}
                />
            </div>
            <FaSpan 
                value={value}
                cls="bg-gray-900 text-white border-b border-b-gray-300/60 shadow-all-md shadow-red-500/30 font-semibold py-0.5 px-5 mt-1 rounded-lg text-center"
            />
            <span className="bg-white border-b border-b-gray-300/60 shadow-sm font-semibold py-0.5 px-2 rounded-b-lg text-center text-sm">{subject}</span>
        </div>
    )
}

export default InfoBox;