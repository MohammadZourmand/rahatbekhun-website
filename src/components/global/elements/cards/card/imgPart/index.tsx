
// ? react =======================
import Link from "next/link";

// ? types =======================
import { courseInfoType } from "@/types/home";
import Image from "next/image";


interface CartImgPartProps {
    item : courseInfoType
}

const CartImgPart : React.FC<CartImgPartProps> = ({item}) => {
    
    const {type, imageSrc, imageAlt, href, category} = item
        
    return (
        <div className="overflow-hidden rounded-lg relative w-full xl:h-60 md:h-56 sm:h-48 xs:h-56 h-48">
            <Link href={`${type}/${category}/${href}`} className="">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="absolute top-0 left-0 overflow-hidden group-hover:scale-105 transition duration-500"
                    fill
                />
            </Link>
        </div>
    )
}

export default CartImgPart;