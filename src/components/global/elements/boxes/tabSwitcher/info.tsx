import Heading6 from "../../headings/h6";
import Paragraph from "../../paragraph";

interface CourseInfoProps {
    description : string
}

const CourseInfo = ({description} : CourseInfoProps) => {

    return (
        <div className="">
            <Heading6 text={"نگاهی کلی به دوره"} />
            <Paragraph cls="pr-2 mt-8 text-gray-600 font-medium leading-[2.5]" text={description} />
        </div>
    )
}

export default CourseInfo;