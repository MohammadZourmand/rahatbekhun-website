import { cardsInfo } from "@/components/blog/bestArticles/data";
import Card2 from "@/components/global/elements/cards/card2";
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";

const RelatedArticles = ({
    cls
}) => {

    return (
        <div className={`${cls} flex flex-col sm:gap-10 mt-12`}>
            <header>
                <Heading3 cls="" text="مقاله های مشابه" />
                <Paragraph cls="font-medium mt-5" text="مقاله هایی مشابه به آنچه در بالا دیده اید را در اینجا پیدا کنید : " />          
            </header>
            <main className="grid grid-cols-12 mt-4 xs:gap-4 gap-y-4">
            {
                cardsInfo.map((item, index) => {
                    return (
                        <div className="sm:col-span-6 col-span-12" key={index}>
                            {
                                index < 2 && (
                                    <Card2 item={item} />
                                ) 
                            }
                        </div>
                    )
                })
            }
            </main>
        </div>
    )
}

export default RelatedArticles;