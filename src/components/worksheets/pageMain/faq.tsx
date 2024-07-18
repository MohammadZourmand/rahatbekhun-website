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
                question="انواع کاربرگ ها بر اساس محتوا کدام هستند ؟"
                answer="کاربرگ ها بر اساس محتوا به چهار دسته تمرینی، آماده سازی، خلاقیتی و بسطی امتدادی تقسیم می شوند. در راحت بخون علاوه
                بر این موارد کاربرگ مخصوص آزمون و مهارت محور نیز وجود دارند ."
            />
            <FAQBox 
                question="چه کاربرگ هایی در راحت بخون وجود دارد ؟"
                answer="در راحت بخون انواع کاربرگ ها بر حسب محتوا و درجه سختی برای تمامی پایه ها وجود دارد ."
            />
            <FAQBox 
                question="آیا کاربرگ های راحت بخون پاسخنامه دارد ؟"
                answer="در راحت بخون کاربرگ های با پاسخ و بی پاسخ برای تمامی سطح ها وجود دارد. علاوه بر این در تلاش هستیم
                برای کاربرگ هایی خاص آموزش ویدیویی نیز بگذاریم !"
            />
            <FAQBox 
                question="آیا برای تمامی پایه های تحصیلی کاربرگ وجود دارد ؟"
                answer="بله ! در راحت بخون برای تمامی پایه های تحصیلی ابتدایی کاربرگ هایی مناسب وجود دارد!"
            />
            <FAQBox 
                question="آیا برای تیزهوشان راحت بخون کاربرگ مناسبی دارد ؟"
                answer="بله! در راحت بخون برای بچه های پرتلاش و باهوشی که می خواهند خود را به چالش بکشند، کاربرگ هایی تحت عنوان کاربرگ تسلا وجود دارد !"
            />
            <FAQBox 
                question="کاربرگ تسلا چیست ؟"
                answer="کاربرگ تسلا یک نوع از کاربرگ های راحت بخون است که سطح آن بالاتر از کاربرگ های معمول است و سوالاتی چالش برانگیز دارد !"
            />
            <FAQBox 
                question="آیا راحت بخون فقط کاربرگ برای دانش آموزان دارد ؟"
                answer="خیر ! کاربرگ های راحت بخون برای تدریس هر چه بهتر آموزگاران گرامی هم کاربرد دارد. مانند کاربرگ های آماده سازی"
                cls="!mb-0"
            />
        </section>
    )
}