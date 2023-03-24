import { ReactNode } from "react";
import PN from "persian-number";

interface SlideProps {
    cls ?: string
    text : string
    number : number
    icon : ReactNode
}

const Slide : React.FC<SlideProps> = ({
    cls,
    text,
    number,
    icon
}) => {

    return (
        <div className={`${cls} flex flex-col py-4 space-y-2 items-center w-full h-full bg-slate-50 hover:bg-slate-200 rounded-lg`}>
            {icon}
            <span className="font-bold text-lg text-slate-800"> {text} </span>
            <span className="text-sm text-slate-400"> {PN.convertEnToPe(number)} مطلب آموزشی </span>
        </div>
    )
}

export default Slide;