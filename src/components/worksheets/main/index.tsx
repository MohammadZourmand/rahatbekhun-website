import SheetsCard from "@/components/global/elements/boxes/sheetsCard";
import { worksheetsData, worksheetsDataProps } from "../data";

interface WorksheetsMainProps {

}

const WorksheetsMain : React.FC<WorksheetsMainProps> = () => {

    return (
        <div className={`grid grid-cols-12 gap-10 bg-gray-100 pb-96 px-8 pt-8`}>
            {
                worksheetsData.map((item : worksheetsDataProps, index : number) => {
                    return <SheetsCard key={index} item={item} cls={"col-span-4"} />
                })
            }
        </div>
    )
}

export default WorksheetsMain;