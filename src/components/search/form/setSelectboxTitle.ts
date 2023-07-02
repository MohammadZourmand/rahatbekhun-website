
export const setSelectBoxTitle = (title : string) => {
    switch (title) {
        case "type":
            
        return "نوع محتوا : "

        case "subject":
        
        return "درس مورد نظر : "

        case "grade":
        
        return "پایه تحصیلی : "

        case "userType":
        
        return "مخاطب :"

        case "rating":
        
        return "امتیاز : "

        case "author":
        
        return "نویسنده : "

        case "studentsNum":
        
        return "تعداد دانش آموزان : "

        case "episodesNum":
        
        return "تعداد قسمت ها :"

        case "worksheetType":
        
        return "نوع کاربرگ : "

        case "worksheetBorder":
        
        return "حاشیه دور کاربرگ : "

        case "worksheetKey":
        
        return "پاسخنامه کاربرگ : "

        case "worksheetColor":
        
        return "رنگ آمیزی کاربرگ :"

        case "worksheetPaper":
        
        return "تعداد صفحات کاربرگ : "

        case "worksheetUsability":
        
        return "کاربرد کاربرگ : "

        case "worksheetRotation":
        
        return "جهت کاربرگ : "

        default:

        return "---"
    }
}