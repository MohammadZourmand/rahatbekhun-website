
// ? react =======================
import Link from "next/link";

// ? types  ======================
import { courseInfoType } from "@/types/home";
import FiveStarsWithScore from "@/components/global/elements/boxes/stars/fiveStarsWithScore";
import Heading5 from "@/components/global/elements/headings/h5";

// ? assets ======================
import { BookmarkIcon } from "@/assets/icons";

interface CartTextHeaderProps {
    item : courseInfoType
}

const CartTextHeader = ({item} : CartTextHeaderProps) => {

    const {votes, type, category, href, name} = item

    return (
            <header>
                <div className="flex justify-between items-center text-gray-400 text-sm mt-3">
                    <FiveStarsWithScore
                        votesNumber={votes}
                    />
                <div className={`group transition duration-500 cursor-pointer p-2 rounded-full hover:bg-blue-100/80`}>
                    <BookmarkIcon cls="w-5 h-5 group-hover:!fill-baby-9" />
                </div>
                </div>
                <Link href={`${type}/${category}/${href}`}>
                    <Heading5 color="text-gray-800" cls="font-extrabold mt-3 hover:text-baby-9 transition duration-500" text={name} />
                </Link>
            </header>
    )
}

export default CartTextHeader