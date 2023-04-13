
export interface HomeSliderInfoProps {
    cls : string
    text : string
}

export const HomeSliderInfo : HomeSliderInfoProps[] = [
    {
        cls : `flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/kid-in-online-course.webp')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh]`,
        text : "دوره های آموزشی جذاب برای دانش آموز دلبند شما"
    },
    {
        cls : `flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/student-doing-homework.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh]`,
        text : "کاربرگ هایی متنوع و جذاب برای تمام مقاطع ابتدایی"
    },
    {
        cls : `flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/drawing-by-desk.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh]`,
        text : "آزمون های متعدد با سوالات خلاقانه برای تکمیل یادگیری شما"
    },
    {
        cls : `flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/Education-Video-Games.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh]`,
        text : "یادگیری و آموزش از طریق بازی برای اولین بار در ایران"
    },
]