import WhiteWave from "@/components/global/waves/whiteWave";
import Header from "@/components/global/elements/header";
import Heading2 from "@/components/global/elements/headings/h2";
import OfferSlider from "./slider";


const OfferClasses : React.FC = () => {

    return (
        <article className="relative bg-[#ed7ac741] pb-8 xl:px-16">
            <WhiteWave cls="absolute right-0 xl:-top-[128px] lg:-top-[100px] md:-top-[70px] sm:-top-[50px] xs:-top-[30px] -top-[22px] scale-y-[.6] z-[3] !rotate-180" />
            <Header
                headingCls="xl:!mt-48 lg:!mt-36"
                headingText="کلاس های پیشنهادی"
                paragraphText="جدیدترین و پربازدیدترین دوره هایی که تا به این لحظه در سایت راحت بخون تولید شده اند و مورد استقبال دانش آموزان و والدین قرار گرفته اند را در اینجا مشاهده کنید و آن ها را انتخاب کنید !"     
            />
            <OfferSlider />
        </article>
    )
}

export default OfferClasses;