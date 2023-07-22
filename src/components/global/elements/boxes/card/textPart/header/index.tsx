
// ? react =======================
import Link from "next/link";

// ? types  ======================
import { courseInfoType } from "@/types/home";

// ? assets ======================
import { FolderBroken, Star } from "@/assets/icons";
import Heading6 from "@/components/global/elements/headings/h6";
import FaSpan from "../../faSpan";
import IconChooser from "./iconChooser";
import FiveStarsWithScore from "../../../fiveStarsWithScore";
import Heading5 from "@/components/global/elements/headings/h5";

interface CartTextHeaderProps {
    item : courseInfoType
}

const CartTextHeader : React.FC<CartTextHeaderProps> = ({item}) => {

    const {sessions, votes, votesAverage, type, category, href, name} = item

    return (
            <header>
                <div className="flex justify-between items-center text-gray-400 text-sm mt-3">
                    {/* <div className="flex items-center">
                        {IconChooser(item)}
                        <FaSpan value={sessions} />
                        <span>قسمت</span>
                    </div> */}
                    <FiveStarsWithScore
                        votesNumber={votes}
                    />
                </div>
                <Link href={`${type}/${category}/${href}`}>
                    <Heading5 color="text-gray-800" cls="font-extrabold mt-5" text={name} />
                </Link>
            </header>
    )
}

export default CartTextHeader