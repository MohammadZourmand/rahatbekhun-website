
export const values = {
    _type : 'کاربرگ',
    _subject : 'همه',
    _grade : 'همه',
    _rating : 'همه',
    _author : 'همه',
    videosUserType : 'همه',
    price : 'همه',
    type : 'همه',
    level : 'همه',
    key : 'همه',
    rotation : 'همه',
    usableFor : 'همه',
    userType : 'همه',
    studentsNumber : 'همه',
    episodesNumber : 'همه',
    testType : 'همه',
    testLevel : 'همه',
}

export const videosOptions = {
    videosUserType : {
        title :  "مخاطب :",
        options :  [ "همه" , "دانش آموز"  , "آموزگار یا دانشجو"  , "والدین"  , "عمومی"], 
    },
}

export const testOptions = {
    testType : {
        title :  "سطح آزمون : ",
        options :  ["همه","آزمون های فردی","آزمون های مرحله ای","آزمون های گروهی","جشنواره ها و مسابقات"],
    },
    testLevel : {
        title :  "نوع آزمون : ",
        options :  ["همه","آسان","متوسط","سخت","خیلی سخت"],
        default : "همه"
    },
}

export const courseOptions = {
    userType : {
        title :  "مخاطب :",
        options :  [ "همه" , "دانش آموز"  , "آموزگار یا دانشجو"  , "والدین"  , "عمومی"], 
    },
    studentsNumber : {
        title :  "تعداد دانش آموزان : ",
        options :  [ "همه" , "پایین تر از 100"  , "از 100 تا 300 نفر"  , "از 301 تا 500 نفر"  , "از 500 تا 1000 نفر"  , "بالاتر از 1000 نفر" ],
    },
    episodesNumber : {
        title :  "تعداد قسمت ها :",
        options :   ["همه" , "کمتر از 5"  , "از 6 تا 10 قسمت"  , "از 10 تا 20 قسمت"  , "بیش از 20 قسمت"],  
    },
}

export const worksheetOptions = {
    type : {
        title : 'نوع کاربرگ :',
        options : ["همه", 'تمرینی','مهارت محور','آماده سازی','بسطی-امتدادی','خلاقیتی','آزمون',],
    }, 
    level : {
        title : 'سطح کاربرگ :',
        options : ["همه", 'آسان' , 'متوسط' , 'تسلا'],
    }, 
    key : {
        title : 'پاسخنامه :',
        options : ["همه", "دارد" , "ندارد"],
    },
    rotation : {
        title : 'جهت :',
        options : ["همه", "عمودی","افقی"],
    },
    usableFor : {
        title : 'مناسب برای :',
        options : ["همه", "برای تمرین و آزمون" , "مخصوص آزمون"  , "مخصوص تمرین" ,],
    },
}

export const globalOptions = {
    _subject : {
        title :  "موضوع (کتاب) : ",
        options :   ["همه" , "ریاضی" , "فارسی" , "علوم و آزمایشگاه" , "تاریخ و جغرافیا" , "قرآن و هدیه ها" , "هنر" , "درک مطلب" , "متفرقه"],
    },
    _grade : {
        title :  "پایه تحصیلی : ",
        options :   ["همه" , "اول" , "دوم"  , "سوم"  , "چهارم"  , "پنجم"  , "ششم"] ,
    },
    _rating : {
        title :  "امتیاز : ",
        options :   ["همه" , "بالاتر از 4"  , "بالاتر از 3"  , "بالاتر از 2"  , "بالاتر از 1"  , "پایین تر از 1"],
    },
    _author : {
        title :  "نویسنده : ",
        options :   ["همه" , "راحت بخون"  , "سازندگان تاییدشده"  , "سازندگان معمولی"],
    },
    price : {
        title :  "هزینه :",
        options :   ["همه","فقط رایگان"],
    },
}