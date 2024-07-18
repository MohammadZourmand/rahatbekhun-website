
import Image from "next/image";

const links = [
    {
        name : "خلاقانه",
        src : "/images/navbar/games/knowledge.webp",
        alt : 'کاربرگ خلاقانه',
    },
    {
        name : "تمرینی",
        src : "/images/home/searchTypes/articles.webp",
        alt : '',
    },
    {
        name : "آماده سازی",
        src : "/images/home/searchTypes/all.webp",
        alt : '',
    },
    {
        name : "بسطی امتدادی",
        src : "/images/navbar/tests/stepByStep.webp",
        alt : '',
    },
    {
        name : "آزمون",
        src : "/images/home/searchTypes/exam.webp",
        alt : 'کاربرگ مخصوص آزمون',
    },
    {
        name : "مهارت محور",
        src : "/images/navbar/games/knowledge.webp",
        alt : "کاربرگ حل مشکلات خواندن",
    }
]

export default function AllTypes() {

    return (
        <section className="mt-16 max-w-5xl mx-auto">
            <h2 className="pt-16 pb-12 text-center font-extrabold text-5xl text-gray-700">
                کاربرگ های مخصوص آموزگاران
            </h2>
            <div className="grid grid-cols-6 gap-6">
            {
                links.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="group rounded py-8 relative items-center flex flex-col col-span-1"
                        >
                            <div>
                                <Image 
                                    src={item?.src}
                                    alt={item?.alt}
                                    width={100}
                                    height={100}
                                    sizes=""
                                    className="group-hover:scale-110 transition-all duration-500"
                                    priority={true}
                                />
                            </div>
                            <p className="text-center group-hover:translate-y-1 transition duration-500 pt-6 text-xl text-gray-600 font-bold">{item?.name}</p>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}