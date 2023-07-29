import SheetsCard from "@/components/global/elements/boxes/sheetsCard";
import { worksheetsData, worksheetsDataProps } from "../data";

interface WorksheetsMainProps {

}

const WorksheetsMain : React.FC<WorksheetsMainProps> = () => {

    return (
        <div className={`grid grid-cols-12 gap-y-16 xl:gap-x-8 lg:gap-x-4 md:gap-x-4 bg-gray-200/70 xl:px-8 px-4 py-20`}>
            {
                worksheetsData.map((item : worksheetsDataProps, index : number) => {
                    return <SheetsCard
                        key={index}
                        item={item}
                        cls={"lg:col-span-4 md:col-span-6 col-span-12"}
                    />
                })
            }
        </div>
    )
}

export default WorksheetsMain;