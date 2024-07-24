import { worksheetsDataProps } from "@/components/worksheets/data"
import Link from "next/link"

interface WorksheetCardHeaderProps {
    item : worksheetsDataProps
    grade : string
}

const WorksheetCardHeader = ({item, grade} : WorksheetCardHeaderProps) => {

    return (
        <header className="flex flex-col items-center mb-2">
            <Link href={`/worksheets/${grade}/${item._id}`}>
                <h1 className="font-black text-gray-700 text-lg">{item?.name}</h1>
            </Link>
            <p className="text-[.8rem] mt-0.5 text-gray-400 font-semibold">{item?.season}</p>
        </header>
    )
}

export default WorksheetCardHeader;