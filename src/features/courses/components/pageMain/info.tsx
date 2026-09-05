'use client'

import Link from "next/link";
import { EyeBrokenIcon } from "@/assets/icons";
import { useState } from "react";

export default function Info() {

    const [showMore, setShowMore] = useState(false)

    const gradeWorksheetsLinks = [
        {
            name : 'دوره های پایه اول ابتدایی',
            href : '/courses/grade-1'
        },
        {
            name : 'دوره های پایه دوم ابتدایی',
            href : '/courses/grade-2'
        },
        {
            name : 'دوره های پایه سوم ابتدایی',
            href : '/courses/grade-3'
        },
        {
            name : 'دوره های پایه چهارم ابتدایی',
            href : '/courses/grade-4'
        },
        {
            name : 'دوره های پایه پنجم ابتدایی',
            href : '/courses/grade-5'
        },
        {
            name : 'دوره های پایه ششم ابتدایی',
            href : '/courses/grade-6'
        }
    ]

    return (
        <section className="relative mt-16 pt-8 pb-16 w-full bg-white">
            <div className={`${!showMore && 'h-96'} overflow-hidden`}>
                <article className="max-w-5xl mx-auto">
                    <h1 className="pt-16 text-center font-extrabold text-5xl text-gray-600 pb-8">
                        انواع دوره های آموزشی
                    </h1>
                    <p className="leading-loose text-gray-400 px-1 xs:text-right text-center">
                        دوره های آموزشی را می توان به روش های مختلف دسته بندی کرد ! متداول ترین نوع تقسیم بندی، تقسیم بندی بر
                        اساس نوع مخاطب است مثلاً دوره های راحت بخون برای چهار دسته مناسب می باشند که شامل
                        آموزگاران، دانش آموزان، دانشجومعلمان و والدین دانش آموزان می باشد. هرچند شاید بعضی از دوره ها برای تمامی افراد مناسب
                        هستند. در اینجا توضیحاتی پیرامون این موضوع داریم !
                    </p>
                </article>
                <article className="max-w-5xl mx-auto">
                    <h2 className="my-4 text-gray-500 font-bold text-lg xs:text-right text-center">
                        دوره های مناسب آموزگاران
                    </h2>
                    <p className="leading-loose text-gray-400 xs:text-right text-center">
                        دوره های مناسب آموزگاران دوره هایی هستند که سعی دارند تجربه ها و روش های تدریس یا به اصطلاح فوت کوزه گری را 
                        به آموزگاران آموزش دهند! این دوره ها در مورد موضوعات مختلفی صحبت می کنند که در اینجا به توضیح آنها می پردازیم!
                    </p>
                    <h3 className="text-gray-500 xs:pr-4 xs:pl-0 px-2 my-3 font-bold xs:text-right text-center">
                        دوره آموزش تولید محتوا
                    </h3>
                    <p className="leading-loose text-gray-400 xs:pr-4 xs:pl-0 px-2 xs:text-right text-center">
                        در این دوره ها تلاش کرده ایم تا آموزش هایی موفق برای آموزگاران داشته باشیم تا بتوانند با تولید محتواهای زیبا و جدید
                        و یا آشنایی با نرم افزارها و ابزار مختلف کلاس های شادتری برای خودشان داشته باشند ! بیشتر این دوره ها باز می مانند و در 
                        طول زمان به مرور به روز رسانی می شوند !
                    </p>
                    {<Link
                        href={"/courses/for-teachers?type=تولید محتوا"}
                        className="text-sky-500 !my-6 block xs:pr-4 xs:pl-0 px-2"
                    >
                        مشاهده دوره های آموزش تولید محتوا
                    </Link>}
                    <h3 className="text-gray-500 xs:pr-4 xs:pl-0 px-2 my-3 font-bold xs:text-right text-center">
                        دوره آموزش کلاس داری
                    </h3>
                    <p className="leading-loose text-gray-400 xs:pr-4 xs:pl-0 px-2 xs:text-right text-center">
                        این دوره ها همان طور که از اسمشان پیداست برای راحت تر کردن کلاس داری برای آموزگاران زحمت کش است
                        این دوره ها شامل مواردی چون روش های ارتباط صحیح با دانش آموزان ، تکنیک هایی برای آرام کردن سطح کلاس
                        و موارد این چنینی می باشند !
                    </p>
                    {<Link
                        href={"/courses/for-teachers?type=کلاسداری"}
                        className="text-sky-500 !my-6 block xs:pr-4 xs:pl-0 px-2"
                    >
                        مشاهده دوره های آموزش کلاسداری
                    </Link>}
                    <h3 className="text-gray-500 xs:pr-4 xs:pl-0 px-2 my-3 font-bold xs:text-right text-center">
                        دوره های هنر و طراحی
                    </h3>
                    <p className="leading-loose text-gray-400 xs:pr-4 xs:pl-0 px-2 xs:text-right text-center">
                        این دوره ها برای توانمندسازیی آموزگاران در جهت استفاده از هنر در کلاس هایشان است. استفاده از هنر تنها به معنی
                        نقاشی و طراحی یا کلاس هنر نیست بلکه به معنای تلفیق آن با تمامی مباحث و کتاب های دیگر است.
                    </p>
                    {<Link
                        href={"/courses/for-teachers?type=هنر"}
                        className="text-sky-500 !my-6 block xs:pr-4 xs:pl-0 px-2"
                    >
                        مشاهده دوره های هنر و طراحی
                    </Link>}
                    <h3 className="text-gray-500 xs:pr-4 xs:pl-0 px-2 my-3 font-bold xs:text-right text-center">
                        دوره های تدریس خلاقانه
                    </h3>
                    <p className="leading-loose text-gray-400 xs:pr-4 xs:pl-0 px-2 xs:text-right text-center">
                        یکی از مهم ترین مواردی که باعث می شود یک معلم کار بسیار کمتر و در عین حال تاثیرپذیری بسیار بیشتری داخل کلاس
                        داشته باشد تدریس خلاقانه است . دوره های تدریس خلاقانه شما را با روش ها و موارد مختلف آشنا می کند تا حس خلاقیت
                        درون شما را بیدار کند .
                    </p>
                    {<Link
                        href={"/courses/for-teachers?type=تدریس خلاقانه"}
                        className="text-sky-500 !my-6 block xs:pr-4 xs:pl-0 px-2"
                    >
                        مشاهده دوره های آموزش تدریس خلاقانه
                    </Link>}
                    <h3 className="text-gray-500 xs:pr-4 xs:pl-0 px-2 my-3 font-bold xs:text-right text-center">
                        دوره های آموزش مباحث دانشگاهی و اختلالات
                    </h3>
                    <p className="leading-loose text-gray-400 xs:pr-4 xs:pl-0 px-2 xs:text-right text-center">
                        اختلالات یادگیری شاید مهم ترین موردی باشد که یک آموزگار را به شدت در تنگنا و در وضعیت سخت قرار بدهد! فرض
                        کنید دانش آموزی دارید که همه چیز را برعکس می نویسد ! یا دانش آموزی که همه حروف هم آوا مانند ص و س و ث را
                        با هم اشتباه می گیرد و به جای هم به کار می برد! دوره های اختلالات برای برطرف کردن همین مشکلات است!
                        <br />
                        هم چنین اگر دانشجو هستید و می خواهید موارد علمی مختلف را یاد بگیرید در این قسمت می توانید دوره هایی
                        متناسب با نیاز خودتان پیدا کنید!
                    </p>
                    {<Link
                        href={"/courses/for-teachers?type=اختلالات"}
                        className="text-sky-500 !my-6 block xs:pr-4 xs:pl-0 px-2"
                    >
                        مشاهده دوره های آموزش مباحث دانشگاهی
                    </Link>}
                </article>
                <article className="max-w-5xl mx-auto mt-12">
                    <h2 className="my-4 text-gray-500 font-bold text-lg xs:text-right text-center">
                        دوره های مناسب والدین
                    </h2>
                    <p className="leading-loose text-gray-400 xs:text-right text-center">
                        پیشرفت تکنولوژی، تغییر کتاب ها، تغییر رفتارها، تفاوت سلیقه ها، روش های جدید و شاید عجیب و غریب والدین و ده ها
                        موارد مشابه همه و همه باعث شده اند تا ارتباط با فرزندان به ظاهر دشوار شود. اما چرا من می گویم به ظاهر؟ چون این موضوع را
                        می توان تا حد زیادی بهبود بخشید! کافی است کمی اطلاعات خودتان را در این زمینه بهبود ببخشید تا به این مشکلات
                        بهتر رسیدگی کنید! ما در راحت بخون با شما هستیم تا این موارد را با شما در میان بگذاریم !
                    </p>
                    {<Link
                        href={"/courses/for-parents"}
                        className="text-sky-500 !my-6 block xs:pr-4 xs:pl-0 px-2"
                    >
                        مشاهده دوره های مناسب والدین
                    </Link>}
                </article>
                <article className="max-w-5xl mx-auto mt-12">
                    <h2 className="my-4 text-gray-500 font-bold text-lg xs:text-right text-center">
                        دوره های مناسب دانش آموزان
                    </h2>
                    <p className="leading-loose text-gray-400 xs:text-right text-center">
                        در این قسمت دوره های آموزشی متناسب با پایه تحصیلی دانش آموزان است! در اینجا والدین می توانند متناسب با مشکل
                        تحصیلی فرزندشان دوره ی مناسب او را پیدا کنند. توجه کنید که دوره های این قسمت فقط در مورد آموزش کتاب ها
                        هستند و اگر آموزش هایی در مورد ارتباط با فرزندان یا آگاهی بیشتر خودتان در مورد کتاب ها می خواهید باید به قسمت
                        دوره های مناسب والدین سر بزنید !
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mt-5">
                    {
                        gradeWorksheetsLinks.map((item, index) => (
                            <li className="md:col-span-2 xs:col-span-3 col-span-6 xs:text-right text-center" key={index}>
                                <Link
                                    href={item?.href}
                                    className="text-sky-500"
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </article>
            </div>
            <div
                onClick={() => setShowMore(!showMore)}
                className={`
                    mx-auto py-2 rounded w-40 text-gray-500 border border-gray-200 gap-x-2 flex justify-center items-center
                    shadow-xl cursor-pointer hover:scale-110 transition duration-500 ${showMore && 'mt-6'}
                `}>
                    <EyeBrokenIcon cls="w-6 h-6 fill-gray-400"/>
                    {
                        showMore
                        ? 'مشاهده کمتر'
                        : 'مشاهده بیشتر'
                    }
            </div>
        </section>
    )
}