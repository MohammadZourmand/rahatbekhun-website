import { worksheetsDataProps } from "@/components/worksheets/data";
import FaSpan from "../../card/faSpan";

interface SheetsCardImgPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardImgPart : React.FC<SheetsCardImgPartProps> = ({item, cls}) => {

    return (
        <div className={`${cls} group overflow-hidden absolute -top-12 shadow-all-lg sm:h-1/2 h-[38%] w-11/12 mx-auto rounded-md`}>
            <img
                className="group-hover:scale-105 transition duration-500 w-full rounded-md mx-auto"
                src="./images/worksheets/worksheetPictures/slide1.png"
                alt="worksheet"
            />
        </div>
    )
}

export default SheetsCardImgPart;