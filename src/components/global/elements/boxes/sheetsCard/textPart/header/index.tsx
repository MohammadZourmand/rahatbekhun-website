import Heading1 from "@/components/global/elements/headings/h1"
import Paragraph from "@/components/global/elements/paragraph"
import { worksheetsDataProps } from "@/components/worksheets/data"
import FaSpan from "../../../card/faSpan"

interface WorksheetCardHeaderProps {
    item : worksheetsDataProps
}

const WorksheetCardHeader : React.FC<WorksheetCardHeaderProps> = ({item}) => {
    return (
        <header className="flex flex-col items-center mb-2">
            <Heading1
                text={item.worksheetName}
                cls="!text-base !font-black !mt-0"
            />
            <Paragraph 
                text={item.worksheetLesson} 
                cls="!font-medium text-[.75rem] mt-1" 
            />
            {/* <div className="flex items-center my-2">
                <span className="text-xs ml-2 text-rose-500">امتیاز : </span>
                <FaSpan 
                    value={item._rating}
                    cls="block text-xl font-light text-rose-500"
                />
            </div> */}
        </header>
    )
}

export default WorksheetCardHeader;