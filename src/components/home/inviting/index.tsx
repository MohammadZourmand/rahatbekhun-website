import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import OpaCart from "../../global/elements/cards/btnCart";

const Inviting = () => {

    return (
        <section className="relative flex flex-col lg:my-32 my-16 lg:mx-[80px] md:mx-[40px] sm:mx-[30px] xs:mx-[10px] mx-6 lg:text-5xl md:text-4xl sm:text-3xl xs:text-[2.45rem] text-[2.65rem]">
            <header className="xl:px-80">
                <Heading3 center={true} text="مهارت خاصی داری ؟" />
                <Paragraph cls="mt-8 font-medium leading-loose" center={true} text="اگر مهارت خاصی داری که فکر می کنی میتونی با اون در راحت بخون به مردم کشورت کمک کنی، راحت بخون با آغوشی باز ازت حمایت می کنه! کافیه خودت رو به ما معرفی کنی بقیه اش با راحت بخون !" />    
            </header>
            <main className="grid grid-cols-2 xl:px-56 mt-8 lg:gap-6 gap-4">
                <OpaCart
                    text="میتونم آنلاین تدریس کنم"
                    btnText="همین الان ثبت نام کن"
                    cls="sm:col-span-1 col-span-2"
                    href="/contact"
                    src="/images/home/teacher-man-with-book.jpg"
                />
                <OpaCart
                    text="میتونم محتوا تولید کنم"
                    btnText="همین الان شروع کن"
                    cls="sm:col-span-1 col-span-2"
                    href="/contact"
                    src="/images/home/woman-making-beauty-vlog-with-her-professional-camera.jpg"
                />
            </main>
        </section>
    )
} 

export default Inviting;