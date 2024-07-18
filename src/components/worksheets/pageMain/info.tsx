'use client'

import Link from "next/link";
import { worksheetsDataProps } from "../data";
import { EyeBrokenIcon } from "@/assets/icons";
import { useState } from "react";

export default function Info() {

    const [showMore, setShowMore] = useState(false)

    const telsaWorksheetsLinks = [
        {
            name : 'کاربرگ تسلا پایه اول ابتدایی',
            href : '/worksheets/grade-1?level=تسلا'
        },
        {
            name : 'کاربرگ تسلا پایه دوم ابتدایی',
            href : '/worksheets/grade-2?level=تسلا'
        },
        {
            name : 'کاربرگ تسلا پایه سوم ابتدایی',
            href : '/worksheets/grade-3?level=تسلا'
        },
        {
            name : 'کاربرگ تسلا پایه چهارم ابتدایی',
            href : '/worksheets/grade-4?level=تسلا'
        },
        {
            name : 'کاربرگ تسلا پایه پنجم ابتدایی',
            href : '/worksheets/grade-5?level=تسلا'
        },
        {
            name : 'کاربرگ تسلا پایه ششم ابتدایی',
            href : '/worksheets/grade-6?level=تسلا'
        },
    ]

    const gradeWorksheetsLinks = [
        {
            name : 'کاربرگ های مناسب پیش دبستانی',
            href : '/worksheets/pre-school'
        },
        {
            name : 'کاربرگ های پایه اول ابتدایی',
            href : '/worksheets/grade-1'
        },
        {
            name : 'کاربرگ های پایه دوم ابتدایی',
            href : '/worksheets/grade-2'
        },
        {
            name : 'کاربرگ های پایه سوم ابتدایی',
            href : '/worksheets/grade-3'
        },
        {
            name : 'کاربرگ های پایه چهارم ابتدایی',
            href : '/worksheets/grade-4'
        },
        {
            name : 'کاربرگ های پایه پنجم ابتدایی',
            href : '/worksheets/grade-5'
        },
        {
            name : 'کاربرگ های پایه ششم ابتدایی',
            href : '/worksheets/grade-6'
        },
        {
            name : 'کاربرگ های آمادگی آزمون هفتم',
            href : '/worksheets/grade-7'
        }
    ]

    const creativeWorksheetsLinks = [
        {
            name : 'کاربرگ های خلاقانه اول ابتدایی',
            link : '/worksheets/grade-1?type=خلاقیتی'
        },
        {
            name : 'کاربرگ های خلاقانه دوم ابتدایی',
            link : '/worksheets/grade-2?type=خلاقیتی'
        },
        {
            name : 'کاربرگ های خلاقانه سوم ابتدایی',
            link : '/worksheets/grade-3?type=خلاقیتی'
        },
        {
            name : 'کاربرگ های خلاقانه چهارم ابتدایی',
            link : '/worksheets/grade-4?type=خلاقیتی'
        },
        {
            name : 'کاربرگ های خلاقانه پنجم ابتدایی',
            link : '/worksheets/grade-5?type=خلاقیتی'
        },
        {
            name : 'کاربرگ های خلاقانه ششم ابتدایی',
            link : '/worksheets/grade-6?type=خلاقیتی'
        },
    ]

    const moreInfoWorksheetsLinks = [
        {
            name : 'کاربرگ های بسطی امتدادی اول ابتدایی',
            link : '/worksheets/grade-1?type=بسطی-امتدادی'
        },
        {
            name : 'کاربرگ های بسطی امتدادی دوم ابتدایی',
            link : '/worksheets/grade-2?type=بسطی-امتدادی'
        },
        {
            name : 'کاربرگ های بسطی امتدادی سوم ابتدایی',
            link : '/worksheets/grade-3?type=بسطی-امتدادی'
        },
        {
            name : 'کاربرگ های بسطی امتدادی چهارم ابتدایی',
            link : '/worksheets/grade-4?type=بسطی-امتدادی'
        },
        {
            name : 'کاربرگ های بسطی امتدادی پنجم ابتدایی',
            link : '/worksheets/grade-5?type=بسطی-امتدادی'
        },
        {
            name : 'کاربرگ های بسطی امتدادی ششم ابتدایی',
            link : '/worksheets/grade-6?type=بسطی-امتدادی'
        },
    ]

    const practiceWorksheetsLinks = [
        {
            name : 'کاربرگ های تمرینی اول ابتدایی',
            link : '/worksheets/grade-1?type=تمرینی'
        },
        {
            name : 'کاربرگ های تمرینی دوم ابتدایی',
            link : '/worksheets/grade-2?type=تمرینی'
        },
        {
            name : 'کاربرگ های تمرینی سوم ابتدایی',
            link : '/worksheets/grade-3?type=تمرینی'
        },
        {
            name : 'کاربرگ های تمرینی چهارم ابتدایی',
            link : '/worksheets/grade-4?type=تمرینی'
        },
        {
            name : 'کاربرگ های تمرینی پنجم ابتدایی',
            link : '/worksheets/grade-5?type=تمرینی'
        },
        {
            name : 'کاربرگ های تمرینی ششم ابتدایی',
            link : '/worksheets/grade-6?type=تمرینی'
        },
    ]

    const makeReadyWorksheetsLinks = [
        {
            name : 'کاربرگ های آماده سازی اول ابتدایی',
            link : '/worksheets/grade-1?type=آماده-سازی'
        },
        {
            name : 'کاربرگ های آماده سازی دوم ابتدایی',
            link : '/worksheets/grade-2?type=آماده-سازی'
        },
        {
            name : 'کاربرگ های آماده سازی سوم ابتدایی',
            link : '/worksheets/grade-3?type=آماده-سازی'
        },
        {
            name : 'کاربرگ های آماده سازی چهارم ابتدایی',
            link : '/worksheets/grade-4?type=آماده-سازی'
        },
        {
            name : 'کاربرگ های آماده سازی پنجم ابتدایی',
            link : '/worksheets/grade-5?type=آماده-سازی'
        },
        {
            name : 'کاربرگ های آماده سازی ششم ابتدایی',
            link : '/worksheets/grade-6?type=آماده-سازی'
        },
    ]

    return (
        <section className="relative mt-16 pt-8 pb-16 w-full bg-white">
            <div className={`${!showMore && 'h-96'} overflow-hidden`}>
                <article className="max-w-5xl mx-auto">
                    <h1 className="pt-16 text-center font-extrabold text-5xl text-gray-600 pb-8">
                        انواع کاربرگ ها
                    </h1>
                    <p className="leading-loose text-gray-400">
                        کاربرگ ها را می توان با توجه به معیارهای مخنلفی دسته بندی کرد مثلا بر حسب کاربرد ، سطح و ... ما اینجا در راحت بخون
                        مفتخریم که کاربرگ ها را در تمامی حالت های مختلف برای آموزگاران و دانش آموزان یا حتی والدینی که پیگیر
                        بهبود وضعیت فرزند دلبندشان هستند دسته بندی کنیم تا راحت تر به چیزی که می خواهید دسترسی پیدا کنید !
                    </p>
                </article>
                <article className="max-w-5xl mx-auto">
                    <h2 className="my-4 text-gray-500 font-bold text-lg">
                        انواع کاربرگ از نظر محتوا
                    </h2>
                    <p className="leading-loose text-gray-400">
                        کاربرگ ها از نظر محتوا به چهار دسته تقسیم می شوند که عبارتند از : تمرینی، آماده سازی، بسطی و امتدادی و خلاقانه.
                        در واقع این تقسیم بندی همان تقسیم بندی <strong> انواع تکالیف بر اساس محتوا </strong> است !
                        آموزگاران گرامی می توانند از این کاربرگ ها متناسب با مبحث تدریس خود استفاده کنند !
                    </p>
                    <h3 className="text-gray-500 pr-4 my-3 font-bold">
                        کاربرگ تمرینی
                    </h3>
                    <p className="leading-loose text-gray-400 pr-4">
                        کاربرگ تمرینی متداول ترین نوع کاربرگ است ! این نوع کاربرگ ها با هدف تکرار و در نتیجه تقویت مباحثی است که
                        آموزگار تدریس کرده است ! این نوع تکالیف قدیمی ترین نوع تکالیف هستند که املای شب یکی از مهم ترین نوع آن است.
                        علی رقم مفید بودن این نوع تکالیف، باتوجه به تکراری بودن آنها، این تکالیف برای دانش آموزان خسته کننده است.
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mb-6 mt-4 pr-4">
                    {
                        practiceWorksheetsLinks.map((item, index) => (
                            <li className="col-span-2" key={index}>
                                <Link
                                    href={item?.link}
                                    className="text-sky-500"
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    <h3 className="text-gray-500 pr-4 my-3 font-bold">
                        کاربرگ آماده سازی
                    </h3>
                    <p className="leading-loose text-gray-400 pr-4">
                        این نوع کاربرگ ها همان طور که از اسمشان مشخص است برای آماده کردن دانش آموزان برای تدریس روزهای آینده است.
                        مثلا فرض کنید که شما می خواهید در روز سه شنبه مفهوم متر را آموزش دهید! حال اگر از دانش آموزان بخواهید به وسیله وجب 
                        وسایلی مشابه، را اندازه گیری کنند و آن را با دوستان یا اعضای خانواده خود مقایسه کنند. این تکلیف باعث آمادگی دانش آموزان
                        و هم چنین ایجاد احساس نیاز در آنها جهت وجود یک معیار ثابت و هم اندازه برای آنها خواهد شد!
                        در نتیجه هم مطالب را بهتر یاد می گیرند هم برای یادگیری دست به جمع آوری اطلاعات می زنند !
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mb-6 mt-4 pr-4">
                    {
                        makeReadyWorksheetsLinks.map((item, index) => (
                            <li className="col-span-2" key={index}>
                                <Link
                                    href={item?.link}
                                    className="text-sky-500"
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    <h3 className="text-gray-500 pr-4 my-3 font-bold">
                        کاربرگ بسطی و امتدادی
                    </h3>
                    <p className="leading-loose text-gray-400 pr-4">
                        این نوع کاربرگ ها به دنبال آن هستند که میزان یادگیری و دانش دانش آموزان را از حد و مرز کتاب خارج کنند و به چیزی بالاتر از آن ببرند!
                        مثلاً فرض کنید در کلاس درس ریاضی و بحث اسکال هندسی این موضوع پیش می آید که آیا اشکال هندسی در دایره ، مستطیل ، مربع و مثلث
                        خلاصه می شوند؟ قاعدتاً جواب خیر است اما چیزی در کتاب گفته نشده است ! پس دانش آموزان به دنبال یافتن موارد بیشتر می روند!
                        تحقیقات و پژوهش ها یا حتی مقالات نیز در این دسته قرار می گیرند.
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mb-6 mt-4 pr-4">
                    {
                        moreInfoWorksheetsLinks.map((item, index) => (
                            <li className="col-span-2" key={index}>
                                <Link
                                    href={item?.link}
                                    className="text-sky-500"
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    <h3 className="text-gray-500 pr-4 my-3 font-bold">
                        کاربرگ خلاقانه
                    </h3>
                    <p className="leading-loose text-gray-400 pr-4">
                        این نوع کاربرگ ها پس از یادگیری درس برای ایجاد ذوق و پیشرفت دانش آموزان در تمامی زمینه ها اتفاق می افتد! 
                        مثلاً فرض کنید که دانش آموزان موضوع آموزش متر و تخمین را با یک بازی ترکیب کنند و پرتاب نیزه انجام دهند!
                        یا برای یک درس علوم یک مدل بسازند! این موارد که در بسیاری از حالت ها حاصل تلفیق دروس و مباحث مختلف است
                        نوعی تکلیف خلاقیتی یا خلاقانه محسوب می شود !
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mb-6 mt-4 pr-4">
                    {
                        creativeWorksheetsLinks.map((item, index) => (
                            <li className="col-span-2" key={index}>
                                <Link
                                    href={item?.link}
                                    className="text-sky-500"
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </article>
                <article className="max-w-5xl mx-auto mt-12">
                    <h2 className="my-4 text-gray-500 font-bold text-lg">
                        انواع کاربرگ ها بر اساس سطح و سختی 
                    </h2>
                    <p className="leading-loose text-gray-400">
                        کاربرگ های راحت بخون برای تمامی سطح ها مناسب است. دانش آموزانی که در مدارس تیزهوشان درس می خوانند یا
                        دانش آموزانی که به دنبال حل سوالات بیشتر و سخت تری نسبت به دیگر دانش آموزان هستند می توانند در راحت بخون کاربرگ مناسب برای خود را پیدا کنند !
                        برای همین در راحت بخون کاربرگ هایی تحت عنوان کاربرگ تسلا وجود دارد که برای دانش آموزانی است که می خواهند بالاتر از سطح کتاب 
                        درس بخوانند و خود را به چالش بکشند !
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mt-5">
                        {
                            telsaWorksheetsLinks.map((item, index) => (
                                <li className="col-span-2" key={index}>
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
                <article className="max-w-5xl mx-auto mt-12">
                    <h2 className="my-4 text-gray-500 font-bold text-lg">
                        انواع کاربرگ ها بر اساس پایه تحصیلی
                    </h2>
                    <p className="leading-loose text-gray-400">
                        تکالیف با توجه به پایه های تحصیلی به شش گروه تقسیم می شوند که از پایه های اول تا ششم را شامل می شود.
                        اما در راحت بخون ما برای پیش دبستانی ها و کلاس ششمی هایی که می خواهند هم کاربرگ هایی آماده شده است.
                    </p>
                    <ul className="grid grid-cols-6 gap-4 mt-5">
                    {
                        gradeWorksheetsLinks.map((item, index) => (
                            <li className="col-span-2" key={index}>
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