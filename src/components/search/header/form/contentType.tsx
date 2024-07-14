import { ChevronLeft } from "@/assets/icons"
import { useState } from "react"
import { courseOptions, testOptions, videosOptions, worksheetOptions } from "./initialvalues"

const options = ['کاربرگ', 'دوره های آموزشی', 'ویدیوها', 'آزمون']

const ContectType = ({handler, initialvalues}) => {

    return (
        <div className="mx-32 grid grid-cols-12 gap-x-8 justify-between">
            <p className="font-nozha col-span-12 text-center text-yellow-400 text-4xl my-7">دنبال چی میگردی ؟</p>
            {
                options.map((item : string, index : number) => (
                    <button
                        key={index}
                        className={
                        `${initialvalues?._type === item ? 'bg-blue-500 text-white' : 'bg-white'} 
                            z-50 col-span-3 rounded px-4 py-3 text-center font-semibold
                        `}
                        onClick={() => handler(item)}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    )
}

export default ContectType;