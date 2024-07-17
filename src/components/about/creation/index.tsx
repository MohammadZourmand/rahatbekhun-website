import Heading1 from "@/components/global/elements/headings/h1";
import Paragraph from "@/components/global/elements/paragraph";
import Image from "next/image";

const Creation = () => {

    return (
        <section className="grid grid-cols-12 md:gap-12 gap-y-12 lg:px-0 px-2 max-w-5xl mx-auto my-32">
            <div className="md:col-span-6 col-span-12 relative md:order-1 order-2">
                <Paragraph
                    text="داستان راحت بخون"
                    cls="md:block hidden absolute top-16 -left-32 -rotate-90 font-medium"    
                />
                <div className="relative xs:h-[550px] h-[450px]">
                    <Image 
                        src="/images/about/question-mark-icon-thinking-solution.webp" 
                        className="rounded-lg shadow-all-lg" 
                        alt="girl-choosing-right-way-to-go"
                        fill
                    />
                </div>
            </div>
            <div className="md:order-2 order-1 md:mb-0 lg:mb-12 md:col-span-6 col-span-12 self-end relative">
                <Heading1 
                    text="آیا راه آسان تری وجود ندارد ؟"
                    cls="!text-xl mb-6 md:!text-right !text-center !mt-0"
                />
                <Paragraph
                    text={`همیشه سوال بالا ذهن من را درگیر خودش کرده بود. تا وقتی که با مطالعه زیاد به این نتیجه رسیدم هرچه در قالب طنزوشوخی یا بازی باشد بچه ها آن را بهتر می فهمند! البته این موضوع قبل از من هم اثبات شده بود اما سوال این جاست آیا به آن توجه کافی هم شده بود !؟`}
                    cls="md:!text-right !text-center font-medium text-gray-500/80 text-[.84rem] !leading-loose mb-2 pl-2"
                />
            </div>
        </section>
    )
}

export default Creation;