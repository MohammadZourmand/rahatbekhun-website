// import VideosPageMain from "./main";
// import PageHeader from "../global/elements/header/pageHeader";
import Footer from "../global/footer";
import IsMaking from "../global/elements/making";
import Navbar from "../global/navbar";

const Videos = () => {

    return (
        <>
            {/* <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[80vh]"
                title="ویدیوهای آموزشی"
                breadcrumbItems={[
                    {href : "videos", value : "ویدیوهای آموزشی"}
                ]}
                imgBgSrc={  '/images/courses/person-holding-clapperboard-front-girl-rehearsing-backstage.jpg'}
            />
            <VideosPageMain /> */}
            <Navbar isWhite={false} />
            <IsMaking />
            <Footer cls="mt-8" />
        </>
    )
}

export default Videos;