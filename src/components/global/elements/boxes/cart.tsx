// ? react =======================
import Link from "next/link";
import {useState} from "react";

// ? libraries ===================
import PN from "persian-number"

// ? types  ======================
import { CartType } from "@/types/home";

// ? assets ======================
import { FolderBroken, LeftIcon, Star } from "@/assets/icons";
import Heading6 from "@/components/global/elements/headings/h6";
import Paragraph from "@/components/global/elements/paragraph";


const Cart : React.FC<CartType> = ({
    ageCategory,
    sessions,
    price,
    name,
    details,
    image,
    cls,
    category,
    offPrice,
    votes,
    votesAverage,
    href
}) => {

    const [faCategory, setFaCategory] = useState<string>("عمومی")

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

    console.log(href)

    return (
        <section className={`${cls} group rounded-lg bg-white shadow-lg`}>
            {/* image part */}
            <div className="relative overflow-hidden h-56 rounded-t-lg">
                <div className={`z-10 text-sm bg-baby-11 absolute text-white top-4 left-4 px-3 py-1 rounded`}>{categoryChooser(category)}</div>
                <img className="overflow-hidden group-hover:scale-105 transition duration-500" src={image} alt="" />
            </div>
            {/* text part */}
            <div className="flex flex-col xl:p-4 p-3">
                <header className="">
                    <div className="flex justify-between items-center text-gray-400 text-sm">
                        <div className="flex items-center">
                            <FolderBroken cls="ml-1 w-5 h-5" color="rgba(156 163 175)" />
                            <span className="ml-0.5">{PN.convertEnToPe(sessions)}</span>
                            <span>قسمت</span>
                        </div>
                        <div className="flex items-center">
                            <span className="ml-0.5">({PN.convertEnToPe(votes)})</span>
                            <span className="ml-0.5 mx-1">{PN.convertEnToPe(votesAverage)}</span>
                            <Star cls="w-4 h-4" color="#f4e700" />
                        </div>
                    </div>
                    <Link href={href}>
                        <Heading6 cls="font-extrabold mt-4" text={name} />
                    </Link>
                </header>
                <main className="mt-4">
                    <Paragraph cls="font-medium text-[.9rem] leading-relaxed" text={details} />
                    <div className="flex mt-4 mb-4 items-center">
                        <img className="w-9 h-9 border-2 border-gray-200 shadow-xl rounded-full" src="./images/home/teachers/mohammad-zourmand.jpg" alt="suthor" />
                        <Paragraph cls="text-gray-600 text-xs mr-4" text={"نویسنده راحت بخون"} />
                    </div>
                </main>
                <footer className={`${offPrice ? "gap-0" : "gap-4"} flex items-center justify-between gap-4 border-t px-4 pt-4 pb-1`}>
                    <div className={`text-baby-12 font-semibold`}>
                        {
                            offPrice
                            ? PN.convertEnToPe(PN.sliceNumber(offPrice)) + "تومان"
                            : price ? (PN.convertEnToPe(PN.sliceNumber(price))) + "تومان" : "رایگان"
                        }
                    </div>
                    {
                        offPrice && <div className={`text-baby-6 line-through text-xs font-semibold`}>
                                {(PN.convertEnToPe(PN.sliceNumber(price))) + "تومان"}
                            </div>
                    }
                    <div className="flex items-center">
                        <span className="ml-1 text-sm">مشاهده جزئیات</span>
                        <LeftIcon cls="w-5 h-5" color="#374151" />
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Cart;