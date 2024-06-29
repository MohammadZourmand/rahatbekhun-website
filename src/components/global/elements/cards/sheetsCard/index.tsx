import { worksheetsDataProps } from "@/components/worksheets/data";
import SheetsCardImgPart from "./imgPart";
import SheetsCardTextPart from "./textPart";

interface SheetsCardProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCard  = ({item, cls} : SheetsCardProps) => {

    return (
        <div className={`bg-white relative h-[27rem] ${cls} rounded-md flex justify-center items-end`}>
            <SheetsCardImgPart item={item} />
            <SheetsCardTextPart item={item} />
        </div>
    )
}

export default SheetsCard;