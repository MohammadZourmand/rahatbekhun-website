import { gradesBoxProps } from "./grades"


export interface SubMenusValuesProps {
    name : string
    link : string
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
        link : "courses" ,
        mainHead : "دوره های آموزشی",
        mainImg : "/images/navbar/online-learning.png",
        mainInfo : "بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ" ,
        items : [
            {
                name : "پایه اول",
                img : "/images/navbar/digits/1.png",
                href : "/grade-1"
            },
            {
                name : "پایه دوم",
                img : "/images/navbar/digits/2.png",
                href : "/grade-2"
            },
            {
                name : "پایه سوم",
                img : "/images/navbar/digits/3.png",
                href : "/grade-3"
            },
            {
                name : "پایه چهارم",
                img : "/images/navbar/digits/4.png",
                href : "/grade-4"
            },
            {
                name : "پایه پنجم",
                img : "/images/navbar/digits/5.png",
                href : "/grade-5"
            },
            {
                name : "پایه ششم",
                img : "/images/navbar/digits/6.png",
                href : "/grade-6"
            }
        ],
    },
    {
        name : "کاربرگ",
        link : "worksheets",
        mainHead : "مشاهده تمامی کاربرگ ها",
        mainImg : "/images/navbar/worksheet.png",
        mainInfo : "کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش",
        items : [
            {
                name : "پایه اول",
                img : "/images/digits/1.png",
                href : "/grade-1"
            },
            {
                name : "پایه دوم",
                img : "/images/navbar/digits/2.png",
                href : "/grade-2"
            },
            {
                name : "پایه سوم",
                img : "/images/navbar/digits/3.png",
                href : "/grade-3"
            },
            {
                name : "پایه چهارم",
                img : "/images/navbar/digits/4.png",
                href : "/grade-4"
            },
            {
                name : "پایه پنجم",
                img : "/images/navbar/digits/5.png",
                href : "/grade-5"
            },
            {
                name : "پایه ششم",
                img : "/images/navbar/digits/6.png",
                href : "/grade-6"
            }
        ],
    },
    {
        name : "ویدیوها" ,
        link : "videos" ,
        mainHead : "مشاهده تمامی ویدیوها",
        mainImg : "/images/navbar/video.png",
        mainInfo : "آموزش های آسان برای آموزگاران و دانش آموزان",
        subCls : "!col-span-6",
        items : [
            {
                name : "برای دانش آموزان",
                img : "/images/navbar/videos/students.png",
                href : "/for-students"
            },
            {
                name : "برای آموزگاران",
                img : "/images/navbar/videos/teacher.png",
                href : "/for-teachers"
            },
            {
                name : "برای والدین",
                img : "/images/navbar/videos/parents.png",
                href : "/for-parents"
            },
            {
                name : "#بدون_مخاطب_خاص",
                img : "/images/navbar/videos/people.png",
                href : "/public"
            },
        ],
    }
]