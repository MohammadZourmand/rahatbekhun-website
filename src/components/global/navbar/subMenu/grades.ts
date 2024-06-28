
export interface gradesBoxProps {
    name : string
    img : string
    href : string
}

export const ExamsSubMenuInfo : gradesBoxProps[] = [
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

export const GamesSubMenuInfo : gradesBoxProps[] = [
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