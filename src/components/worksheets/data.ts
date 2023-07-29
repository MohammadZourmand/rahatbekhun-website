
export interface worksheetsDataProps {
    id : number
    _type : "کاربرگ" | "ویدیو" | "دوره" | "آزمون" | "بازی"
    _subject : "ریاضی" | "فارسی" | "علوم و آزمایشگاه" | "قرآن و هدیه ها" | "تاریخ و جغرافیا" | "هنر" | "درک مطلب" | "متفرقه" 
    _author : "راحت بخون"  | "سازندگان تاییدشده"  | "سازندگان معمولی"
    _grade : "اول" | "دوم"  | "سوم"  | "چهارم"  | "پنجم"  | "ششم" 
    _rating :  number
    price : number
    authorName : string
    worksheetName : string
    worksheetType : "کاربرگ تمرینی"  | "کاربرگ خلاقانه"  | "کاربرگ پلاس"  | "کاربرگ تستی"
    worksheetLesson : string
    worksheetKey :  "با پاسخ"  | "بی پاسخ"
    worksheetColor :  "رنگی"  | "سیاه و سفید"  | "بدون عکس"
    worksheetPaper :  "1 برگی"  | "2 برگی"  | "3 برگی"  | "4 برگی"  | "بیش از 4 برگ" 
    worksheetUsability : "برای تمرین و آزمون" | "مخصوص آزمون"  | "مخصوص تمرین"  | "با قابلیت تغییر برای آزمون یا تمرین"
    worksheetRotation : "عمودی"  | "افقی"
    worksheetsPrice : number
}

export const worksheetsData : worksheetsDataProps[] = [
    {
        id : 1,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        worksheetName : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        price : 0,
        worksheetType : "کاربرگ تمرینی",
        worksheetLesson : "فصل 5 : اندازه گیری",
        worksheetKey : "بی پاسخ",
        worksheetColor : "سیاه و سفید",
        worksheetPaper : "2 برگی",
        worksheetUsability : "برای تمرین و آزمون",
        worksheetRotation : "عمودی",
        authorName : "محمد زورمند",
        worksheetsPrice : 1200
    },
    {
        id : 2,
        _type : "کاربرگ",
        _subject : "فارسی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.3,
        worksheetName : "کاربرگ فصل 3 فارسی دوم",
        price : 0,
        worksheetType : "کاربرگ تمرینی",
        worksheetLesson : "فصل 3 : فصل سوم",
        worksheetKey : "بی پاسخ",
        worksheetColor : "سیاه و سفید",
        worksheetPaper : "2 برگی",
        worksheetUsability : "برای تمرین و آزمون",
        worksheetRotation : "عمودی",
        authorName : "محمد زورمند",
        worksheetsPrice : 1200
    },
    {
        id : 3,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.8,
        worksheetName : "کاربرگ فصل هفتم ریاضی دوم ابتدایی",
        price : 2,
        worksheetType : "کاربرگ پلاس",
        worksheetLesson : "فصل 7 : احتمال",
        worksheetKey : "با پاسخ",
        worksheetColor : "سیاه و سفید",
        worksheetPaper : "4 برگی",
        worksheetUsability : "برای تمرین و آزمون",
        worksheetRotation : "افقی",
        authorName : "محمد زورمند",
        worksheetsPrice : 2000
    },
    {
        id : 4,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        worksheetName : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        price : 18,
        worksheetType : "کاربرگ تمرینی",
        worksheetLesson : "فصل 5 : اندازه گیری",
        worksheetKey : "بی پاسخ",
        worksheetColor : "سیاه و سفید",
        worksheetPaper : "2 برگی",
        worksheetUsability : "برای تمرین و آزمون",
        worksheetRotation : "عمودی",
        authorName : "محمد زورمند",
        worksheetsPrice : 0
    },
    {
        id : 5,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        worksheetName : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        price : 0,
        worksheetType : "کاربرگ تمرینی",
        worksheetLesson : "فصل 5 : اندازه گیری",
        worksheetKey : "بی پاسخ",
        worksheetColor : "سیاه و سفید",
        worksheetPaper : "2 برگی",
        worksheetUsability : "برای تمرین و آزمون",
        worksheetRotation : "عمودی",
        authorName : "محمد زورمند",
        worksheetsPrice : 0
    },
    {
        id : 6,
        _type : "کاربرگ",
        _subject : "ریاضی",
        _grade : "دوم",
        _author : "راحت بخون",
        _rating : 4.2,
        worksheetName : "کاربرگ فصل پنجم ریاضی دوم ابتدایی",
        price : 1,
        worksheetType : "کاربرگ تمرینی",
        worksheetLesson : "فصل 5 : اندازه گیری",
        worksheetKey : "بی پاسخ",
        worksheetColor : "سیاه و سفید",
        worksheetPaper : "2 برگی",
        worksheetUsability : "برای تمرین و آزمون",
        worksheetRotation : "عمودی",
        authorName : "محمد زورمند",
        worksheetsPrice : 500
    },
]