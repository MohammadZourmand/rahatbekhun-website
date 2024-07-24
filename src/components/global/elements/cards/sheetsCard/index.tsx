'use client'

import { worksheetsDataProps } from "@/components/worksheets/data";
import SheetsCardImgPart from "./imgPart";
import SheetsCardTextPart from "./textPart";

interface SheetsCardProps {
    item : worksheetsDataProps
    cls ?: string
    grade : string
}

const SheetsCard  = ({item, cls, grade} : SheetsCardProps) => {

    return (
        <div className={`relative sm:h-[27rem] h-[20rem] ${cls} shadow-gray-400 bg-baby-7/5 border border-baby-7 rounded-md flex justify-center items-end shadow-all-md `}>
            <SheetsCardImgPart item={item} />
            <SheetsCardTextPart grade={grade} item={item} />
        </div>
    )
}

export default SheetsCard;