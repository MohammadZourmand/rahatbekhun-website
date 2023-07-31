import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Breadcrumb from "@/components/global/elements/cards/breadcrumb";
import BgColorfulBadge from "@/components/global/elements/cards/badges/bgColorful";
import Heading1 from "@/components/global/elements/headings/h1";
import Header from "./head";
import TabSwitcher from "@/components/global/elements/cards/tabSwitcher";

interface SingleCourseMainProps {
    cls ?: string
}

const SingleCourseMain : React.FC<SingleCourseMainProps> = ({cls}) => {

    const query = useSelector((state : RootState) => state.singleArticleSlice)

    return (
        <main className={`${cls} relative`}>
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
            <Heading1 text="دوره آموزش محاسبات سریع" cls="!mt-6 sm:px-0 px-2" center={false}/>
            <Header />
            <img className="mt-12" src="/images/courses/boy-answering-questions-fast.jpg" alt="math-tricks-answer-questions-fast" />
            <TabSwitcher />
        </main>
    )
}

export default SingleCourseMain;