

export const CategoryChecker = (category : string) => {
    let faCategory : string;

    switch (category) {
        case "math":
            faCategory = "ریاضی"
            break;
        case "persian":
            faCategory = "فارسی"
            break;
        case "other":
            faCategory = "متفرقه"
            break;
        case "public":
            faCategory = "عمومی"
            break;
        default:
            faCategory = "بدون دسته بندی"
            break;
    }

    return faCategory;
}