'use client'

import SheetsCard from "@/components/global/elements/cards/sheetsCard";
import { worksheetsData, worksheetsDataProps } from "../data";
import Filters from "./filters";
import {FC, useState} from "react";
import { FilterBrokenIcon } from "@/assets/icons";
interface WorksheetsMainProps {

}

const WorksheetsMain : FC<WorksheetsMainProps> = () => {

    const [showFilters, setShowFilters] = useState<boolean>(false)

    return (
        <div className={`relative grid grid-cols-12 gap-y-16 xl:gap-x-8 lg:gap-x-4 md:gap-x-4 bg-gray-200/70 xl:px-8 px-4 py-20`}>
            <div className={`hover:scale-[1.2] cursor-pointer bg-baby-9 fixed bottom-0 right-0 p-2
                rounded-full sm:w-12 sm:h-12 w-10 h-10 text-center nozha transition duration-500 z-[9999]
                flex justify-center items-center m-8 animate-comeFromBottom shadow-all-lg shadow-sky-400`}
                onClick={() => setShowFilters(true)}
            >
                <FilterBrokenIcon cls={"w-[1.8rem] h-[1.8rem] transition-all duration-500"} color={"white"} />
            </div>
            <div onClick={() => setShowFilters(false)} className={`${showFilters ? "fixed" : "hidden" } lg:!hidden top-0 left-0 w-full h-full bg-gray-900/60 z-40`}></div>
            <div className="relative col-span-12 w-full 2xl:max-w-[1400px] xl:mx-auto">
                <Filters setShowFilters={setShowFilters} showFilters={showFilters} />
            </div>
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