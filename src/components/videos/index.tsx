import VideosPageMain from "./main";
import PageHeader from "../global/elements/header/pageHeader";
import Footer from "../global/footer";

interface VideosProps {

}

const Videos : React.FC<VideosProps> = () => {

    return (
        <div>
            <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[80vh]"
                title="ویدیوهای آموزشی"
                breadcrumbItems={[
                    {href : "videos", value : "ویدیوهای آموزشی"}
                ]}
                imgBgSrc={  '/images/courses/person-holding-clapperboard-front-girl-rehearsing-backstage.jpg'}
            />
            <VideosPageMain />
            <Footer cls="mt-8" />
        </div>
    )
}

export default Videos;