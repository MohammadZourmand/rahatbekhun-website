import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Heading1 from "@/components/global/elements/headings/h1";
import Header from "./head";
import Breadcrumb from "@/components/global/elements/boxes/breadcrumb";
import BgColorfulBadge from "@/components/global/elements/boxes/badges/bgColorful";
import TabSwitcher from "@/components/global/elements/boxes/tabSwitcher";
import Image from "next/image";

interface SingleCourseMainProps {
    cls ?: string
}

const SingleCourseMain = ({cls} : SingleCourseMainProps) => {

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
            <div className="relative sm:h-96 xs:h-72 h-56 mt-12 rounded-md overflow-hidden">
                <Image
                    src="/images/courses/boy-answering-questions-fast.jpg"
                    alt="math-tricks-answer-questions-fast"
                    fill
                />
            </div>
            <TabSwitcher />
        </main>
    )
}

export default SingleCourseMain;