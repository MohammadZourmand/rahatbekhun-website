import { PaperBrokenIcon, VideoBrokenIcon } from "@/assets/icons"

export interface MobileNavbarListProps {
    type : string,
    name : string,
    icon : JSX.Element
    items : string[]
}

export const MobileNavbarList : MobileNavbarListProps[] = [
    {
        type : "worksheets",
        name : "کاربرگ ها",
        icon : <PaperBrokenIcon cls={"relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"} />,
        items : [
            "پایه اول",
            "پایه دوم",
            "پایه سوم",
            "پایه چهارم",
            "پایه پنجم",
            "پایه ششم",
        ]
    },
    {
        type : "courses",
        name : "دوره های آموزشی",
        icon : <VideoBrokenIcon cls={"relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 transition duration-500 group-hover:scale-110 fill-gray-700 group-hover:fill-white group-hover:bg-gray-700 bg-slate-200 rounded-full"} />,
        items : [
            "پایه اول",
            "پایه دوم",
            "پایه سوم",
            "پایه چهارم",
            "پایه پنجم",
            "پایه ششم",
        ]
    },
]