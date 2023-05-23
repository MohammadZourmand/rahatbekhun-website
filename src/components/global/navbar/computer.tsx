// ? react =======================
import Link from "next/link";

// ? components ==================
import SubMenu from "./subMenu";
import { ExamsSubMenuInfo, GamesSubMenuInfo, GradesBox, VideosSubMenuInfo } from "./subMenu/grades";
import WebsiteName from "../elements/boxes/websiteName";

// ? libraries ===================
import PN from "persian-number";

// ? assets ======================
import { AlarmBrokenIcon, CartBrokenIcon, CategoryBroken, SearchBrokenIcon, UserBrokenIcon } from "@/assets/icons";


interface ComputerNavbarProps {
    cls ?: string
    setIsFocusOnSearch : React.Dispatch<React.SetStateAction<boolean>>
    isWhite ?: boolean
}


const ComputerNavbar : React.FC<ComputerNavbarProps> = ({cls, setIsFocusOnSearch, isWhite}) => {

    const linkStyle = `group flex items-center justify-center bg-baby-1 rounded-full sm:w-12 sm:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition`

    return (
        <div className={`${cls} flex justify-between items-center rounded-lg`}>
            <div className="flex items-center">
                <WebsiteName cls="justify-center ml-8" />
                <div className={`${cls} lg:flex hidden xl:space-x-reverse space-x-reverse xl:space-x-16 space-x-10 items-center justify-start xl:px-10 lg:px-6 text-baby-1 text-[1.7rem]`}>
                    <SubMenu
                        isWhite={isWhite} 
                        name="صفر تا صد" 
                        mainLink="courses" 
                        searchLink="/" 
                        items={GradesBox}
                        mainHead={"دوره های آموزشی"}
                        mainImg={"./images/home/searchTypes/online-learning.png"}
                        mainInfo={"بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ"} 
                    />
                    <SubMenu
                        isWhite={isWhite} 
                        name="ویدیوها" 
                        mainLink="videos" 
                        searchLink="/" 
                        items={VideosSubMenuInfo}
                        mainHead={"مشاهده تمامی ویدیوها"}
                        mainImg={"./images/home/searchTypes/video.png"}
                        mainInfo={"آموزش های آسان برای آموزگاران و دانش آموزان"}
                        subCls="!col-span-6"
                    />
                    <SubMenu
                        isWhite={isWhite} 
                        name="کاربرگ" 
                        mainLink="worksheets" 
                        searchLink="/" 
                        items={GradesBox}
                        mainHead={"مشاهده تمامی کاربرگ ها"}
                        mainImg={"./images/home/searchTypes/worksheet.png"}
                        mainInfo={"کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش"} 
                    />
                    <SubMenu
                        isWhite={isWhite} 
                        cls="-right-12" 
                        name="بازی" 
                        mainLink="games" 
                        searchLink="/" 
                        items={GamesSubMenuInfo}
                        mainHead={"مشاهده تمامی بازی ها"}
                        mainImg={"./images/home/searchTypes/game.png"}
                        mainInfo={"یادگیری با بازی های فکری و آموزنده بدون خستگی"} 
                    />
                    <SubMenu
                        isWhite={isWhite} 
                        cls="-right-8" 
                        name="آزمون" 
                        mainLink="exams" 
                        searchLink="/" 
                        items={ExamsSubMenuInfo}
                        mainHead={"مشاهده تمامی آزمون ها"}
                        mainImg={"./images/home/searchTypes/exam.png"}
                        mainInfo={"آزمون های فردی، دونفره، گروهی و جشنواره ای برای تمامی پایه ها"}
                        subCls="col-span-6"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-reverse space-x-3 xl:px-10 lg:px-6">
                <div onClick={() => setIsFocusOnSearch(true)} className={`${linkStyle}`}>
                    <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                </div>
                <Link href={"/profile"} className={`${linkStyle} md:flex hidden`}>
                    <CartBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                </Link>
                <Link href={"/profile"} className={`${linkStyle} md:flex hidden`}>
                    <AlarmBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                    <span className={`absolute -bottom-1 -right-1 bg-baby-4 px-2 rounded-full`}> {PN.convertEnToPe(1)} </span>
                </Link>
                <Link href={"/profile"} className={`${linkStyle} md:flex hidden`}>
                    <UserBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                </Link>
                <Link href={"/profile"} className={`${linkStyle} lg:hidden`}>
                    <CategoryBroken cls={"group-hover:scale-[1.2] transition-all duration-500"} color="white" />
                </Link>
            </div>
        </div>
    )
}

export default ComputerNavbar;