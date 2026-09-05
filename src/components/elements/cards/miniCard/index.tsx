// ? types  ======================
import { Card2Type } from "@/types/home";

// ? assets ======================
import { ClockBroken } from "@/assets/icons";
import Heading1 from "../../headings/h1";
import Link from "next/link";
import { badgeBgColorChooser, badgeTextColorChooser, badgeTextTranslator } from "../../boxes/badges/badgeColorChooser";
import Image from "next/image";
import Paragraph from "../../paragraph";

const MiniCard = ({item, cls} : Card2Type) => {

    return (
        <div className={`${cls} relative group hover:scale-105 transition-all rounded-lg bg-white shadow-md border flex flex-col xl:pt-1 xl:pb-3 xl:px-3 p-2`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex">
                    <Image
                        src={"/images/home/teachers/mohammad-zourmand.webp"}
                        className="group-hover:scale-110 transition-all w-9 h-9 border-2 border-gray-200 shadow-xl rounded-full"
                        alt="author"
                        width={36}
                        height={36}
                    />
                    <div className="flex mt-4 mb-4 items-center">
                        <Paragraph cls="text-gray-600 text-xs mr-2" text={item.author.slice(0,15)} />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className={`${badgeTextColorChooser(item.category)} ${badgeBgColorChooser(item.category)} justify-self-start text-xs font-semibold px-2.5 py-0.75 rounded`}>{badgeTextTranslator(item.category)}</div>
                </div>
            </div>
            <Link className="font-semibold text-gray-800" href={`/articles/${item.linkName}`}>
                {item.head} 
            </Link>
        </div>
    )
}

export default MiniCard;