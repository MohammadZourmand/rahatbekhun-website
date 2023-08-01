import { Card2TypeProps } from "@/types/home";
import { FC } from "react";
import Paragraph from "../../paragraph";
import Heading6 from "../../headings/h6";

interface MiniCardProps {
    item : Card2TypeProps
}

const MiniCard : FC<MiniCardProps> = ({item}) => {

    return (
        <div className="grid grid-cols-7 gap-x-2">
            <img className="col-span-2 h-full rounded-md" src={item.imgSrc} alt={item.imgAlt} />
            <div className="col-span-5 mr-4 py-1">
                <Paragraph text={item.date} cls="text-gray-400 text-sm" />
                <Heading6 text={item.head} cls="!text-base mt-2 !tracking-tight" />
            </div>
        </div>
    )
}

export default MiniCard;