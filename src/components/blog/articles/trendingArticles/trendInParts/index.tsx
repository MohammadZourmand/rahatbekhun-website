import SectionHeader from "@/components/global/elements/header/sectionHeader";
import { PartsInfoProps } from "./partsInfo";
import SingleCart from "@/components/global/elements/boxes/singleCart";

interface TrendInPartsProps {
    item : PartsInfoProps
}

const TrendInParts : React.FC<TrendInPartsProps> = ({item}) => {

    return (
        <section className="mx-16">
            <SectionHeader
                cls="mx-8"
                rightAlignment={true}
                smallText={` بهترین مقالات در بخش ${item.smallText}`}
                largeText={item.largeText}
                icon1={item.icon1}
                icon2={item.icon2}
            />
            <main className="grid grid-cols-12 gap-5 mt-4 !h-8">
                {
                    item.items.map((article : any, index : number) => {
                        
                        return (
                            <SingleCart
                                key={index}
                                head={article.head}
                                para={article.para}
                                date={article.date}
                                imgAlt={article.imgAlt}
                                imgSrc={article.imgSrc}
                                author={article.author}
                                comments={article.comments}
                            />
                        )
                    })
                }
            </main>
        </section>
    )
}

export default TrendInParts;