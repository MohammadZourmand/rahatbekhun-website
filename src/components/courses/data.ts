
export interface worksheetsDataProps {
    _id : number | string
    _subject : "ریاضی" | "فارسی" | "علوم و آزمایشگاه" | "قرآن و هدیه ها" | "تاریخ و جغرافیا" | "هنر" | "درک مطلب" | "متفرقه" 
    _author : "راحت بخون"  | "سازندگان تاییدشده"  | "سازندگان معمولی"
    _grade : "اول" | "دوم"  | "سوم"  | "چهارم"  | "پنجم"  | "ششم" | "هقتم" | "پیش دبستانی" | "برای آموزگاران"
    _rating :  number
    
    name : string
    season : string
    info : string
    author : string

    type : 'تمرینی'|'مهارت محور'|'آماده سازی'|'بسطی-امتدادی'|'خلاقیتی'|'آزمون'
    level : 'آسان' | 'متوسط' | 'تسلا'
    price : number
    pages : number
    key : boolean
    rotation : "عمودی"  | "افقی"
    usableFor : "برای تمرین و آزمون" | "مخصوص آزمون"  | "مخصوص تمرین" 
    
    isPublished : boolean
    hashtags : string[],
    pdf : string,
    image : string
}