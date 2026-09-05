
import Heading6 from "@/components/elements/headings/h6";
import ShareBox from "../main/shareBox";
import CourseInfoSidebar from "./courseInfo";
import CoursePriceSidebar from "./coursePrice";
import CourseDemoSidebar from "./courseDemo";
import PrerequisiteCourses from "./coursesPrerequisite";
import Image from "next/image";

interface FloatSidebarProps {
    cls ?: string
}

const FloatSidebar = ({cls} : FloatSidebarProps) => {
    
    return (
        <aside className={`${cls} relative flex flex-col gap-y-8 lg:mt-0 mt-12 lg:mx-0 mx-2`}>
            <Image 
                src={"/images/courses/course-dot.webp"}
                alt="نقطه چین مستطیلی شکل"
                width={70}
                height={110}
                className="absolute top-36 -left-8"
            />
            <div className="z-10 p-6 bg-white rounded-lg shadow-all-lg shadow-gray-200">
                <CourseDemoSidebar />
                <CoursePriceSidebar />
                <CourseInfoSidebar />
            </div>
            <div className="flex flex-col gap-y-6 py-8 px-6 bg-white rounded-lg shadow-all-lg shadow-gray-200">
                <Heading6 cls="text-gray-800 !text-base" text="دوره های پیش نیاز" />
                <PrerequisiteCourses />
            </div>
            <div className="flex flex-col items-center mt-2 py-8 px-6 bg-white rounded-lg shadow-all-lg shadow-gray-200">
                <span className="font-bold text-lg mb-4 block"> دوره را به اشتراک بگذارید : </span>
                <ShareBox />
            </div>
        </aside>
    )
}

export default FloatSidebar;