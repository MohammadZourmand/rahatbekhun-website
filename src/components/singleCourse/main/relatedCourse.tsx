import { coursesData } from "@/components/data/coursesData";
import Cart from "@/components/global/elements/boxes/cart";
import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import { CartType } from "@/types/home";


interface RelatedCoursesProps {
    cls ?: string
}

const RelatedCourses : React.FC<RelatedCoursesProps> = ({
    cls
}) => {



    return (
        <div className={`${cls} grid grid-cols-12 gap-10 mt-12`}>
            <header className="col-span-12">
                <Heading3 cls="" text="دوره های مشابه" />
                <Paragraph cls="font-medium mt-5" text="دوره هایی مشابه به آنچه در بالا دیده اید را در اینجا پیدا کنید : " />          
            </header>
            {
                coursesData.map((course : CartType, index) => {
                    return (
                        <>
                            {
                                course.category === courseDetails.category && course.name !== courseDetails.name && (
                                    <Cart cls="col-span-6" key={index} item={course} />
                                ) 
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default RelatedCourses;