
// ? react =======================
import Link from "next/link";
import {useState} from "react";

// ? types =======================
import { CardType } from "@/types/home";
import { CategoryChecker } from "./categoryChecker";


interface CartImgPartProps {
    item : CardType
}

const CartImgPart : React.FC<CartImgPartProps> = ({item}) => {
    
    const {type, image, href, category} = item
        
    return (
        <div className="relative overflow-hidden h-56 rounded-t-lg">
            <div className={`z-10 text-sm bg-baby-11 absolute text-white top-4 left-4 px-3 py-1 rounded`}>{CategoryChecker(category)}</div>
            <Link href={`${type}/${category}/${href}`}>
                <img className="overflow-hidden group-hover:scale-105 transition duration-500" src={image} alt="" />
            </Link>
        </div>
    )
}

export default CartImgPart;