

export const badgeBgColorChooser = (value) => {

    switch (value) {
        case "math":
            return "bg-blue-500/20"
        case "sport":
            return "bg-green-500/20"
        case "others":
            return "bg-purple-500/20"
        default:
            return "bg-purple-500/20"
    }
}

export const badgeTextColorChooser = (value) => {

    switch (value) {
        case "math":
            return "text-blue-600"
        case "sport":
            return "text-green-600"
        case "others":
            return "text-purple-600"
        default:
            return "text-purple-600"
    }
}

export const badgeTextTranslator = (value) => {

    switch (value) {
        case "math":
            return "ریاضی"
        case "sport":
            return "ورزش و سلامتی"
        default :
            return "موارد متفرقه"
    }
}