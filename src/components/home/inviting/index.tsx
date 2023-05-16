import WhiteBtn from "@/components/global/elements/buttons/white";
import Heading3 from "@/components/global/elements/headings/h3";
import Heading5 from "@/components/global/elements/headings/h5";
import Paragraph from "@/components/global/elements/paragraph";
import OpaCart from "./opaCart";


const Inviting : React.FC = () => {

    return (
        <section className="relative flex flex-col lg:my-32 my-16 lg:mx-[80px] md:mx-[40px] sm:mx-[30px] xs:mx-[10px] mx-6 lg:text-5xl md:text-4xl sm:text-3xl xs:text-[2.45rem] text-[2.65rem]">
            <header className="xl:px-80">
                <Heading3 center={true} text="مهارت خاصی دارید ؟" />
                <Paragraph cls="mt-8 font-medium leading-loose" center={true} text="اگر مهارت خاصی دارید که فکر می کنید می توانید با آن در راحت بخون به مردم کشورتان کمک کنید، راحت بخون با آغوشی باز از شما حمایت می کند! کافیست خودتان را به ما معرفی کنید بقیه اش با راحت بخون !" />    
            </header>
            <main className="grid grid-cols-2 xl:px-56 mt-8 lg:gap-6 gap-4">
                <OpaCart
                    text="می توانم آنلاین تدریس کنم"
                    btnText="همین الان ثبت نام کن"
                    cls="sm:col-span-1 col-span-2"
                    href="/"
                    src="./images/home/teacher-man-with-book.jpg"
                />
                <OpaCart
                    text="می توانم محتوا تولید کنم"
                    btnText="همین الان شروع کن"
                    cls="sm:col-span-1 col-span-2"
                    href="/"
                    src="./images/home/woman-making-beauty-vlog-with-her-professional-camera.jpg"
                />
            </main>
        </section>
    )
} 

export default Inviting;