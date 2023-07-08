

export const typeChecker = (value : string, type : string) => {

    if(type === "تمامی محتواها"  &&value.substring(0,1) === "_") {
        return true
    } else if(type !== "تمامی محتواها"  &&value.substring(0,1) === "_") {
        return true
    } else if(type === "کاربرگ"  &&value.substring(0,9) === "worksheet") {
        return true
    } else if(type === "ویدیو"  &&value.substring(0,6) === "videos") {
        return true
    } else if(type === "دوره"  &&value.substring(0,7) === "courses") {
        return true
    } else if(type === "آزمون"  &&value.substring(0,4) === "test") {
        return true
    } else if(type === "بازی"  &&value.substring(0,5) === "games") {
        return true
    } else {
        return false
    }
}