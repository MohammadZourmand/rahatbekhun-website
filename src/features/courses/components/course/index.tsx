
import Navbar from "@/components/navigation/navbar";
import FloatSidebar from "./floatSidebar";
import SingleCourseMain from "./main";
import RelatedCourses from "./main/relatedCourse";
import Footer from "@/components/navigation/footer";
import Image from "next/image";

const SingleCourse = () => {

    return (
        <div className="overflow-hidden">
            <Navbar isWhite={false} cls={"pb-4"} />
            <main className="relative grid grid-cols-12 xl:gap-x-24 lg:gap-x-8 xl:p-40 lg:px-8 lg:py-28 md:p-24 xs:px-8 px-2 py-24 bg-gray-50">
                <Image 
                    src={"/images/courses/page-title-shape-6.webp"}
                    alt="circle-pink-with-dashed-div-to-it"
                    width={59}
                    height={56}
                    className="absolute xl:top-72 top-12 right-16 rotate-90"
                />
                <Image 
                    src={"/images/courses/page-title-shape-4.webp"}
                    alt="دایره صورتی"
                    width={47}
                    height={170}
                    className="absolute xl:top-48 xl:block lg:hidden block top-48 left-0 rotate-180"
                />
                <Image 
                    src={"/images/courses/page-title-shape-1.webp"}
                    alt="دایره آبی آسمانی"
                    width={55}
                    height={191}
                    className="absolute xl:top-144 top-56 md:block hidden right-0 rotate-180"
                />
                <SingleCourseMain cls="lg:col-span-8 col-span-12"/>
                <FloatSidebar cls="lg:col-span-4 col-span-12 self-start"/>
                <RelatedCourses cls="lg:col-span-8 col-span-12" />
            </main>
            <Footer />
        </div>
    )
}

export default SingleCourse;