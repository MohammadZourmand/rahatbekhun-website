import { CartsInfo } from "@/components/blog/bestArticles/data";
import Cart2 from "@/components/global/elements/cards/card2";

interface MatchedArticles {
    cls ?: string
}

const MatchedArticles : React.FC<MatchedArticles> = () => {

    return (
        <main className="col-span-8">
            <div className="grid grid-cols-12 md:gap-6 gap-y-6">
                {
                    CartsInfo.map((item, index) => {
                        return (
                            <Cart2
                                key={index}
                                cls="md:col-span-6 col-span-12"
                                item={item} 
                            />
                        )
                    })
                }
                {
                    CartsInfo.map((item, index) => {
                        return (
                            <Cart2
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