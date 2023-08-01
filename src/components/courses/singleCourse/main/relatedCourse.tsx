import { coursesData } from "@/components/data/coursesData";
import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import Cart from "@/components/global/elements/cards/card";
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import { courseInfoType } from "@/types/home";


interface RelatedCoursesProps {
    cls ?: string
}

const RelatedCourses : React.FC<RelatedCoursesProps> = ({
    cls
}) => {



    return (
        <div className={`${cls} flex flex-col sm:gap-10 mt-12`}>
            <header>
                <Heading3 cls="" text="دوره های مشابه" />
                <Paragraph cls="font-medium mt-5" text="دوره هایی مشابه به آنچه در بالا دیده اید را در اینجا پیدا کنید : " />          
            </header>
            <main className="grid grid-cols-12 mt-4 xs:gap-4 gap-y-4">
            {
                coursesData.map((course : courseInfoType, index) => {
                    return (
                        <div className="sm:col-span-6 col-span-12" key={index}>
                            {
                                course.category === courseDetails.category && course.name !== courseDetails.name && (
                                    <Cart item={course} />
                                ) 
                            }
                        </div>
                    )
                })
            }
            </main>
        </div>
    )
}

export default RelatedCourses;