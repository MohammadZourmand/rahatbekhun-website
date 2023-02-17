import Link from "next/link";
import MobileNavbar from "./mobileNavbar";


const Navbar = () => {
    
    return (
        <nav className="flex justify-between items-center sm:px-12 px-1 shadow-md">
            {/* website Name & logo */}
            <section>
                <div className="sm:text-3xl text-[1.8rem] py-6">
                    <span className="roosta text-baby-1"> مدرسه </span>
                    <span className="roosta text-baby-6"> آنلاین </span>
                    <span className="roosta text-baby-4"> راحت </span>
                    <span className="roosta text-baby-2"> بخون </span>
                </div>
            </section>
            {/* website menu */}
            <section>
                <div className="xl:block hidden text-baby-1 text-lg">
                    <Link href="/" className="after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center hover:text-baby-6 roosta mx-4 py-8 px-1 transition"> خانه </Link>
                    <Link href="/" className="after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center hover:text-baby-6 roosta mx-4 py-8 px-1 transition"> کلاس </Link>
                    <Link href="/" className="after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center hover:text-baby-6 roosta mx-4 py-8 px-1 transition"> کاربرگ </Link>
                    <Link href="/" className="after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center hover:text-baby-6 roosta mx-4 py-8 px-1 transition"> بلاگ </Link>
                    <Link href="/" className="after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center hover:text-baby-6 roosta mx-4 py-8 px-1 transition"> ارتباط با ما </Link>
                    <button className="hover:text-gray-100 transition bg-baby-2 mr-4 text-white roosta py-3 px-10 rounded-3xl"> ورود اعضا </button>
                </div>
                <div className="xl:hidden flex relative left-4">
                    <MobileNavbar />
                </div>
            </section>
        </nav>
    )
}

export default Navbar;