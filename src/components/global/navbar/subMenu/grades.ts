
export interface GradesBoxProps {
    name : string
    img : string
    href : string
}

export const GradesBox : GradesBoxProps[] = [
    {
        name : "پایه اول",
        img : "/images/digits/1.png",
        href : "/grade-1"
    },
    {
        name : "پایه دوم",
        img : "/images/digits/2.png",
        href : "/grade-2"
    },
    {
        name : "پایه سوم",
        img : "/images/digits/3.png",
        href : "/grade-3"
    },
    {
        name : "پایه چهارم",
        img : "/images/digits/4.png",
        href : "/grade-4"
    },
    {
        name : "پایه پنجم",
        img : "/images/digits/5.png",
        href : "/grade-5"
    },
    {
        name : "پایه ششم",
        img : "/images/digits/6.png",
        href : "/grade-6"
    }
]

export const ExamsSubMenuInfo : GradesBoxProps[] = [
    {
        name : "آزمون فردی",
        img : "/images/home/searchTypes/individual.png",
        href : "/single-test"
    },
    {
        name : "آزمون های مرحله ای",
        img : "/images/home/searchTypes/stepByStep.png",
        href : "/stage-test"
    },
    {
        name : "آزمون گروهی",
        img : "/images/home/searchTypes/groupTest.png",
        href : "/group-test"
    },
    {
        name : "جشنواره و مسابقات",
        img : "/images/home/searchTypes/achievement.png",
        href : "/festival"
    },
]

export const GamesSubMenuInfo : GradesBoxProps[] = [
    {
        name : "ریاضی",
        img : "/images/home/searchTypes/math.png",
        href : "/math"
    },
    {
        name : "فارسی",
        img : "/images/home/searchTypes/persian.png",
        href : "/persian"
    },
    {
        name : "تاریخ و جغرافی",
        img : "/images/home/searchTypes/history.png",
        href : "/history"
    },
    {
        name : "علوم",
        img : "/images/home/searchTypes/science.png",
        href : "/science"
    },
    {
        name : "بازی های گروهی",
        img : "/images/home/searchTypes/groupGames.png",
        href : "/group-games"
    },
    {
        name : "بازی های مهارتی",
        img : "/images/home/searchTypes/knowledge.png",
        href : "/skill-games"
    }
]

export const VideosSubMenuInfo : GradesBoxProps[] = [
    {
        name : "برای دانش آموزان",
        img : "/images/home/searchTypes/students.png",
        href : "/for-students"
    },
    {
        name : "برای آموزگاران",
        img : "/images/home/searchTypes/teacher.png",
        href : "/for-teachers"
    },
    {
        name : "برای والدین",
        img : "/images/home/searchTypes/parents.png",
        href : "/for-parents"
    },
    {
        name : "#بدون_مخاطب_خاص",
        img : "/images/home/searchTypes/people.png",
        href : "/public"
    },
]