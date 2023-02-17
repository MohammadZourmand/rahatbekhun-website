
import Link from "next/link";

const ComputerNavbar : React.FC = () => {

    const linkStyle = "after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center hover:text-baby-6 roosta mx-4 py-8 px-1 transition"

    return (
        <div className={"text-baby-1 text-lg xl:block hidden"}>
            <Link href="/" className={linkStyle}> خانه </Link>
            <Link href="/" className={linkStyle}> کلاس </Link>
            <Link href="/" className={linkStyle}> کاربرگ </Link>
            <Link href="/" className={linkStyle}> بلاگ </Link>
            <Link href="/" className={linkStyle}> ارتباط با ما </Link>
            <button className="hover:text-gray-100 transition bg-baby-2 mr-4 text-white roosta py-3 px-10 rounded-3xl"> ورود اعضا </button>
        </div>
    )
}

export default ComputerNavbar;