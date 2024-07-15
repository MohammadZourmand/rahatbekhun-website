import About from "@/components/about";
import { aboutBreadCrumbsJson } from "@/meta/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'درباره راحت بخون',
    description: 'چه شد که راحت بخون به وجود آمد و هدف راحت بخون چیست ؟',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/about'
    }
}

const AboutPage = () => {

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(aboutBreadCrumbsJson)
            }}
        />
        <About />
    </>
    )
}

export default AboutPage;