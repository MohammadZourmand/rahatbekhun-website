'use client'
// ? react ============================
import { useState } from "react";

// ? components =======================
import Heading3 from "@/components/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import Cart from "../../../components/elements/cards/card";

// ? assets ===========================
import { coursesData } from "../../courses/fakeData/coursesData";

// ? types ============================
import { courseInfoType } from "@/types/home";

const Courses = () => {

    // TODO : This state use for choose types that user want to see !  
    const [type, setType] = useState<string>("all")

    return (
        <section className="relative flex flex-col bg-gray-200/80 sm:py-28 py-16 lg:mt-12 xl:px-32 lg:px-12 sm:px-7.5 xs:px-8 px-2">
            <header className="grid grid-cols-12">
                <div className="lg:col-span-7 col-span-12">
                    <Heading3 cls=" lg:w-96 !leading-relaxed lg:!text-right !text-center" text="دوره ای را که می خواهی سریع پیدا کن !" />
                    <Paragraph cls="mt-4 lg:!text-right !text-center" text={"تو تنها نیستی ! آماده ایم که بهت کمک کنیم تا دوره مناسب با مشکلاتت رو پیدا کنی !"} />
                </div>
                <div className="lg:col-span-5 col-span-12 lg:self-end lg:justify-self-end justify-self-center lg:mt-0 mt-6 flex xl:gap-10 lg:gap-6 xs:gap-10 gap-4">
                    <div onClick={() => setType("all")} className={`${type === "all" && "text-baby-7 font-bold!"} font-medium cursor-pointer`}>همه</div>
                    <div onClick={() => setType("trending")} className={`${type === "trending" && "text-baby-7 font-bold!"} font-medium cursor-pointer`}>محبوب ترین ها</div>
                    <div onClick={() => setType("math")} className={`${type === "math" && "text-baby-7 font-bold!"} font-medium cursor-pointer`}>ریاضی</div>
                    <div onClick={() => setType("persian")} className={`${type === "persian" && "text-baby-7 font-bold!"} font-medium cursor-pointer`}>فارسی</div>
                    <div onClick={() => setType("useable")} className={`${type === "useable" && "text-baby-7 font-bold!"} font-medium cursor-pointer`}>کاربردی</div>
                </div>
            </header>
            <main className="grid grid-cols-12 mt-10 gap-x-5 gap-y-6">
                {
                    coursesData.map((item : courseInfoType, index : number) => {
                           
                            if (type === "math"  && item.category === "ریاضی"
                                || type === "persian"  && item.category === "فارسی"
                                || type === "useable" && item.votes >= 200
                                || type === "trending" && item.votesAverage >= 4
                                || type === "all"
                            ) 
                                return (
                                    <Cart
                                        key={index}
                                        cls={"col-span-12 sm:col-span-6 lg:col-span-4"}
                                        item={item}
                                    />
                                )
                            
                    })
                }
            </main>
        </section>
    )
}

export default Courses;