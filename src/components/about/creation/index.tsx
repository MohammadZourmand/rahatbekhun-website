import Heading1 from "@/components/global/elements/headings/h1";
import Paragraph from "@/components/global/elements/paragraph";

const Creation = () => {

    return (
        <section className="grid grid-cols-12 gap-12 max-w-5xl mx-auto my-32">
            <div className="col-span-6 relative">
                <Paragraph
                    text="داستان راحت بخون"
                    cls="absolute top-16 -left-32 -rotate-90 font-medium"    
                />
                <img src="/images/about/question-mark-icon-thinking-solution.jpg" className="rounded-lg shadow-all-lg" alt="girl-choosing-right-way-to-go" />
            </div>
            <div className="mb-12 col-span-6 self-end relative">
                <Heading1 
                    text="آیا راه آسان تری وجود ندارد ؟"
                    cls="!text-xl mb-6"
                />
                <Paragraph
                    text={`همیشه سوال بالا ذهن من را درگیر خودش کرده بود. تا وقتی که با مطالعه زیاد به این نتیجه رسیدم هرچه در قالب طنزوشوخی یا بازی باشد بچه ها آن را بهتر می فهمند! البته این موضوع قبل از من هم اثبات شده بود اما سوال این جاست آیا به آن توجه کافی هم شده بود !؟`}
                    cls="font-medium text-gray-500/80 text-[.84rem] !leading-loose mb-2 pl-2"
                />
            </div>
        </section>
    )
}

export default Creation;