import { cardsInfo } from "@/components/blog/bestArticles/data";
import Card2 from "@/components/global/elements/cards/card2";
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";


const OfferedArticles : React.FC = () => {

    return (
        <section className="relative flex flex-col sm:py-28 py-16 lg:mt-12 xl:px-32 lg:px-12 sm:px-[30px] xs:px-8 px-2">
            <header>
                <Heading3 text="با خوندن علم خودتون رو به روز نگهدارین" center={true} />
                <Paragraph cls="mt-6" center={true} text="اینجا مقاله ها و نوشته هایی هست که باعث میشه همیشه اطلاعاتت از همه چی کافی باشه ! چه دانش آموز باشی چه آموزگار! " />
            </header>
            <main className="grid grid-cols-12 lg:gap-8 md:gap-4 gap-y-8 mt-12">
                {
                    cardsInfo.map((item, index) => (
                        <Card2
                            key={index}
                            cls="lg:col-span-4 md:col-span-6 col-span-12"
                            item={item}
                        />
                    ))
                }
            </main>
        </section>
    )
}

export default OfferedArticles;