
import Link from "next/link";
import Image from "next/image";

const digits = [
    {
        name : "پایه اول",
        src : "/images/navbar/digits/1.webp",
        alt : "کاربرگ های پایه اول",
        href : "/worksheets/grade-1"
    },
    {
        name : "پایه دوم",
        src : "/images/navbar/digits/2.webp",
        alt : "کاربرگ های پایه دوم",
        href : "/worksheets/grade-2"
    },
    {
        name : "پایه سوم",
        src : "/images/navbar/digits/3.webp",
        alt : "کاربرگ های پایه سوم",
        href : "/worksheets/grade-3"
    },
    {
        name : "پایه چهارم",
        src : "/images/navbar/digits/4.webp",
        alt : "کاربرگ های پایه چهارم",
        href : "/worksheets/grade-4"
    },
    {
        name : "پایه پنجم",
        src : "/images/navbar/digits/5.webp",
        alt : "کاربرگ های پایه پنجم",
        href : "/worksheets/grade-5"
    },
    {
        name : "پایه ششم",
        src : "/images/navbar/digits/6.webp",
        alt : "کاربرگ های پایه ششم",
        href : "/worksheets/grade-6"
    }
]

export default function GradeSort() {

    return (
        <section className="max-w-5xl mx-auto">
            <h2 className="pt-16 pb-12 text-center font-extrabold sm:text-5xl xs:text-4xl text-3xl text-gray-700">
                انتخاب بر اساس پایه تحصیلی
            </h2>
            <div className="grid grid-cols-6 gap-6">
                {
                    digits.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                className="group rounded py-8 relative items-center flex flex-col
                                md:col-span-1 xs:col-span-2 col-span-3"
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