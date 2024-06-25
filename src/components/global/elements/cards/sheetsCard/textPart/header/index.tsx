import Heading1 from "@/components/global/elements/headings/h1"
import Paragraph from "@/components/global/elements/paragraph"
import { worksheetsDataProps } from "@/components/worksheets/data"

interface WorksheetCardHeaderProps {
    item : worksheetsDataProps
}

const WorksheetCardHeader = ({item} : WorksheetCardHeaderProps) => {
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
        </header>
    )
}

export default WorksheetCardHeader;