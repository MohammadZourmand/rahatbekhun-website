
export interface worksheetsDataProps {
    id : number
    _type : "کاربرگ" | "ویدیو" | "دوره" | "آزمون" | "بازی"
    _subject : "ریاضی" | "فارسی" | "علوم و آزمایشگاه" | "قرآن و هدیه ها" | "تاریخ و جغرافیا" | "هنر" | "درک مطلب" | "متفرقه" 
    _author : "راحت بخون"  | "سازندگان تاییدشده"  | "سازندگان معمولی"
    _grade : "اول" | "دوم"  | "سوم"  | "چهارم"  | "پنجم"  | "ششم" 
    _rating :  number
    
    name : string
    season : string
    info : string
    author : string

    level : "کاربرگ تمرینی"  | "کاربرگ خلاقانه"  | "کاربرگ پلاس"  | "کاربرگ تستی"
    price : number
    sheets : number
    key : boolean
    rotation : "عمودی"  | "افقی"
    usableFor : "برای تمرین و آزمون" | "مخصوص آزمون"  | "مخصوص تمرین"  | "با قابلیت تغییر برای آزمون یا تمرین"
    
    hashtags : string[],
    pdf : string,
    pictures : string[] | string
}

export const worksheetsData : worksheetsDataProps[] = [
    {
        id : 1,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "سازندگان تاییدشده",
        _rating : 4.2,
        name : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        season : "فصل اول : اندازه گیری و محاسبات",
        info : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        author : "محمد زورمند",
        level : "کاربرگ تمرینی",
        key : false,
        sheets : 2,
        usableFor : "برای تمرین و آزمون",
        rotation : "عمودی",
        price : 1200,
        hashtags : ["کاربرگ", "فصل دوم", "محمد زورمند"],
        pdf : '/files/worksheets/index.pdf',
        pictures : [
            "/images/worksheets/worksheetPictures/1.jpg",
            "/images/worksheets/worksheetPictures/2.jpg",
        ]
    },
    {
        id : 2,
        _type : "کاربرگ",
        _subject : "فارسی",
        _grade : "دوم",
        _author : "سازندگان معمولی",
        _rating : 4.3,
        name : "کاربرگ فصل 3 فارسی دوم",
        season : "فصل اول : اندازه گیری و محاسبات",
        info : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        author : "محمد زورمند",
        level : "کاربرگ تمرینی",
        key : false,
        sheets : 2,
        usableFor : "برای تمرین و آزمون",
        rotation : "عمودی",
        price : 1200,
        hashtags : ["کاربرگ", "فصل دوم", "محمد زورمند"],
        pdf : '/files/worksheets/index.pdf',
        pictures : [
            "/images/worksheets/worksheetPictures/1.jpg",
            "/images/worksheets/worksheetPictures/2.jpg",
        ]
    },
    {
        id : 3,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.8,
        name : "کاربرگ فصل هفتم ریاضی دوم ابتدایی",
        season : "فصل اول : اندازه گیری و محاسبات",
        info : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        author : "محمد زورمند",
        level : "کاربرگ پلاس",
        key : true,
        sheets : 4,
        usableFor : "برای تمرین و آزمون",
        rotation : "افقی",
        price : 2000,
        hashtags : ["کاربرگ", "فصل دوم", "محمد زورمند"],
        pdf : '/files/worksheets/index.pdf',
        pictures : [
            "/images/worksheets/worksheetPictures/1.jpg",
            "/images/worksheets/worksheetPictures/2.jpg",
        ]
    },
    {
        id : 4,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        name : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        season : "فصل اول : اندازه گیری و محاسبات",
        info : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        author : "محمد زورمند",
        level : "کاربرگ تمرینی",
        key : false,
        sheets : 2,
        usableFor : "برای تمرین و آزمون",
        rotation : "عمودی",
        price : 0,
        hashtags : ["کاربرگ", "فصل دوم", "محمد زورمند"],
        pdf : '/files/worksheets/index.pdf',
        pictures : [
            "/images/worksheets/worksheetPictures/3.jpg",
            "/images/worksheets/worksheetPictures/4.jpg",
        ]
    },
    {
        id : 5,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        name : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        season : "فصل اول : اندازه گیری و محاسبات",
        info : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        author : "محمد زورمند",
        level : "کاربرگ تمرینی",
        key : false,
        sheets : 2,
        usableFor : "برای تمرین و آزمون",
        rotation : "عمودی",
        price : 0,
        hashtags : ["کاربرگ", "فصل دوم", "محمد زورمند"],
        pdf : '/files/worksheets/index.pdf',
        pictures : [
            "/images/worksheets/worksheetPictures/3.jpg",
            "/images/worksheets/worksheetPictures/4.jpg",
        ]
    },
    {
        id : 6,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        name : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        season : "فصل اول : اندازه گیری و محاسبات",
        info : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        author : "محمد زورمند",
        level : "کاربرگ تمرینی",
        key : false,
        sheets : 2,
        usableFor : "برای تمرین و آزمون",
        rotation : "عمودی",
        price : 500,
        hashtags : ["کاربرگ", "فصل دوم", "محمد زورمند"],
        pdf : '/files/worksheets/index.pdf',
        pictures : [
            "/images/worksheets/worksheetPictures/3.jpg",
            "/images/worksheets/worksheetPictures/4.jpg",
        ]
    },
]