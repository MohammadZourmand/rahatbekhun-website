import { gradesBox, gradesBoxProps, VideosSubMenuInfo } from "./grades"


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
        items : gradesBox,
        mainHead : "دوره های آموزشی",
        mainImg : "/images/home/searchTypes/online-learning.png",
        mainInfo : "بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ" ,
    },
    {
        name : "کاربرگ",
        link : "worksheets",
        items : gradesBox,
        mainHead : "مشاهده تمامی کاربرگ ها",
        mainImg : "/images/home/searchTypes/worksheet.png",
        mainInfo : "کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش",
    },
    {
        name : "ویدیوها" ,
        link : "videos" ,
        items : VideosSubMenuInfo,
        mainHead : "مشاهده تمامی ویدیوها",
        mainImg : "/images/home/searchTypes/video.png",
        mainInfo : "آموزش های آسان برای آموزگاران و دانش آموزان",
        subCls : "!col-span-6",
    }
]