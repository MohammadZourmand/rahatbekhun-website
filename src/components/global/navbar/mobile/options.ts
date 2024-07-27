import { ActivityBroken, ChatBrokenIcon, HomeBrokenIcon, UserBrokenIcon, UsersBroken } from "@/assets/icons";

export interface menuOptionsListProps {
    title : string
    href : string
}

export interface menuOptionsProps {
    name : string,
    list : menuOptionsListProps[]
}

export interface additionalOptionsProps {
    title : string
    href : string
    img : any
}

export const menuOptions : menuOptionsProps[] = [
    {
        name : "worksheets",
        list : [
            {
                title : "پایه اول",
                href : "/worksheets/grade-1",
            },
            {
                title : "پایه دوم",
                href : "/worksheets/grade-2"
            },
            {
                title : "پایه سوم",
                href : "/worksheets/grade-3"
            },
            {
                title : "پایه چهارم",
                href : "/worksheets/grade-4"
            },
            {
                title : "پایه پنجم",
                href : "/worksheets/grade-5"
            },
            {
                title : "پایه ششم",
                href : "/worksheets/grade-6"
            },
            {
                title : "آمادگی برای پایه هفتم",
                href : "/worksheets/grade-7"
            },
            {
                title : "پیش دبستانی",
                href : "/worksheets/pre-school"
            },
            {
                title : "برای آموزگاران",
                href : "/worksheets/for-teachers"
            },
            {
                title : "صفحه اصلی",
                href : "/worksheets"
            }
        ]
    },
    {
        name : "courses",
        list : [
            {
                title : "برای دانش آموزان",
                href : "/courses/students",
            },
            {
                title : "برای آموزگاران",
                href : "/courses/teachers",
            },
            {
                title : "برای والدین",
                href : "/courses/parents",
            },
            {
                title : "#بدون_مخاطب_خاص",
                href : "/courses/public",
            },
        ]
    },
    {
        name : "posts",
        list : [
            {
                title : "ورود به وبلاگ",
                href : "/posts",
            },
            {
                title : "درخواست انتشار مقاله",
                href : "/contact",
            },
        ]
    },
]

export const additionalOptions : additionalOptionsProps[] = [
    {
        title : "درباره ما", 
        href : "/about", 
        img : UsersBroken,
    },
    {
        title : "ارتباط با ما", 
        href : "/contact", 
        img : ChatBrokenIcon,
    },
]