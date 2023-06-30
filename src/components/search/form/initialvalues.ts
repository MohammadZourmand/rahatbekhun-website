
export interface searchFormInitialValuesProps {
    type :  "همه" | "کاربرگ" | "ویدیو" | "دوره" | "آزمون" | "بازی"
    subject : "همه" | "ریاضی" | "فارسی" | "علوم و آزمایشگاه" | "تاریخ و جغرافیا" | "هنر" | "درک مطلب" | "متفرقه" 
    grade : "همه" | "اول" | "دوم"  | "سوم"  | "چهارم"  | "پنجم"  | "ششم" 
    userType : "همه" | "دانش آموز"  | "آموزگار یا دانشجو"  | "والدین"  | "عمومی"
    rating : "همه" | "بالاتر از 4"  | "بالاتر از 3"  | "بالاتر از 2"  | "بالاتر از 1"  | "پایین تر از 1" 
    author : "همه" | "راحت بخون"  | "سازندگان تاییدشده"  | "سازندگان معمولی"
    studentsNum : "همه" | "پایین تر از 100"  | "از 100 تا 300 نفر"  | "از 301 تا 500 نفر"  | "از 500 تا 1000 نفر"  | "بالاتر از 1000 نفر" 
    episodesNum : "همه" | "کمتر از 5"  | "از 6 تا 10 قسمت"  | "از 10 تا 20 قسمت"  | "بیش از 20 قسمت" 
    worksheetType ?: "همه" | "کاربرگ تمرینی"  | "کاربرگ خلاقانه"  | "کاربرگ پلاس"  | "کاربرگ تستی"
    worksheetBorder ?: "همه" | "با حاشیه"  | "بی حاشیه" | "با قابلیت تغییر حاشیه"
    worksheetKey ?: "همه" | "با پاسخ"  | "بی پاسخ" 
    worksheetColor ?: "همه" | "رنگی"  | "سیاه و سفید"  | "بدون عکس"
    worksheetPaper ?: "همه" | "1 برگی"  | "2 برگی"  | "3 برگی"  | "4 برگی"  | "بیش از 4 برگ" 
    worksheetUsability ?: "همه" | "مخصوص آزمون"  | "مخصوص تمرین"  | "با قابلیت تغییر"
    worksheetRotation ?: "همه" | "عمودی"  | "افقی"
}

export const searchFormInitialValues : searchFormInitialValuesProps = {
    type : "همه",
    subject : "همه",
    grade : "همه",
    userType : "همه", 
    rating : "همه",
    author : "همه",
    studentsNum : "همه",
    episodesNum : "همه", 
    worksheetType : "همه",
    worksheetBorder : "همه",
    worksheetKey : "همه",
    worksheetColor : "همه",
    worksheetPaper : "همه",
    worksheetUsability : "همه",
    worksheetRotation : "همه",
}