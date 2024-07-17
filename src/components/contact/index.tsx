import PageHeader from "../global/elements/header/pageHeader";
import Footer from "../global/footer";
import ContactMain from "./main";


const Contact = () => {

    return (
        <>
            <PageHeader
                imgBgCls="sm:scale-100 md:h-auto h-full"
                cls="xl:h-[80vh]" 
                title={"ارتباط با ما"}
                breadcrumbItems={[
                    {href : "/contact", value : "ارتباط با ما"}
                ]} 
                imgBgSrc={"/images/contact/smiling-little-boy-making-selfie-thinking-about-something.webp"}                
            />
            <ContactMain />
            <Footer />
        </>
    )
}

export default Contact;