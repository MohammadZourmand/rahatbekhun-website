import Image from "next/image"
import Link from "next/link"


const data = [
    {
        name : "پیش دبستانی",
        img : "/images/navbar/digits/0.webp",
        href : "/worksheets/pre-school"
    },
    {
        name : "پایه اول",
        img : "/images/navbar/digits/1.webp",
        href : "/worksheets/grade-1"
    },
    {
        name : "پایه دوم",
        img : "/images/navbar/digits/2.webp",
        href : "/worksheets/grade-2"
    },
    {
        name : "پایه سوم",
        img : "/images/navbar/digits/3.webp",
        href : "/worksheets/grade-3"
    },
    {
        name : "پایه چهارم",
        img : "/images/navbar/digits/4.webp",
        href : "/worksheets/grade-4"
    },
    {
        name : "پایه پنجم",
        img : "/images/navbar/digits/5.webp",
        href : "/worksheets/grade-5"
    },
    {
        name : "پایه ششم",
        img : "/images/navbar/digits/6.webp",
        href : "/worksheets/grade-6"
    },
    {
        name : "برای هفتم",
        img : "/images/navbar/digits/7.webp",
        href : "/worksheets/grade-7"
    },
]

export default function BooksBox({grade} : {grade : string}) {

    return (
        <header className={`overflow-x-auto flex items-center md:justify-center justify-start lg:p-4 pt-4 pb-2 px-1 lg:gap-x-8 gap-x-6 mx-3`}>
            {
                data.map((item, index) => {
                    return (
                        <Link
                            href={item?.href}
                            key={index}
                            className={`group hover:scale-105 transition-transform flex flex-col items-center justify-center`}
                        >
                            <div className={`${item?.name.includes(grade) ? 'scale-[1.10] shadow-lg border-baby-10/70 outline-baby-10' : 'border-sky-300 outline-baby-7'} lg:w-24 lg:h-24 w-[70px] h-[70px] flex items-center justify-center rounded-full outline-offset-2 border outline overflow-hidden`}>
                                <div className="relative lg:w-20 w-16 lg:h-20 h-16">
                                    <Image
                                        fill
                                        src={item?.img}
                                        alt={item?.name}
                                        className="group-hover:scale-[1.12] transition-all"
                                    />
                                </div>
                            </div>
                            <p className={`${item?.name.includes(grade) ? 'font-bold text-baby-6 mt-4' : 'text-[.95rem] text-sky-900 mt-3'} text-center whitespace-nowrap`}>{item?.name}</p>
                        </Link>
                    )
                })
            }
        </header>
    )
}