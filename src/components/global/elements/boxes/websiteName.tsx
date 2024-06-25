// ? react ==================
import Image from "next/image";
import Link from "next/link";

interface WebsiteNameProps {
    cls ?: string
    textCls ?: string
    isWhite : boolean
}

const WebsiteName = ({
    cls,
    textCls,
    isWhite
} : WebsiteNameProps) => {
    return (
        <Link href={"/"} className={`${cls} flex items-center text-[2.5rem]`}>
            {
                isWhite
                ?   <Image width={64} height={64} src={"/images/white-webLogo.svg"} alt={"نماد راحت بخون سفید"} />
                :   <Image width={64} height={64} src={"/images/webLogo.png"} alt={"نماد راحت بخون"} />
            }
            <div className={`xl:flex lg:hidden ${textCls} flex mr-1 space-x-1 space-x-reverse`}>
                <div className={`nozha ${isWhite ? "text-white" : "text-baby-1"} z-10`}> راحت </div>
                <div className={`nozha ${isWhite ? "text-white" : "text-baby-2"} z-10`}> بخون </div>
            </div>
        </Link>
    )
}

export default WebsiteName;