export const gradesData = [
    {
        name : "پیش دبستانی",
        img : "/images/navbar/digits/0.webp",
        href : "/worksheets/pre-school"
    },
    {
        name : "پایه اول",
        img : "/images/navbar/digits/1.webp",
        href : "/worksheets/grade-1"
    },
    {
        name : "پایه دوم",
        img : "/images/navbar/digits/2.webp",
        href : "/worksheets/grade-2"
    },
    {
        name : "پایه سوم",
        img : "/images/navbar/digits/3.webp",
        href : "/worksheets/grade-3"
    },
    {
        name : "پایه چهارم",
        img : "/images/navbar/digits/4.webp",
        href : "/worksheets/grade-4"
    },
    {
        name : "پایه پنجم",
        img : "/images/navbar/digits/5.webp",
        href : "/worksheets/grade-5"
    },
    {
        name : "پایه ششم",
        img : "/images/navbar/digits/6.webp",
        href : "/worksheets/grade-6"
    },
    {
        name : "برای هفتم",
        img : "/images/navbar/digits/7.webp",
        href : "/worksheets/grade-7"
    },
    {
        name : "برای آموزگاران",
        img : "/images/navbar/videos/teacher.webp",
        href : "/worksheets/for-teachers"
    },
]

export const subjectsData = (grade) => {

    const data = [
        {
            name : "همه",
            img : "/images/home/searchTypes/all.webp",
        },
        {
            name : "فارسی",
            img : "/images/navbar/books/persian.webp",
        },
        {
            name : "ریاضی",
            img : "/images/navbar/books/math.webp",
        },
        {
            name : "قرآن و هدیه ها",
            img : "/images/navbar/books/quran.webp",
        },
        {
            name : "علوم",
            img : "/images/navbar/books/science.webp",
        },
        {
            name : "هنر",
            img : "/images/icons/ekhtelalat/color-palette.webp",
        }
    ]

    if(grade !== 'اول'&&grade !== 'دوم'&& grade !== 'پیش دبستانی' ) {
        data.push({
            name : "مطالعات",
            img : "/images/navbar/books/history.webp",
        })
    }

    if(grade === 'ششم' || grade === 'هفتم') {
        data.push({
            name : "تفکر و پژوهش",
            img : "/images/navbar/books/knowledge.webp",
        },
        {
            name : "کاروفناوری",
            img : "/images/navbar/books/groupGames.webp",
        })
    }

    return data
}