
// ? react =======================
import Link from "next/link";

// ? types =======================
import { courseInfoType } from "@/types/home";


interface CartImgPartProps {
    item : courseInfoType
}

const CartImgPart : React.FC<CartImgPartProps> = ({item}) => {
    
    const {type, imageSrc, imageAlt, href, category} = item
        
    return (
        <div className="overflow-hidden rounded-lg">
            <Link href={`${type}/${category}/${href}`}>
                <img className="overflow-hidden group-hover:scale-105 transition duration-500" src={imageSrc} alt={imageAlt} />
            </Link>
        </div>
    )
}

export default CartImgPart;