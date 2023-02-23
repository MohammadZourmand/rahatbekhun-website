import PinkBtn from "@/components/global/elements/buttons/pink";
import Header from "@/components/global/elements/header";
import EventTimer from "./timer";


const BigEvent : React.FC = () => {

    return (
        <section className="flex items-center justify-center relative h-[100vh] bg-[url('/images/home/big-discount-champions-learning-event.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="p-16 max-w-3xl bg-white rounded-[4rem]">
                <Header
                    headingText="مسابقه نقاشی برتر"
                    paragraphText=" مسابقه! مسابقه! به مناسبت روز دانش آموز از تمامی راحت بخونی ها دعوت می کنیم تا در مسابقه برترین نقاشی شرکت کنند و نقاشی های خودشون رو برای ما ارسال کنند! برای اطلاعات بیشتر روی لینک زیر کلیک کنید"
                    paragraphCls="!px-0 text-lg"
                    headingCls="!mt-0"
                    cls="!mx-0"
                />
                <PinkBtn text={"شرکت در مسابقه"} cls="!mx-auto !my-4" />
                <EventTimer />
            </div>
        </section>
    )
}

export default BigEvent;