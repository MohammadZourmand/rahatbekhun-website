// ? components ==================
import SubMenu from "./subMenu";
import { ExamsSubMenuInfo, GamesSubMenuInfo, GradesBox, VideosSubMenuInfo } from "./subMenu/grades";

interface SubMenuProps {
    isWhite : boolean
    cls ?: string
}

const SubMenus : React.FC<SubMenuProps> = ({isWhite, cls}) => {

    return (
        <div className={`${cls} lg:flex hidden xl:space-x-reverse space-x-reverse xl:space-x-16 space-x-10 items-center justify-start xl:px-10 lg:px-6 text-baby-1 text-[1.7rem]`}>
            <SubMenu
                isWhite={isWhite}
                name="صفر تا صد" 
                mainLink="/courses" 
                searchLink="courses" 
                items={GradesBox}
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
                items={GradesBox}
                mainHead={"مشاهده تمامی کاربرگ ها"}
                mainImg={"/images/home/searchTypes/worksheet.png"}
                mainInfo={"کاربرگ های مهارت محور و خلاقانه برای تکمیل یادگیری یا سنجش"} 
            />
            <SubMenu
                isWhite={isWhite} 
                cls="-right-12" 
                name="بازی" 
                mainLink="games" 
                searchLink="games" 
                items={GamesSubMenuInfo}
                mainHead={"مشاهده تمامی بازی ها"}
                mainImg={"/images/home/searchTypes/game.png"}
                mainInfo={"یادگیری با بازی های فکری و آموزنده بدون خستگی"} 
            />
            <SubMenu
                isWhite={isWhite} 
                cls="-right-8" 
                name="آزمون" 
                mainLink="exams" 
                searchLink="exams" 
                items={ExamsSubMenuInfo}
                mainHead={"مشاهده تمامی آزمون ها"}
                mainImg={"/images/home/searchTypes/exam.png"}
                mainInfo={"آزمون های فردی، دونفره، گروهی و جشنواره ای برای تمامی پایه ها"}
                subCls="col-span-6"
            />
        </div>
    )
}

export default SubMenus;