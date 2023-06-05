
export const typeTranslator = (type : string) => {
    switch (type) {
        case "video":
            return 'ویدیو'
        case "picture":
            return 'عکس'
        case "text":
            return 'متن'
        case "worksheet":
            return 'کاربرگ'
        case "practice":
            return 'تمرین'
        case "test":
            return 'آزمون'
        case "game":
            return 'بازی'
        case "audio":
            return 'فایل صوتی'
        default:
            return 'فایل'
    }
}
