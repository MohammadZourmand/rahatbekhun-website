import { Card2TypeProps } from "@/types/home";
import Paragraph from "../../paragraph";
import Heading6 from "../../headings/h6";
import Image from "next/image";

interface MiniCardProps {
    item : Card2TypeProps
}

const MiniCard = ({item} : MiniCardProps) => {

    return (
        <div className="grid grid-cols-7 gap-x-2">
            <div className="relative lg:w-full lg:h-24 md:h-36 xs:h-32 h-24 rounded-md overflow-hidden col-span-2">
                <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    fill
                />
            </div>
            <div className="col-span-5 mr-4 py-1">
                <Paragraph text={item.date} cls="text-gray-400 text-sm" />
                <Heading6 text={item.head} cls="!text-base mt-2 !tracking-tight" />
            </div>
        </div>
    )
}

export default MiniCard;