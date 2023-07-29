import { worksheetsDataProps } from "@/components/worksheets/data";
import FaSpan from "../../card/faSpan";

interface SheetsCardImgPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardImgPart : React.FC<SheetsCardImgPartProps> = ({item, cls}) => {

    return (
        <div className={`${cls} absolute top-0 -right-[1.5rem] h-[80%] my-10 w-52 rounded-md shadow-all-md shadow-gray-300`}>
            <img
                className="h-full rounded-md"
                src="./images/worksheets/worksheetPictures/slide1.png"
                alt="worksheet"
            />
        </div>
    )
}

export default SheetsCardImgPart;