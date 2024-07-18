
import Link from "next/link";
import Image from "next/image";

const links = [
    {
        name : "مشکلات املا و نوشتن",
        src : "/images/icons/ekhtelalat/writing.webp",
        alt : "کاربرگ حل مشکلات املایی نوشتن",
        href : "/worksheets/grade-1"
    },
    {
        name : "مشکلات خواندن",
        src : "/images/icons/ekhtelalat/read.webp",
        alt : "کاربرگ حل مشکلات خواندن",
        href : "/worksheets/grade-1"
    },
    {
        name : "مشکلات ریاضی",
        src : "/images/icons/ekhtelalat/abacus.webp",
        alt : "کاربرگ حل مشکلات ریاضی و محاسباتی",
        href : "/worksheets/grade-1"
    },
    {
        name : "مشکلات زیبایی نویسی",
        src : "/images/icons/ekhtelalat/color-palette.webp",
        alt : "کاربرگ حل مشکلات زیبایی نویسی",
        href : "/worksheets/grade-1"
    }
]

export default function AllGrades() {

    return (
        <section className="mt-16 max-w-5xl mx-auto">
            <h2 className="pt-16 pb-12 text-center font-extrabold text-5xl text-gray-700">
                برای مشکلات دانش آموزان
            </h2>
            <div className="grid grid-cols-4 gap-6">
            {
                    links.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                className="group rounded py-8 relative items-center flex flex-col col-span-1"
                                href={item?.href}
                            >
                                <div>
                                    <Image 
                                        src={item?.src}
                                        alt={item?.alt}
                                        width={120}
                                        height={120}
                                        sizes=""
                                        className="group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <p className="text-center group-hover:translate-y-1 transition duration-500 pt-6 text-2xl text-gray-600 font-bold">{item?.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}