import Header from "@/components/global/elements/header";
import TeachersSlider from "./slider";

const Teachers : React.FC = () => {

    return (
        <article className="relative bg-white pb-8 xl:px-16">
            <Header
                headingCls="xl:!mt-32 lg:!mt-24 xl:!text-5xl"
                headingText="آموزگاران راحت بخون"
                paragraphText="جدیدترین و پربازدیدترین دوره هایی که تا به این لحظه در سایت راحت بخون تولید شده اند و مورد استقبال دانش آموزان و والدین قرار گرفته اند را در اینجا مشاهده کنید و آن ها را انتخاب کنید !"     
            />
            <TeachersSlider />
        </article>
    )
}

export default Teachers;