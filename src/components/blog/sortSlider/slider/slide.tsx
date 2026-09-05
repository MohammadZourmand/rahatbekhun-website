import FaSpan from "@/utils/faSpan";
import { ReactNode } from "react";

interface SlideProps {
    cls ?: string
    text : string
    number : number
    icon : ReactNode
}

const Slide = ({
    cls,
    text,
    number,
    icon
} : SlideProps) => {

    return (
        <div className={`${cls} flex flex-col py-4 space-y-2 items-center w-full h-full bg-slate-50 hover:bg-slate-200 rounded-lg`}>
            {icon}
            <span className="font-bold text-lg text-slate-800"> {text} </span>
            <FaSpan cls="text-sm text-slate-400" value={`${number} مطلب آموزشی`}/>
        </div>
    )
}

export default Slide;