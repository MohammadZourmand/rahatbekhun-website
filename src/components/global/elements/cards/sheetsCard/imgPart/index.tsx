import { worksheetsDataProps } from "@/components/worksheets/data";
import Image from "next/image";

interface SheetsCardImgPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardImgPart = ({item, cls} : SheetsCardImgPartProps) => {

    return (
        <div className={`${cls} group absolute -top-12 shadow-all-lg sm:h-1/2 h-[38%] w-11/12 mx-auto rounded-md`}>
            <Image
                fill
                className="group-hover:scale-105 transition duration-500 rounded-md mx-auto"
                src={item.worksheetImg}
                alt="worksheet"
            />
        </div>
    )
}

export default SheetsCardImgPart;