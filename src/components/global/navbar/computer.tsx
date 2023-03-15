
import Link from "next/link";

interface ComputerNavbarProps {
    isFixed : boolean
}

// ? ====> isFixed only in homePage isn't true !!!!

const ComputerNavbar : React.FC<ComputerNavbarProps> = ({isFixed}) => {

    const linkStyle = `after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 ${isFixed && "after:border-b-slate-900"} relative text-center ${!isFixed && "hover:text-baby-6 py-2"} roosta mx-4 py-8 px-1 transition`

    return (
        <div className={`${isFixed && "!text-slate-900"} text-baby-1 text-lg xl:block hidden`}>
            <Link href="/" className={linkStyle}> خانه </Link>
            <Link href="/" className={linkStyle}> کلاس </Link>
            <Link href="/" className={linkStyle}> کاربرگ </Link>
            <Link href="/blog" className={linkStyle}> بلاگ </Link>
            <Link href="/" className={linkStyle}> ارتباط با ما </Link>
            <button className={`${isFixed && "relative !py-6 !rounded-none !mr-6 after:absolute after:top-0 after:-right-2 after:w-8 after:h-full after:bg-baby-2 after:-skew-x-12 "}hover:text-gray-50 transition bg-baby-2 mr-4 text-white roosta py-3 px-10 rounded-3xl`}> ورود اعضا </button>
        </div>
    )
}

export default ComputerNavbar;