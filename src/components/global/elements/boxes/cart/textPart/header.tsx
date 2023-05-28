
// ? react =======================
import Link from "next/link";

// ? types  ======================
import { CartType } from "@/types/home";

// ? assets ======================
import { FolderBroken, Star } from "@/assets/icons";
import Heading6 from "@/components/global/elements/headings/h6";
import FaSpan from "../faSpan";

interface CartTextHeaderProps {
    item : CartType
}

const CartTextHeader : React.FC<CartTextHeaderProps> = ({item}) => {

    const {sessions, votes, votesAverage, type, category, href, name} = item

    return (
            <header>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                    <div className="flex items-center">
                        <FolderBroken cls="ml-1 w-5 h-5" color="rgba(156 163 175)" />
                        <FaSpan value={sessions} />
                        <span>قسمت</span>
                    </div>
                    <div className="flex items-center">
                        <FaSpan value={votes} />
                        <FaSpan cls="mx-1" value={votesAverage} />
                        <Star cls="w-4 h-4" color="#f4e700" />
                    </div>
                </div>
                <Link href={`${type}/${category}/${href}`}>
                    <Heading6 cls="font-extrabold mt-4" text={name} />
                </Link>
            </header>
    )
}

export default CartTextHeader