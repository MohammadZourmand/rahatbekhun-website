import Courses from "@/features/courses/components";
import { worksheetsbreadCrumbsJson } from "@/meta/courses";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'کاربرگ های آموزشی',
    description: 'کاربرگ های درس های ریاضی و فارسی و علوم و ... پایه های اول تا ششم ابتدایی با سطح های مختلف از آسان تا سخت',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/courses'
    }
}

const CoursesPage = async () => {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(worksheetsbreadCrumbsJson) }}
            />
            <Courses />
        </>
    )
}

export default CoursesPage;