import Contact from "@/components/contact";
import { contactBreadCrumbsJson } from "@/meta/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'ارتباط راحت بخون',
    description: 'آموزگاران و دانشجویان برای همکاری و ساخت یا نشر محتوا در راحت بخون تماس بگیرند !',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/contact'
    }
}


const ContactPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactBreadCrumbsJson)
                }}
            />
            <Contact />
        </>
    )
}

export default ContactPage;