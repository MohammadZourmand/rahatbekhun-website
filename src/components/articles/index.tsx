import PageHeader from "@/components/global/elements/header/pageHeader";
import Footer from "@/components/global/footer";
import ArticlesPageMain from "../../components/articles/main";


const Articles = () => {

    return (
        <>
            <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[60vh]"
                title="نوشته های آموزشی"
                breadcrumbItems={[
                    {href : "articles", value : "نوشته های آموزشی"}
                ]}
                imgBgSrc={'./images/blog/blank-business-cards-cup-coffee-wooden-table-corporate-stationary-branding-mock-up.jpg'}
            />
            <ArticlesPageMain />
            <Footer cls="mt-8" />
        </>
    )
}

export default Articles;