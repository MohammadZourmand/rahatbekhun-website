
import { EyeBrokenIcon, KeyBrokenIcon, PaperBrokenIcon, SwapBrokenIcon } from "@/assets/icons";
import Popover from "../popover";
import { setSheetsIcon } from "../setSheetsIcon";
import { worksheetsDataProps } from "@/components/worksheets/data";
import TickList from "./tickList";
import {FC, useState} from "react"
interface WorksheetCardMainProps {
    item : worksheetsDataProps
}

const WorksheetCardMain : FC<WorksheetCardMainProps> = ({item}) => {

    const [showWorksheet, setShowWorksheet] = useState<boolean>(false)

    return (
        <main className="w-full">
            <div onClick={() => setShowWorksheet(false)} className={`${showWorksheet ? "fixed" : "hidden" } flex items-center justify-center top-0 left-0 w-full h-full bg-gray-900/60 z-40`}>
                <img src={item.worksheetImg} alt="worksheet" className="z-50" />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex gap-2"> 
                    <div onClick={() => setShowWorksheet(true)} className="transition border group relative cursor-pointer rounded-lg border-sky-500 hover:bg-sky-500 p-1">
                        <EyeBrokenIcon cls="group-hover:scale-110 transition fill-sky-500 w-5 h-5 group-hover:fill-white" />
                        <Popover 
                            value={"نیم نگاه"}
                            distanceCls="-right-3"
                        />
                    </div>
                    <div className={`transition ${item.worksheetKey==="با پاسخ" ? "border-green-500 hover:bg-green-500" : "border-rose-500 hover:bg-rose-500"} border group relative cursor-pointer rounded-lg p-1`}>
                        <KeyBrokenIcon cls={`group-hover:scale-110 transition ${item.worksheetKey==="با پاسخ" ? "fill-green-500" : "fill-rose-500"} w-5 h-5 group-hover:fill-white`} />
                        <Popover 
                            value={`پاسخنامه ${item.worksheetKey==="با پاسخ" ? "دارد" : "ندارد"}`}
                            distanceCls="-right-7"
                        />
                    </div>
                    <div className={`transition border-purple-500 hover:bg-purple-500 border group relative cursor-pointer rounded-lg p-1`}>
                        <SwapBrokenIcon cls={`group-hover:scale-110 transition ${item.worksheetRotation === "افقی"  && "rotate-90"} fill-purple-500 w-5 h-5 group-hover:fill-white`}/>
                        <Popover 
                            value={`جهت کاربرگ : ${item.worksheetRotation==="افقی" ? "افقی" : "عمودی"}`}
                            distanceCls="-right-12"
                        />
                    </div>
                    <div className={`transition border-green-500 hover:bg-green-500 border group relative cursor-pointer rounded-lg p-1`}>
                        <PaperBrokenIcon cls={`group-hover:scale-110 transition fill-green-500 w-5 h-5 group-hover:fill-white`} />
                        <Popover 
                            value={`تعداد صفحات`}
                            distanceCls="-right-8"
                        />
                        <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-white text-xs p-0.5 rounded-full w-4 h-4 text-center">
                            {setSheetsIcon(item.worksheetPaper)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-3 w-full">
                <TickList 
                    options={[
                        `${item.worksheetType}`,
                        `${item.worksheetUsability}`,
                        `${item.worksheetColor}`,
                        `توسط : ${item._author}`,
                    ]}
                    cls="grid grid-cols-12 text-[.85rem] leading-loose tracking-tight mt-1 font-semibold"
                    liCls="xs:col-span-6 col-span-12"
                />
            </div>
        </main>
    )
}

export default WorksheetCardMain;