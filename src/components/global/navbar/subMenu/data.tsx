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
        mainHead : "دوره های آموزشی",
        mainImg : "/images/navbar/online-learning.webp",
        mainInfo : "بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ" ,
        items : [
            {
                name : "پایه اول",
                img : "/images/navbar/digits/1.webp",
                href : "/grade-1"
            },
            {
                name : "پایه دوم",
                img : "/images/navbar/digits/2.webp",
                href : "/grade-2"
            },
            {
                name : "پایه سوم",
                img : "/images/navbar/digits/3.webp",
                href : "/grade-3"
            },
            {
                name : "پایه چهارم",
                img : "/images/navbar/digits/4.webp",
                href : "/grade-4"
            },
            {
                name : "پایه پنجم",
                img : "/images/navbar/digits/5.webp",
                href : "/grade-5"
            },
            {
                name : "پایه ششم",
                img : "/images/navbar/digits/6.webp",
                href : "/grade-6"
            }
        ],
    },
    {
        name : "کاربرگ",
        link : 'worksheets',
        searchlink : "search?page=1&_type=کاربرگ",
        mainHead : "مشاهده تمامی کاربرگ ها",
        mainImg : "/images/navbar/worksheet.webp",
        mainInfo : "کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش",
        items : [
            {
                name : "پایه اول",
                img : "/images/navbar/digits/1.webp",
                href : "/grade-1"
            },
            {
                name : "پایه دوم",
                img : "/images/navbar/digits/2.webp",
                href : "/grade-2"
            },
            {
                name : "پایه سوم",
                img : "/images/navbar/digits/3.webp",
                href : "/grade-3"
            },
            {
                name : "پایه چهارم",
                img : "/images/navbar/digits/4.webp",
                href : "/grade-4"
            },
            {
                name : "پایه پنجم",
                img : "/images/navbar/digits/5.webp",
                href : "/grade-5"
            },
            {
                name : "پایه ششم",
                img : "/images/navbar/digits/6.webp",
                href : "/grade-6"
            }
        ],
    },
    {
        name : "ویدیوها" ,
        link : 'videos',
        searchlink : "search?page=1&_type=ویدیوها" ,
        mainHead : "مشاهده تمامی ویدیوها",
        mainImg : "/images/navbar/video.webp",
        mainInfo : "آموزش های آسان برای آموزگاران و دانش آموزان",
        subCls : "!col-span-6",
        items : [
            {
                name : "برای دانش آموزان",
                img : "/images/navbar/videos/students.webp",
                href : "/for-students"
            },
            {
                name : "برای آموزگاران",
                img : "/images/navbar/videos/teacher.webp",
                href : "/for-teachers"
            },
            {
                name : "برای والدین",
                img : "/images/navbar/videos/parents.webp",
                href : "/for-parents"
            },
            {
                name : "#بدون_مخاطب_خاص",
                img : "/images/navbar/videos/people.webp",
                href : "/public"
            },
        ],
    }
]