// ? react ============================
import { useState } from "react";

// ? components =======================
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import Slide from "./slide";

// ? assets ===========================
import { classOfferedDetails } from "./slidersDetails";

// ? types ============================
import { CartType } from "@/types/home";

const Courses : React.FC = () => {

    // TODO : This state use for choose types that user want to see !  
    const [type, setType] = useState<string>("all")

    return (
        <section className="relative flex flex-col bg-gray-200/80 sm:py-28 py-16 lg:mt-12 xl:px-32 lg:px-12 sm:px-[30px] xs:px-8 px-2">
            <header className="grid grid-cols-12">
                <div className="lg:col-span-7 col-span-12">
                    <Heading3 cls=" lg:w-96 !leading-relaxed lg:!text-right !text-center" text="دوره ای را که می خواهید سریع پیدا کنید !" />
                    <Paragraph cls="mt-4 lg:!text-right !text-center" text={"شما تنها نیستید ! آماده ایم که به شما کمک کنیم تا شما دوره مناسب را پیدا کنید !"} />
                </div>
                <div className="lg:col-span-5 col-span-12 lg:self-end lg:justify-self-end justify-self-center lg:mt-0 mt-6 flex xl:gap-10 lg:gap-6 xs:gap-10 gap-4">
                    <div onClick={() => setType("all")} className={`${type === "all" && "text-baby-7 !font-bold"} font-medium cursor-pointer`}>همه</div>
                    <div onClick={() => setType("trending")} className={`${type === "trending" && "text-baby-7 !font-bold"} font-medium cursor-pointer`}>محبوب ترین ها</div>
                    <div onClick={() => setType("math")} className={`${type === "math" && "text-baby-7 !font-bold"} font-medium cursor-pointer`}>ریاضی</div>
                    <div onClick={() => setType("persian")} className={`${type === "persian" && "text-baby-7 !font-bold"} font-medium cursor-pointer`}>فارسی</div>
                    <div onClick={() => setType("useable")} className={`${type === "useable" && "text-baby-7 !font-bold"} font-medium cursor-pointer`}>کاربردی</div>
                </div>
            </header>
            <main className="grid grid-cols-12 mt-10 gap-x-5 gap-y-6">
                {
                    classOfferedDetails.map((item : CartType, index : number) => {
                           
                            if (type === "math"  && item.category === "ریاضی"
                                || type === "persian"  && item.category === "فارسی"
                                || type === "useable" && item.votes >= 200
                                || type === "trending" && item.votesAverage >= 4
                                || type === "all"
                            ) 
                                return (
                                    <Slide
                                        category={item.category}
                                        cls={"col-span-12 sm:col-span-6 lg:col-span-4"}
                                        key={index}
                                        name={item.name}
                                        details={item.details}
                                        image={item.image}
                                        sessions={item.sessions}
                                        ageCategory={item.ageCategory}
                                        price={item.price}
                                        offPrice={item.offPrice}
                                        votesAverage={item.votesAverage}
                                        votes={item.votes}
                                    />
                                )
                            
                    })
                }
            </main>
        </section>
    )
}

export default Courses;