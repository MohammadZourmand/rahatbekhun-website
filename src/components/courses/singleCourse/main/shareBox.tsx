import Image from "next/image";
import Link from "next/link";

interface ShareBoxProps {
    cls ?: string
}

const ShareBox = ({cls} : ShareBoxProps) => {

    return (
        <div className={`${cls} flex gap-x-2 lg:justify-start justify-center`}>
            <Link href="#" className="relative group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <Image 
                    className="group-hover:scale-125 scale-110 h-full w-full transition"
                    src={"/images/icons/eitaa-logo.jpg"}
                    alt="کانال راحت بخون در ایتا"
                    fill
                />
            </Link>
            <Link href="#" className="relative group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <Image 
                    className="group-hover:scale-125 scale-110 h-full w-full transition"
                    src={"/images/icons/rubika-logo.png"}
                    alt="کانال راحت بخون در روبیکا"
                    fill
                />
            </Link>
            <Link href="#" className="relative group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <Image 
                    className="group-hover:scale-95 scale-[.85] h-full w-full transition"
                    src={"/images/icons/telegram-logo.png"}
                    alt="کانال راحت بخون در تلگرام"
                    fill
                />
            </Link>
            <Link href="#" className="relative group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <Image 
                    className="group-hover:scale-95 scale-[.85] h-full w-full transition"
                    src={"/images/icons/whatsapp-logo.png"}
                    alt="کانال راحت بخون در واتساپ"
                    fill
                />
            </Link>
        </div>
    )
}

export default ShareBox;