
import { ChevronLeftCircleBroken, ClockBroken } from "@/assets/icons";
import {useState} from "react";
import FaSpan from "@/components/global/elements/translators/faSpan";
import { episodesInfoProps } from "./courseInfo";
import { typeIconSelector } from "./typeSelector";
import { typeTranslator } from "./typeTranslator";

interface TabOpenerProps {
    item : any
    index : number
}



const TabOpener : React.FC<TabOpenerProps> = ({item, index}) => {
    const [showPartList, setShowPartList] = useState<boolean>(false)

    return (
        <div className={`${index !== 0 && "mt-12"}`} key={item[0]}>
            <div onClick={() => setShowPartList(!showPartList)} className="flex justify-between bg-gray-200/40 text-gray-900 font-bold text-lg border border-gray-200 rounded-t-md py-4 pr-6 pl-8">
                <div>
                    <FaSpan cls="ml-2" value={`بخش ${index+1} :`} />
                    {item[0]}
                </div>
                <ChevronLeftCircleBroken cls={`${showPartList ? "-rotate-90" : "rotate-90"} transition duration-500 fill-baby-9 w-8 h-8`}/>
            </div>
            <ul className={`${showPartList ? "block" : "hidden"} animate-comeFromTop`}>
            {
                item[1].map((episode : episodesInfoProps) => {
                    return (
                            <li key={episode?.id} className="group transition-all grid grid-cols-12 bg-white hover:bg-baby-9 hover:border-transparent border border-gray-200 rounded-md py-4 pr-6 pl-8">
                                <div className="sm:col-span-3 xs:col-span-4 col-span-12 flex items-center">
                                    <span className="ml-1 relative bottom-0.5">
                                        {typeIconSelector(episode?.type)}
                                    </span>
                                    <FaSpan cls="transition text-gray-800 group-hover:text-white font-bold" value={`قسمت ${episode?.id + 1 } : `} />
                                    <span className="transition text-gray-800 group-hover:text-white font-bold">
                                        {typeTranslator(episode?.type)}
                                    </span>
                                </div>
                                <div className="xs:col-span-6 col-span-12 xs:my-0 my-4">
                                    <FaSpan cls="transition text-gray-900 group-hover:text-white" value={episode?.name} />
                                </div>
                                <div className="md:col-span-3 md:mt-0 xs:mt-4 mt-0 text-right col-span-12 flex items-center md:justify-self-end">
                                    <ClockBroken cls={`transition fill-gray-600 group-hover:fill-white w-5 h-5`} />
                                    <FaSpan cls="transition text-gray-600 group-hover:text-white mr-1 text-sm" value={`${episode?.time} دقیقه`} />
                                    <FaSpan cls="text-white bg-baby-6 rounded text-sm px-2 py-[1px] mr-3" value={`${episode?.comments?.length} دیدگاه`} />
                                </div>
                            </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default TabOpener;