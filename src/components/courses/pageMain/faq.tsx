'use client'
import { ChevronLeft } from "@/assets/icons"
import { useState } from "react"

const FAQBox = ({question, answer, cls} : {question : string, answer : string, cls ?: string}) => {
    
    const [show, setShow] = useState<boolean>(false)
    
    return (
        <article className={`cursor-pointer group mb-2 relative bg-gray-50 rounded-lg p-6 animate-fade ${cls}`}>
            <header className="flex items-center justify-between">
                <h2 className={`font-bold text-gray-600 sm:text-xl text-lg`} onClick={() => setShow(!show)}>{question}</h2>
                <ChevronLeft cls={`${show ? 'rotate-90' : '-rotate-90'} w-8 h-8 fill-gray-600`} onClick={() => setShow(!show)}/>
            </header>
            {show && <p className="text-gray-500/70 mt-6 animate-comeFromTop text-lg leading-relaxed">{answer}</p>}
        </article>
    )
}

export default function FAQ() {

    return (
        <section className="mt-12 pb-12 max-w-5xl mx-auto">
            <h1 className="pt-16 pb-12 text-center font-extrabold text-4xl text-gray-700">
                پرسش های متداول
            </h1>
            <FAQBox 
                question="آیا دوره های راحت بخون تنها مناسب دانش آموزان است ؟"
                answer="خیر ! دوره های راحت بخون برای آموزگاران، دانشجومعلمان، والدین، دانش آموزان و حتی در بعضی موارد تمامی اقشار جامعه است!"
            />
            <FAQBox 
                question= "دوره های مناسب آموزگاران شامل چه مواردی است؟"
                answer= "آموزش کلاسداری ، درمان اختلالات ، روش های خلاقانه تدریس ، روش های تولید محتوا و حتی آموزش هنر و تلفیق آن با دیگر دروس برای تدریس های جذابتر از مواردی است که برای آموزگاران در نظر گرفته شده است !"
            />
            <FAQBox 
                question= "دوره های راحت بخون چه کمکی به والدین می کند ؟"
                answer= "دوره های راحت بخون برای ارتباط بهتر والدین با فرزندانشان و هم چنین آشنایی با روش های مختلف تدریس است!"
            />
            <FAQBox 
                question= "در دوره های آموزشی راحت بخون چه چیزی به دانش آموزان یاد داده می شود ؟"
                answer= "تمامی مطالب کتاب های درسی، بازی ها و روش های حل مسئله، هنر و زیبانویسی و تمامی مواردی که می تواند مشکلات دانش آموزان را حل کند در راحت بخون وجود دارند!"
            />
        </section>
    )
}