import { IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";
import Link from "next/link";

interface ShareBoxProps {
    cls ?: string
}

const ShareBox : React.FC<ShareBoxProps> = ({cls}) => {

    return (
        <div className={`${cls} flex gap-x-2 lg:justify-start justify-center`}>
            <Link href="#" className="group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <img className="group-hover:scale-125 scale-110 h-full w-full transition" src="/images/whiteIcons/eitaa-logo.jpg" alt="" />
            </Link>
            <Link href="#" className="group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <img className="group-hover:scale-125 scale-110 h-full w-full transition" src="/images/whiteIcons/rubika-logo.png" alt="" />
            </Link>
            <Link href="#" className="group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <img className="group-hover:scale-95 scale-[.85] h-full w-full transition" src="/images/whiteIcons/telegram-logo.png" alt="" />
            </Link>
            <Link href="#" className="group overflow-hidden w-10 h-10 transition-all duration-500 rounded-md">
                <img className="group-hover:scale-95 scale-[.85] h-full w-full transition" src="/images/whiteIcons/whatsapp-logo.png" alt="" />
            </Link>
        </div>
    )
}

export default ShareBox;