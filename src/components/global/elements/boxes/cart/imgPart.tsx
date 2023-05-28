
// ? react =======================
import Link from "next/link";
import {useState} from "react";

// ? types =======================
import { CartType } from "@/types/home";


interface CartImgPartProps {
    item : CartType
}

const CartImgPart : React.FC<CartImgPartProps> = ({item}) => {
    
    const {type, image, href, category} = item
    
    // This state will save FA category word! 
    const [faCategory, setFaCategory] = useState<string>("عمومی")

    // This function will change ENG category word to FA ! 
    const categoryChooser = (category : string) => {
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

        return faCategory
    }
    return (
        <div className="relative overflow-hidden h-56 rounded-t-lg">
            <div className={`z-10 text-sm bg-baby-11 absolute text-white top-4 left-4 px-3 py-1 rounded`}>{categoryChooser(category)}</div>
            <Link href={`${type}/${category}/${href}`}>
                <img className="overflow-hidden group-hover:scale-105 transition duration-500" src={image} alt="" />
            </Link>
        </div>
    )
}

export default CartImgPart;