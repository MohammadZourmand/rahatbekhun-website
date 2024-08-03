
import Image from "next/image";
import Link from "next/link";

const links = [
    {
        name : "همه",
        src : "/images/home/searchTypes/all.webp",
        alt : 'کاربرگ خلاقانه',
        href : '/courses/for-teachers?type=همه'
    },
    {
        name : "تولید محتوا",
        src : "/images/courses/creativity.webp",
        alt : 'تولید محتوا',
        href : '/courses/for-teachers?type=تولید محتوا'
    },
    {
        name : "کلاسداری",
        src : "/images/courses/lecture.webp",
        alt : 'کلاسداری',
        href : '/courses/for-teachers?type=کلاسداری'
    },
    {
        name : "هنر و طراحی",
        src : "/images/icons/ekhtelalat/color-palette.webp",
        alt : 'هنر و طراحی',
        href : '/courses/for-teachers?type=هنر و طراحی'
    },
    {
        name : "تدریس خلاقانه",
        src : "/images/courses/coaching.webp",
        alt : 'تدریس خلاقانه',
        href : '/courses/for-teachers?type=تدریس خلاقانه'
    },
    {
        name : "مباحث دانشگاهی و اختلالات",
        src : "/images/courses/graduation-hat.webp",
        alt : 'مباحث دانشگاهی',
        href : '/courses/for-teachers?type=all'
    }
]

export default function ForTeachers() {

    return (
        <section className="pt-8 max-w-5xl mx-auto">
            <h2 className="xs:pt-16 xs:pb-12 leading-relaxed text-center font-extrabold sm:text-5xl xs:text-4xl text-3xl text-gray-700">
                برای توانمندشدن آموزگاران
            </h2>
            <div className="grid grid-cols-6 gap-6">
            {
                links.map((item, index) => {
                    return (
                        <Link
                            href={item?.href}
                            key={index}
                            className="group rounded py-8 relative items-center flex flex-col md:col-span-1 xs:col-span-2 col-span-3"
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
                        </Link>
                    )
                })
            }
            </div>
        </section>
    )
}