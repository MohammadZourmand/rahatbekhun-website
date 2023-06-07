import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Breadcrumb from "@/components/global/elements/boxes/breadcrumb";
import BgColorfulBadge from "@/components/global/elements/boxes/badges/bgColorful";
import Heading1 from "@/components/global/elements/headings/h1";
import Header from "./head";
import TabSwitcher from "@/components/global/elements/boxes/tabSwitcher";
import ShareBox from "./shareBox";
import FaSpan from "@/components/global/elements/boxes/cart/faSpan";
import RelatedCourses from "./relatedCourse";

interface SingleCourseMainProps {
    cls ?: string
}

const SingleCourseMain : React.FC<SingleCourseMainProps> = ({cls}) => {

    const query = useSelector((state : RootState) => state.singleArticleSlice)

    return (
        <main className={`${cls} relative p-2`}>
            <div className="bg-pink-300 absolute top-32 -right-28 w-[3.5rem] h-[3.5rem] rounded-full"></div>
            <div
                style={{
                    backgroundColor : "transparent",
                    backgroundImage : `url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%239ca3af' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
                className="rotate-45 absolute top-[9.2rem] -right-[5.4rem] w-[2.5rem] h-[3.4rem]"            
            ></div>
            <Breadcrumb 
                items={[
                    {href : "courses", value : "دوره های آموزشی"},
                    {href : query.category , value : "دسته بندی دوره"},
                    {href : query.course , value : "نام دوره آموزشی"},
                ]}
                isWhite={false}
                size={"sm"}
            />
            <BgColorfulBadge text={"ریاضی"} cls="mt-8"/>
            <Heading1 text="دوره آموزش محاسبات سریع" cls="!mt-6" center={false}/>
            <Header />
            <img className="mt-12" src="/images/courses/boy-answering-questions-fast.jpg" alt="math-tricks-answer-questions-fast" />
            <TabSwitcher />
            {/* <div className="mt-16">
                <span className="font-bold text-lg mb-4 block"> دوره را به اشتراک بگذارید : </span>
                <ShareBox />
            </div> */}
            <RelatedCourses />
        </main>
    )
}

export default SingleCourseMain;