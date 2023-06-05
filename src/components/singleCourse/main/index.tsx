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
        <main className={`${cls}`}>
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