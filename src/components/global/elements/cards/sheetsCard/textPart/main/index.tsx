
import { EditBrokenIcon, KeyBrokenIcon, PaperBrokenIcon, SwapBrokenIcon } from "@/assets/icons";

import Popover from "../../../../boxes/popover";
import { worksheetsDataProps } from "@/components/worksheets/data";
import TickList from "../../../../lists/tickList";
import Image from "next/image";
import FaSpan from "@/utils/faSpan";


interface WorksheetCardMainProps {
    item : worksheetsDataProps
}

const WorksheetCardMain = ({item} : WorksheetCardMainProps) => {

    const showAuthorLevel = () => {
        switch(item?._author) {
            case "راحت بخون":
                return <>
                    {item?._author}
                    <Image className="mr-1" src={"/images/verify.webp"} alt="تاییدشده" width={16} height={16} />
                </>
                        
            case 'سازندگان تاییدشده':
                return <>
                    {item?._author}
                    <Image className="mr-1 invert" src={"/images/verify.webp"} alt="تاییدشده" width={16} height={16} />
                </>

            default :
                return item?._author
        }
    }

    return (
        <main className="w-full">
            <div className="flex flex-col items-center">
                <div className="flex gap-2"> 
                    <div className={`transition ${item.key ? "border-green-500 hover:bg-green-500" : "border-rose-500 hover:bg-rose-500"} border group relative cursor-pointer rounded-lg p-1`}>
                        <KeyBrokenIcon cls={`group-hover:scale-110 transition ${item.key ? "fill-green-500" : "fill-rose-500"} w-5 h-5 group-hover:fill-white`} />
                        <Popover 
                            value={`پاسخنامه ${item.key ? "دارد" : "ندارد"}`}
                            distanceCls="-right-7"
                        />
                    </div>
                    <div className={`transition border-purple-500 hover:bg-purple-500 border group relative cursor-pointer rounded-lg p-1`}>
                        <SwapBrokenIcon cls={`group-hover:scale-110 transition ${item.rotation === "افقی"  && "rotate-90"} fill-purple-500 w-5 h-5 group-hover:fill-white`}/>
                        <Popover 
                            value={`جهت کاربرگ : ${item.rotation==="افقی" ? "افقی" : "عمودی"}`}
                            distanceCls="-right-12"
                        />
                    </div>
                    {/* <div className={`transition border-green-500 hover:bg-green-500 border group relative cursor-pointer rounded-lg p-1`}>
                        <PaperBrokenIcon cls={`group-hover:scale-110 transition fill-green-500 w-5 h-5 group-hover:fill-white`} />
                        <Popover 
                            value={`تعداد صفحات`}
                            distanceCls="-right-8"
                        />
                        <span className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-white text-xs p-0.5 rounded-full w-4 h-4 text-center">
                            <FaSpan value={1} />
                        </span>
                    </div> */}
                    <div className={`transition border-yellow-500 hover:bg-yellow-500 border group relative cursor-pointer rounded-lg p-1`}>
                        <EditBrokenIcon cls={`group-hover:scale-110 transition fill-yellow-500 w-5 h-5 group-hover:fill-white`} />
                        <Popover 
                            value={item?.info}
                            distanceCls="xs:-right-24 -right-36 -top-44"
                            cls="w-64 h-40 z-50 !whitespace-normal text-center leading-loose"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3 w-full">
                <TickList 
                    options={[
                        `${item?.level}`,
                        `${item?.usableFor}`,
                        `${item?.author}`,
                        showAuthorLevel(),
                    ]}
                    cls="grid grid-cols-12 text-[.85rem] leading-loose tracking-tight mt-1 font-semibold"
                    liCls="xs:col-span-6 col-span-12"
                />
            </div>
        </main>
    )
}

export default WorksheetCardMain;