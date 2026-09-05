import Instructor from "@/features/instructor";
import { instructorBreadCrumbsJson, personJson } from "@/meta/instructor";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: 'سازندگان راحت بخون',
    description: 'استفاده از تخفیف ها و دوره ها و کاربرگ های بیشتر با عضویت در وبسایت راحت بخون',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/instructor'
    }
}

const InstructorPage : NextPage = () => {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(instructorBreadCrumbsJson)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJson)
                }}
            />
            <Instructor />
        </>
    )
}

export default InstructorPage;