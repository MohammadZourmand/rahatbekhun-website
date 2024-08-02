import { gradesBoxProps } from "./grades"


export interface SubMenusValuesProps {
    name : string
    link : string
    searchlink : string
    items : gradesBoxProps[]
    mainHead : string
    mainImg : string
    mainInfo : string
    subCls ?: string
    cls ?: string
}


export const SubMenusValues : SubMenusValuesProps[] = [
    {
        name : "صفر تا صد" ,
        link : 'courses',
        searchlink : "search?page=1&_type=دوره های آموزشی" ,
        mainHead : "از صفر تا صد",
        mainImg : "/images/navbar/online-learning.webp",
        mainInfo : "بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ" ,
        subCls : '!col-span-3',
        cls : 'xl:w-[60vw] lg:w-[80vw]',
        items : [
            {
                name : "پیش دبستانی",
                img : "/images/navbar/digits/0.webp",
                href : "courses/students?grade=pre_school"
            },
            {
                name : "پایه اول",
                img : "/images/navbar/digits/1.webp",
                href : "courses/students?grade=1"
            },
            {
                name : "پایه دوم",
                img : "/images/navbar/digits/2.webp",
                href : "courses/students?grade=2"
            },
            {
                name : "پایه سوم",
                img : "/images/navbar/digits/3.webp",
                href : "courses/students?grade=3"
            },
            {
                name : "پایه چهارم",
                img : "/images/navbar/digits/4.webp",
                href : "courses/students?grade=4"
            },
            {
                name : "پایه پنجم",
                img : "/images/navbar/digits/5.webp",
                href : "courses/students?grade=5"
            },
            {
                name : "پایه ششم",
                img : "/images/navbar/digits/6.webp",
                href : "courses/students?grade=6"
            },
            {
                name : "پایه هفتم",
                img : "/images/navbar/digits/7.webp",
                href : "courses/students?grade=7"
            },
        ],
    },
    {
        name : "کاربرگ",
        link : 'worksheets',
        searchlink : "search?page=1&_type=کاربرگ",
        mainHead : "مشاهده تمامی کاربرگ ها",
        mainImg : "/images/navbar/worksheet.webp",
        mainInfo : "کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش",
        subCls : '!col-span-3',
        cls : 'xl:w-[60vw] lg:w-[80vw]',
        items : [
            {
                name : "پیش دبستانی",
                img : "/images/navbar/digits/0.webp",
                href : "worksheets/pre-school"
            },
            {
                name : "پایه اول",
                img : "/images/navbar/digits/1.webp",
                href : "worksheets/grade-1"
            },
            {
                name : "پایه دوم",
                img : "/images/navbar/digits/2.webp",
                href : "worksheets/grade-2"
            },
            {
                name : "پایه سوم",
                img : "/images/navbar/digits/3.webp",
                href : "worksheets/grade-3"
            },
            {
                name : "پایه چهارم",
                img : "/images/navbar/digits/4.webp",
                href : "worksheets/grade-4"
            },
            {
                name : "پایه پنجم",
                img : "/images/navbar/digits/5.webp",
                href : "worksheets/grade-5"
            },
            {
                name : "پایه ششم",
                img : "/images/navbar/digits/6.webp",
                href : "worksheets/grade-6"
            },
            {
                name : "برای آموزگاران",
                img : "/images/navbar/videos/teacher.webp",
                href : "worksheets/for-teachers"
            },
        ],
    },
    {
        name : "دوره ها" ,
        link : 'videos',
        searchlink : "search?page=1&_type=ویدیوها" ,
        mainHead : "مشاهده تمامی دوره ها",
        mainImg : "/images/navbar/video.webp",
        mainInfo : "آموزش های آسان برای آموزگاران و دانش آموزان",
        subCls : "!col-span-6",
        items : [
            {
                name : "برای دانش آموزان",
                img : "/images/navbar/videos/students.webp",
                href : "courses/students"
            },
            {
                name : "برای آموزگاران",
                img : "/images/navbar/videos/teacher.webp",
                href : "courses/teachers"
            },
            {
                name : "برای والدین",
                img : "/images/navbar/videos/parents.webp",
                href : "courses/parents"
            },
            {
                name : "#بدون_مخاطب_خاص",
                img : "/images/navbar/videos/people.webp",
                href : "courses/public"
            },
        ],
    }
]