import Heading1 from "@/components/global/elements/headings/h1"
import Paragraph from "@/components/global/elements/paragraph"
import { worksheetsDataProps } from "@/components/worksheets/data"
import Link from "next/link"

interface WorksheetCardHeaderProps {
    item : worksheetsDataProps
}

const WorksheetCardHeader = ({item} : WorksheetCardHeaderProps) => {


    return (
        <header className="flex flex-col items-center mb-2">
            <Link href={`/worksheets/${item._id}`}>
                <Heading1
                    text={item?.name}
                    cls="!text-base !font-black !mt-0"
                />
            </Link>
            
            <Paragraph 
                text={item?.season} 
                cls="!font-medium text-[.75rem] mt-1" 
            />
        </header>
    )
}

export default WorksheetCardHeader;