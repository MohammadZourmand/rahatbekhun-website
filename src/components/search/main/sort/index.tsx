'use client'

import { CategoryBroken, FilterBroken } from "@/assets/icons";
import { useState } from "react";


const SortBox = () => {

    const [isCategoryMode, setIsCategoryMode] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>("جدیدترین")

    return (
        <div className="mt-6 mx-2 xs:mx-6 sm:mx-2 md:mx-6 flex sm:flex-row flex-col sm:space-y-0 xs:space-y-8 space-y-6 items-center justify-between xs:px-8 py-4 rounded bg-gray-200/80 border border-gray-300/85">
            <div className="flex items-center">
                <p className="ml-4 font-semibold">نوع نمایش :</p>
                <FilterBroken onClick={() => setIsCategoryMode(false)} cls={`${!isCategoryMode && "bg-baby-3 fill-white"} transition p-1 fill-gray-800 my-1 mx-2 w-9 h-9 rounded-lg`}/>
                <CategoryBroken onClick={() => setIsCategoryMode(true)} cls={`${isCategoryMode && "bg-baby-3 fill-white"} transition p-1 fill-gray-800 my-1 mx-2 w-9 h-9 rounded-lg`} />
            </div>
            <div className="flex xs:flex-row flex-col items-center">
                <p className="xs:ml-4 ml-1 font-semibold"> مرتب سازی بر اساس : </p>
            </div>
        </div>
    )
}

export default SortBox;