
export interface WelcomeBoxesInfoProps {
    id : number
    title : string
    text : string
    icon : any
    bgColor : string
}

export const WelcomeBoxesInfo : WelcomeBoxesInfoProps[] = [
    {
        id : 1,
        title : "فیلم های آموزشی",
        text : "آموزش های کوتاه و جذاب برای یادگیری کامل",
        icon : "./images/icons/teacher.png",
        bgColor : "bg-baby-9"
    },
    {
        id : 2,
        title : "کاربرگ های جذاب",
        text : "سوالات مختلف از تمامی کتاب برای تمامی سنین",
        icon : "./images/icons/contract.png",
        bgColor : "bg-baby-10"
    },
    {
        id : 3,
        title : "بازی های متنوع",
        text : "یادگیری مطالب مختلف درسی با استفاده از بازی",
        icon : "./images/icons/game.png",
        bgColor : "bg-baby-11"
    },
    {
        id : 4,
        title : "آزمون های چالشی",
        text : "چالش های فردی، گروهی و سراسری برای شما",
        icon : "./images/icons/onlineTest.png",
        bgColor : "bg-baby-12"
    }
]