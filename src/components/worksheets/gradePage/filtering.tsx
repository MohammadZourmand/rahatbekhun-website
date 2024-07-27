'use client'

import IconBtn from "@/components/global/elements/buttons/iconBtn";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
const Filters = dynamic(() => import("./filters"))

export default function Filtering({grade , setFilters} : { grade : string , setFilters : any}) {

    const [show, setShow] = useState<boolean>(false)

    return (
        <section className="sm:flex grid grid-cols-6 justify-center py-2 bg-sky-300/40 rounded-lg xl:mx-32 xl:mt-0 mx-2 mt-1">
            {
                show && <div
                    onClick={(e : any) => {
                        e?.target?.classList?.contains('background') && setShow(false)
                    }}
                    className="background animate-fade flex items-center justify-center fixed top-0 left-0 w-full h-full z-[9999] bg-purple-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0"
                    >
                        <div className="w-[1024px] max-h-[600px] overflow-auto bg-white/70 lg:mx-0 mx-8 p-4">
                            <Filters grade={grade} setFilters={setFilters} setShow={setShow} />
                        </div>
                </div>
            }
            <div className="relative w-36 h-36 col-span-2 sm:col-span-1">
                <Image
                    fill
                    src={'/images/worksheets/idea.webp'}
                    alt={'جست و جو برای کاربرگ مناسب'}
                />
            </div>
            <div className="flex flex-col justify-center mr-6 col-span-4 sm:col-span-5">
                <h2 className="sm:text-2xl text-lg font-extrabold text-sky-700">دنبال کاربرگ خاصی می گردی ؟</h2>
                <p className="mt-2 mb-2 text-sm text-sky-600 leading-relaxed">با زدن روی دکمه زیر ما بهت کمک می کنیم کاربرگ مناسب رو پیدا کنی !</p>
                <IconBtn onClick={() => setShow(true)} cls="!my-0 py-3 px-3 !rounded " text="کاربرگ رو پیدا کن !" iconName="search"/>
            </div>
        </section>
    )
}