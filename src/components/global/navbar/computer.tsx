
import { CartBrokenIcon, SearchBrokenIcon, UserBrokenIcon } from "@/assets/icons";
import Link from "next/link";

interface ComputerNavbarProps {
    isFixed : boolean
}

// ? ====> isFixed only in homePage isn't true !!!!

const ComputerNavbar : React.FC<ComputerNavbarProps> = ({isFixed}) => {

    const linkStyle = `after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center ${isFixed && "transition-all duration-500 hover:text-baby-6 py-2"} nozha mx-4 py-4 px-1 transition`

    return (
        <div className={`${isFixed && "!text-white"} text-baby-1 text-3xl xl:flex items-center`}>
            <Link href="/" className={linkStyle}> خانه </Link>
            <Link href="/" className={linkStyle}> کلاس </Link>
            <Link href="/" className={linkStyle}> کاربرگ </Link>
            <Link href="/blog" className={linkStyle}> بلاگ </Link>
            <Link href="/" className={linkStyle}> ارتباط با ما </Link>
            <Link href={"/profile"} className={`${linkStyle} group flex items-center justify-center border border-baby-6 bg-baby-6 rounded-full w-12 h-12 after:hidden`}>
                <UserBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
            </Link>
            <Link href={"/profile"} className={`${linkStyle} group -mx-2 flex items-center justify-center border border-baby-6 bg-baby-6 rounded-full w-12 h-12 after:hidden`}>
                <CartBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
            </Link>
            <Link href={"/profile"} className={`${linkStyle} group flex items-center justify-center border border-baby-6 bg-baby-6 rounded-full w-12 h-12 after:hidden`}>
                <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
            </Link>
        </div>
    )
}

export default ComputerNavbar;