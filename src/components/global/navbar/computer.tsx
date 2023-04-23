
import Link from "next/link";
import SubMenu from "./subMenu";
import { ExamsSubMenuInfo, GamesSubMenuInfo, GradesBox, VideosSubMenuInfo } from "./subMenu/grades";

interface ComputerNavbarProps {
    cls ?: string
}


const ComputerNavbar : React.FC<ComputerNavbarProps> = ({cls}) => {

    const linkStyle = `group after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-1 relative text-center nozha mx-4 py-4 px-1 transition`

    return (
        <div className={`${cls} bg-gray-200 mx-40 lg:flex items-center rounded-b-lg justify-around px-32 hidden text-baby-1 text-[1.7rem]`}>
            <SubMenu 
                name="صفر تا صد" 
                mainLink="courses" 
                searchLink="/" 
                items={GradesBox}
                mainHead={"دوره های آموزشی"}
                mainImg={"./images/home/searchTypes/online-learning.png"}
                mainInfo={"بررسی کامل مطالب به همراه بازی، آزمون و کاربرگ"} 
            />
            <SubMenu 
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
                name="کاربرگ" 
                mainLink="worksheets" 
                searchLink="/" 
                items={GradesBox}
                mainHead={"مشاهده تمامی کاربرگ ها"}
                mainImg={"./images/home/searchTypes/worksheet.png"}
                mainInfo={"کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش"} 
            />
            <SubMenu 
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
            <Link href="/" className={linkStyle}> داستان </Link>
            <Link href="/blog" className={linkStyle}> بلاگ </Link>
            <Link href="/" className={linkStyle}> ارتباط با ما </Link>
        </div>
    )
}

export default ComputerNavbar;