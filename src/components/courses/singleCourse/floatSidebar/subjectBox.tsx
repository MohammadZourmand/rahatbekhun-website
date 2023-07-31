
import FaSpan from "@/components/global/elements/translators/faSpan"
import {ReactNode} from "react"

interface SubjectBoxProps {
    icon : ReactNode
    text : string | number
    subject : string
}

const SubjectBox : React.FC<SubjectBoxProps> = ({
    icon,
    text,
    subject
}) => {

    return (
        <div className="flex items-start w-full py-5">
            {icon}
            <span className="text-gray-800 font-semibold text-sm mx-2"> {subject}  : </span>
            <FaSpan value={text} cls="text-gray-500 font-semibold text-sm"/>
        </div>
    )
}

export default SubjectBox;