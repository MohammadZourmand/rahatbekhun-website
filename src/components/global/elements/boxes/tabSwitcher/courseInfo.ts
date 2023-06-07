
export interface episodeCommentsProps {
    username : string
    userPicture : string
    href : string
    text : string
    score : string
    date : string
    id : number
}

export interface episodesInfoProps {
    id : number
    name : string
    time : number
    type : string
    comments : episodeCommentsProps[]
}

export interface teachersInfo {
    id : number
    name : string
    img : string
    href : string
}

export interface partedEpisodes {
    "مقدمه" : episodesInfoProps[]
    "جمع های یک رقمی" : episodesInfoProps[]
    "جمع های دورقمی و سه رقمی" : episodesInfoProps[]
}
export interface courseInfoProps {
    name : string
    teachers : teachersInfo[]
    studentsAge : string
    score : number
    prerequisite : boolean
    startDate : string
    lastUpdate : string
    price : number
    offPercent : number
    category : string
    imgLabel : string
    episodesNumber : number
    students : number
    description : string
    episodes : partedEpisodes
    comments : episodeCommentsProps[]
}

export const courseDetails : courseInfoProps = {
    name: "آموزش محاسبات سریع",
    teachers: [
        { id: 1, name: "محمدزورمند", img: "/images/home/teachers/mohammad-zourmand.jpg", href: "/" }
    ],
    prerequisite : true,
    score: 4.5,
    startDate: "1402/1/11",
    lastUpdate: "14/3/1402",
    price: 86,
    studentsAge : "دوم ابتدایی",
    offPercent: 50,
    category: "math",
    imgLabel: "/images/courses/boy-answering-questions-fast.jpg",
    episodesNumber: 18,
    students: 42,
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    episodes : {
        "مقدمه" : [
            {
                id: 0,
                name: "مقدمه",
                time: 8,
                type: "video",
                comments: [
                    {
                        id : 1,
                        username: "جواد مرتضوی",
                        userPicture: "/images/home/teachers/teacher-man-1.webp",
                        href: "/",
                        text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                        score: "4.2",
                        date: "12/2/1402"
                    },
                ]
                
            },
            {
                id: 1,
                name: "آشنایی با شیوه کار در دوره",
                time: 12,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
        ],
        "جمع های یک رقمی" : [
            {
                id: 2,
                name: "جمع های کمتر از 10",
                time: 15,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
            {
                id: 3,
                name: "جمع های 10 تا 20",
                time: 9,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
            {
                id: 4,
                name: "جمع عدد 9",
                time: 4,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
            {
                id: 5,
                name: "داستان های جمع های کمتر از 20",
                time: 19,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
        ],
        "جمع های دورقمی و سه رقمی" : [
            {
                id: 6,
                name: "جمع های دورقمی",
                time: 14,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
            {
                id: 7,
                name: "جمع های سه رقمی",
                time: 12,
                type: "video",
                comments: [{
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                }],
                
            },
        ]
    },
    comments : [
        {
            id : 1,
            username: "جواد مرتضوی",
            userPicture: "/images/home/teachers/teacher-man-1.webp",
            href: "/",
            text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
            score: "4.2",
            date: "12/2/1402"
        },
        {
            id : 2,
            username: "جواد مرتضوی",
            userPicture: "/images/home/teachers/teacher-man-1.webp",
            href: "/",
            text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
            score: "4.2",
            date: "12/2/1402"
        }
    ]
}



const episodes = {
    "مقدمه" : [
        {
            id: 0,
            name: "مقدمه",
            time: 8,
            type: "video",
            comments: [
                {
                    id : 1,
                    username: "جواد مرتضوی",
                    userPicture: "/images/home/teachers/teacher-man-1.webp",
                    href: "/",
                    text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                    score: "4.2",
                    date: "12/2/1402"
                },
            ]
            
        },
        {
            id: 1,
            name: "آشنایی با شیوه کار در دوره",
            time: 12,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
    ],
    "جمع های یک رقمی" : [
        {
            id: 2,
            name: "جمع های کمتر از 10",
            time: 15,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
        {
            id: 3,
            name: "جمع های 10 تا 20",
            time: 9,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
        {
            id: 4,
            name: "جمع عدد 9",
            time: 4,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
        {
            id: 5,
            name: "داستان های جمع های کمتر از 20",
            time: 19,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
    ],
    "جمع های دورقمی و سه رقمی" : [
        {
            id: 6,
            name: "جمع های دورقمی",
            time: 14,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
        {
            id: 7,
            name: "جمع های سه رقمی",
            time: 12,
            type: "video",
            comments: [{
                id : 1,
                username: "جواد مرتضوی",
                userPicture: "/images/home/teachers/teacher-man-1.webp",
                href: "/",
                text: "دوره متوسط رو به بالایی بود و با همه چیزهایی که داشت جا برای بهتر شدنش هست !",
                score: "4.2",
                date: "12/2/1402"
            }],
            
        },
    ]
}