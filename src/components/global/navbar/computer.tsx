
import Link from "next/link";

interface ComputerNavbarProps {
    cls ?: string
}


const ComputerNavbar : React.FC<ComputerNavbarProps> = ({cls}) => {

    const linkStyle = `after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-1 relative text-center nozha mx-4 py-4 px-1 transition`

    return (
        <div className={`${cls} bg-gray-200 mx-40 lg:flex items-center rounded-b-lg justify-around px-32 hidden text-baby-1 text-[1.7rem]`}>
            <div className={linkStyle}>
                صفر تا صد
                <div className="">

                </div>
            </div>
            <Link href="/" className={linkStyle}> ویدیوها </Link>
            <Link href="/" className={linkStyle}> کاربرگ </Link>
            <Link href="/" className={linkStyle}> بازی </Link>
            <Link href="/" className={linkStyle}> آزمون </Link>
            <Link href="/" className={linkStyle}> داستان </Link>
            <Link href="/blog" className={linkStyle}> بلاگ </Link>
            <Link href="/" className={linkStyle}> ارتباط با ما </Link>
        </div>
    )
}

export default ComputerNavbar;