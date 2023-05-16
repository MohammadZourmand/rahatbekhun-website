import Heading2 from "@/components/global/elements/headings/h2";
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import Slide from "./slide";
import { classOfferedDetails } from "../offerClasses/slider/slidersDetails";
import { classOfferedSliderType } from "@/types/home";

const Courses : React.FC = () => {

    return (
        <section className="relative flex flex-col bg-gray-200/80 py-28 lg:mt-12 xl:px-32 lg:px-12 sm:px-[30px] xs:px-8 px-2">
            <header className="grid grid-cols-12">
                <div className="lg:col-span-7 col-span-12">
                    <Heading3 cls=" lg:w-96 !leading-relaxed lg:!text-right !text-center" text="دوره ای را که می خواهید سریع پیدا کنید !" />
                    <Paragraph cls="mt-4 lg:!text-right !text-center" text={"شما تنها نیستید ! آماده ایم که به شما کمک کنیم تا شما دوره مناسب را پیدا کنید !"} />
                </div>
                <div className="lg:col-span-5 col-span-12 lg:self-end lg:justify-self-end justify-self-center lg:mt-0 mt-6 flex xl:gap-10 lg:gap-6 xs:gap-10 gap-4">
                    <div className={`font-medium`}>همه</div>
                    <div className={`font-medium`}>محبوب ترین ها</div>
                    <div className={`font-medium`}>ریاضی</div>
                    <div className={`font-medium`}>فارسی</div>
                    <div className={`font-medium`}>کاربردی</div>
                </div>
            </header>
            <main className="grid grid-cols-12 mt-10 gap-x-5 gap-y-6">
                {
                    classOfferedDetails.map((item : classOfferedSliderType, index : number) => (
                            <Slide
                                category={item.category}
                                cls={"col-span-12 sm:col-span-6 lg:col-span-4"}
                                key={index}
                                name={item.name}
                                details={item.details}
                                image={item.image}
                                sessions={item.sessions}
                                ageCategory={item.ageCategory}
                                price={item.price}
                                offPrice={item.offPrice}
                                votesAverage={item.votesAverage}
                                votes={item.votes}
                            />
                    ))
                }
            </main>
        </section>
    )
}

export default Courses;