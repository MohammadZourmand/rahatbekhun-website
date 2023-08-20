// ? components ==================
import Link from "next/link";
import SubMenu from "./subMenu";
import { gradesBox, VideosSubMenuInfo } from "./subMenu/grades";

interface SubMenuProps {
    isWhite : boolean
    cls ?: string
}

const SubMenus : React.FC<SubMenuProps> = ({isWhite, cls}) => {

    const linkStyle = `${isWhite ? "after:border-b-white" : "after:border-b-baby-1"} z-40 group py-5 px-1 after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] relative text-center nozha transition`

    return (
        <div className={`${cls} lg:flex hidden xl:space-x-reverse space-x-reverse xl:space-x-16 space-x-10 items-center justify-start xl:px-10 lg:px-6 text-baby-1 text-[1.7rem]`}>
            <SubMenu
                isWhite={isWhite}
                name="صفر تا صد" 
                mainLink="/courses" 
                searchLink="courses" 
                items={gradesBox}
                mainHead={"دوره های آموزشی"}
                mainImg={"/images/home/searchTypes/online-learning.png"}
                mainInfo={"بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ"} 
            />
            <SubMenu
                isWhite={isWhite} 
                name="ویدیوها" 
                mainLink="videos" 
                searchLink="videos" 
                items={VideosSubMenuInfo}
                mainHead={"مشاهده تمامی ویدیوها"}
                mainImg={"/images/home/searchTypes/video.png"}
                mainInfo={"آموزش های آسان برای آموزگاران و دانش آموزان"}
                subCls="!col-span-6"
            />
            <SubMenu
                isWhite={isWhite} 
                name="کاربرگ" 
                mainLink="worksheets" 
                searchLink="worksheets" 
                items={gradesBox}
                mainHead={"مشاهده تمامی کاربرگ ها"}
                mainImg={"/images/home/searchTypes/worksheet.png"}
                mainInfo={"کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش"} 
            />
            <Link href={"/blog"} className={linkStyle}>
                <div className={`${isWhite && "text-white"} nozha`}>وبلاگ</div>
            </Link>
            <Link href={"/about"} className={linkStyle}>
                <div className={`${isWhite && "text-white"} nozha`}>درباره ما</div>
            </Link>     
        </div>
    )
}

export default SubMenus;