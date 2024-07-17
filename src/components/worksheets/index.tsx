import PageHeader from "../global/elements/header/pageHeader";
import WorksheetsMain from "./main";
import Footer from "../global/footer";


const Worksheets = () => {

    return (
        <>  
            <PageHeader
                cls="xl:h-[80vh]"
                imgBgCls="md:h-auto h-full scale-x-[-1] xl:-top-36"
                title={"لیست کاربرگ ها"} 
                breadcrumbItems={[
                    {href : "worksheets", value : "کاربرگ ها"}
                ]} 
                imgBgSrc={"/images/worksheets/girl-s-hand-writing-her-notebook.webp"}
            />
            <WorksheetsMain />
            <Footer cls="bg-gray-200 shadow-all-md"/>
        </>
    )
}

export default Worksheets;