import { IconArticle, IconFile, IconFile3d, IconHome, IconPhone, IconSchool } from "@tabler/icons-react";

import Link from "next/link";


const Links : React.FC = () => {

    const iconStyle = "relative bottom-[2px] w-10 h-10 p-2 my-4 ml-2 bg-slate-200 rounded-full"
    const linkStyle = "flex items-center font-semibold text-lg"

    return (
        <div className="my-4">
            <Link href="/" className={linkStyle}>
                <>
                    <IconHome color="#2c3e50" className={iconStyle} />
                    <span> خانه </span>
                </> 
            </Link>
            <Link href="/" className={linkStyle}>
                <>
                    <IconSchool color="#2c3e50" className={iconStyle} />
                    <span> دوره های آموزشی </span>
                </>
            </Link>
            <Link href="/" className={linkStyle}>
                <>
                    <IconFile3d color="#2c3e50" className={iconStyle} />
                    <span> کاربرگ ها </span>
                </>
            </Link>
            <Link href="/" className={linkStyle}>
                <>
                
                    <IconArticle color="#2c3e50" className={iconStyle} />
                    <span> وبلاگ </span>
                </>
            </Link>
            <Link href="/" className={linkStyle}>
                <>
                    <IconPhone color="#2c3e50" className={iconStyle} />
                    <span> ارتباط با ما </span>
                </>
            </Link>
        </div>
    )
}

export default Links;