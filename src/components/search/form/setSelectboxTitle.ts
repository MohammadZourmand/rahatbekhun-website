
export const setSelectBoxTitle = (title : string) => {
    switch (title) {
        case "_type":
        return "نوع محتوا : "

        case "_subject":
        return "موضوع (کتاب) : "

        case "_grade":
        return "پایه تحصیلی : "

        case "_rating":
        return "امتیاز : "

        case "_author":
        return "نویسنده : "

        case "videosUserType":
        return "مخاطب :"
        
        case "coursesUserType":
        return "مخاطب :"

        case "coursesStudentsNum":
        return "تعداد دانش آموزان : "

        case "coursesEpisodesNum":
        return "تعداد قسمت ها :"

        case "worksheetType":
        return "نوع کاربرگ : "

        case "worksheetLesson":
        return "فصل کاربرگ : "

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
        
        case "testLevel":
        return "سطح آزمون : "

        case "testType":
        return "نوع آزمون : "

        default:
        return "---"
    }
}