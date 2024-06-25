import { cardsInfo } from "@/components/blog/bestArticles/data";
import Card2 from "@/components/global/elements/cards/card2";

interface MatchedArticles {
    cls ?: string
}

const MatchedArticles = ({cls} : MatchedArticles) => {

    return (
        <main className="lg:col-span-8 col-span-12 lg:p-0 sm:py-12 md:px-12 sm:px-28 xs:p-4">
            <div className="grid grid-cols-12 md:gap-6 gap-y-6">
                {
                    cardsInfo.map((item, index) => {
                        return (
                            <Card2
                                key={index}
                                cls="md:col-span-6 col-span-12"
                                item={item} 
                            />
                        )
                    })
                }
                {
                    cardsInfo.map((item, index) => {
                        return (
                            <Card2
                                key={index}
                                cls="md:col-span-6 col-span-12"
                                item={item} 
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default MatchedArticles;