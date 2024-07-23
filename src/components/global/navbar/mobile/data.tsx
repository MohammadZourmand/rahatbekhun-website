import { PaperBrokenIcon, PlayBrokenIcon, VideoBrokenIcon } from "@/assets/icons"

export interface MobileNavbarListProps {
    type : string,
    name : string,
    icon : JSX.Element
    items : {
        name : string
        href : string
    }[]
}

export const MobileNavbarList : MobileNavbarListProps[] = [
    {
        type : "worksheets",
        name : "کاربرگ ها",
        icon : <PaperBrokenIcon cls={"relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"} />,
        items : [
            {name : "همه", href : "worksheets"},
            {name : "پایه اول", href : "worksheets"},
            {name : "پایه دوم", href : "worksheets"},
            {name : "پایه سوم", href : "worksheets"},
            {name : "پایه چهارم", href : "worksheets"},
            {name : "پایه پنجم", href : "worksheets"},
            {name : "پایه ششم", href : "worksheets"}
        ]
    },
    {
        type : "courses",
        name : "دوره های آموزشی",
        icon : <VideoBrokenIcon cls={"relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"} />,
        items : [
            {name : "همه", href : "courses"},
            {name : "پایه اول", href : "courses/"},
            {name : "پایه دوم", href : "courses/"},
            {name : "پایه سوم", href : "courses/"},
            {name : "پایه چهارم", href : "courses/"},
            {name : "پایه پنجم", href : "courses/"},
            {name : "پایه ششم", href : "courses/"}
        ]
    },
    {
        type : "videos",
        name : "فیلم های آموزشی",
        icon : <PlayBrokenIcon cls={"relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"} />,       
        items : [
            {name : "همه", href : "videos"},
            {name : "مخصوص دانش آموزان", href : "videos/"},
            {name : "مخصوص والدین", href : "videos/"},
            {name : "مخصوص آموزگاران و دانشجویان", href : "videos/"},
            {name : "ویدیوهای عمومی", href : "videos/"},

        ]
    }
]