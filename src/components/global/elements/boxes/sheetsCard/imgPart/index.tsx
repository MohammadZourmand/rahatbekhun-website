import { worksheetsDataProps } from "@/components/worksheets/data";

interface SheetsCardImgPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardImgPart : React.FC<SheetsCardImgPartProps> = ({item, cls}) => {

    return (
        <div className={`${cls} absolute top-0 -right-[1.7rem] h-[80%] my-10 w-52 bg-green-400 rounded-md shadow-all-md`}>
            
        </div>
    )
}

export default SheetsCardImgPart;