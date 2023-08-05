import PageHeader from "../global/elements/header/pageHeader";
import Footer from "../global/footer";
import Contact from "./contact";
import Creation from "./creation";
import Goal from "./goal";
import Team from "./team";
import Works from "./works";

const About = () => {

    return (
        <>
            <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[75vh]" 
                title={"درباره ما"}
                breadcrumbItems={[
                    {href : "/about", value : "درباره ما"}
                ]} 
                imgBgSrc={"/images/about/group-children-doing-hand-shake.jpg"}                
            />
            <Creation />
            <Goal />
            <Works />
            <Contact />
            <Team />
            <Footer />
        </>
    )
}

export default About;