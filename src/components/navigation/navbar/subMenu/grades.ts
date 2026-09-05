
export interface gradesBoxProps {
    name : string
    img : string
    href : string
}

export const ExamsSubMenuInfo : gradesBoxProps[] = [
    {
        name : "آزمون فردی",
        img : "/images/home/searchTypes/individual.webp",
        href : "/single-test"
    },
    {
        name : "آزمون های مرحله ای",
        img : "/images/home/searchTypes/stepByStep.webp",
        href : "/stage-test"
    },
    {
        name : "آزمون گروهی",
        img : "/images/home/searchTypes/groupTest.webp",
        href : "/group-test"
    },
    {
        name : "جشنواره و مسابقات",
        img : "/images/home/searchTypes/achievement.webp",
        href : "/festival"
    },
]

export const GamesSubMenuInfo : gradesBoxProps[] = [
    {
        name : "ریاضی",
        img : "/images/home/searchTypes/math.webp",
        href : "/math"
    },
    {
        name : "فارسی",
        img : "/images/home/searchTypes/persian.webp",
        href : "/persian"
    },
    {
        name : "تاریخ و جغرافی",
        img : "/images/home/searchTypes/history.webp",
        href : "/history"
    },
    {
        name : "علوم",
        img : "/images/home/searchTypes/science.webp",
        href : "/science"
    },
    {
        name : "بازی های گروهی",
        img : "/images/home/searchTypes/groupGames.webp",
        href : "/group-games"
    },
    {
        name : "بازی های مهارتی",
        img : "/images/home/searchTypes/knowledge.webp",
        href : "/skill-games"
    }
]