import Link from "next/link";
import Paragraph from "../elements/paragraph";
import WebsiteName from "../../elements/boxes/websiteName";
import Image from "next/image";
import { GithubIcon, TelegramIcon } from "@/assets/icons";

interface WebsiteInfoProps {
    cls ?: string
}

const WebsiteInfo = ({cls} : WebsiteInfoProps) => {

    return (
        <div className={`${cls} flex flex-col ${cls}`}>
            <WebsiteName isWhite={false} cls="justify-center lg:justify-start mt-8 lg:mt-0" textCls="lg:!flex" />
            <Paragraph cls="leading-loose font-medium mt-4 text-gray-500 lg:!text-right !text-center px-4 lg:px-0" text={" ما در راحت بخون مفتخریم که در خدمت دانش آموزان بزرگ کشور بزرگ و پرشکوه ایران هستیم. دانش آموزانی که هر کدامشان قطعه کوچک پازل بزرگ آینده درخشان کشوری پیشرفته و به دور از هر سختی و جنگی خواهند بود اگر ما راه را به آنها نشان دهیم . "} />
            <div className="flex lg:justify-start justify-center py-8">
                <Link href="#" className="group bg-baby-6 transition-all duration-500 rounded-md p-2 ml-2">
                    <Image 
                        className="group-hover:scale-110 transition"
                        src={"/images/aparat-logo.webp"}
                        width={24}
                        height={24}
                        alt="صفحه-آپارات-راحت-بخون"
                    />
                </Link>
                <Link href="#" className="group bg-baby-2 transition-all duration-500 rounded-md p-2 mx-2">
                    <TelegramIcon cls="w-6 g-6" color="white"/>
                </Link>
                <Link href="#" className="group bg-black transition-all duration-500 rounded-md p-2 mx-2">
                    <GithubIcon cls="w-6 g-6" color="white"/>
                </Link>
            </div>
        </div>
    )
}

export default WebsiteInfo;