import {FC} from "react";

import { worksheetsDataProps } from "@/components/worksheets/data";
import SheetsCardImgPart from "./imgPart";
import SheetsCardTextPart from "./textPart";

interface SheetsCardProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCard : FC<SheetsCardProps> = ({item, cls}) => {

    return (
        <div className={`bg-white relative h-[25rem] ${cls} rounded-md flex items-start justify-end`}>
            <SheetsCardImgPart item={item} />
            <SheetsCardTextPart item={item} />
        </div>
    )
}

export default SheetsCard;