'use client'

import Footer from "@/components/global/footer";
import PageHeader from "../global/elements/header/pageHeader";
import ArticlesPageMain from "./main";

const Articles = ({data}) => {

    return (
        <>
            <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[60vh]"
                title="نوشته های آموزشی"
                breadcrumbItems={[
                    {href : "articles", value : "وبلاگ"}
                ]}
                imgBgSrc={'/images/articles/aerial-view-man-typing-retro-typewriter.webp'}
            />
            <ArticlesPageMain data={data} />
            <Footer cls="mt-8" />
        </>
    )
}

export default Articles;