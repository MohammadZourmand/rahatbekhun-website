import SheetsCard from "@/components/global/elements/boxes/sheetsCard";
import { worksheetsData, worksheetsDataProps } from "../data";

interface WorksheetsMainProps {

}

const WorksheetsMain : React.FC<WorksheetsMainProps> = () => {

    return (
        <div className={`grid grid-cols-12 gap-8 bg-gray-200/70 pb-96 px-8 pt-8`}>
            {
                worksheetsData.map((item : worksheetsDataProps, index : number) => {
                    return <SheetsCard
                        key={index}
                        item={item}
                        cls={"3xl:col-span-4 lg:col-span-6 col-span-12"}
                    />
                })
            }
        </div>
    )
}

export default WorksheetsMain;