import { worksheetsDataProps } from "@/components/worksheets/data";
import Heading5 from "../../../headings/h5";
import Paragraph from "../../../paragraph";
import Heading1 from "../../../headings/h1";
import Heading3 from "../../../headings/h3";
import FaSpan from "../../card/faSpan";

interface SheetsCardTextPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardTextPart : React.FC<SheetsCardTextPartProps> = ({item, cls}) => {

    return (
        <div className={`${cls} py-12 px-6 w-72 h-full`}>
            <Heading1 
                text={item.worksheetName}
                cls="!text-base !font-black !mt-0"
            />
            <Paragraph 
                text={item.worksheetLesson} 
                cls="!font-medium text-[.75rem] mt-1" 
            />
            <div className="flex items-center my-5">
                <span className="text-xs ml-2 text-rose-500">امتیاز</span>
                <FaSpan 
                    value={item._rating}
                    cls="block text-4xl font-light text-rose-500"
                />
            </div>
        </div>
    )
}

export default SheetsCardTextPart;