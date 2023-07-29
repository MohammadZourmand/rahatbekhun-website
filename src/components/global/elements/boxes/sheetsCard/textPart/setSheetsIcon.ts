
export const setSheetsIcon  = (value : string) => {
    switch (value) {
        case "1 برگی":
            return "۱"
        case "2 برگی":
            return "۲"
        case  "3 برگی":
            return "۳"
        case "4 برگی":
            return "۴"   
        default:
            return "+۴"
    }
}