import { PartsInfo, PartsInfoProps } from "./trendInParts/partsInfo";
import TrendInParts from "./trendInParts";

interface TrendingArticlesProps {}

const TrendingArticles : React.FC<TrendingArticlesProps> = () => {

    return (
        <article className="relative flex flex-col">
            {
                PartsInfo.map((item : PartsInfoProps) => (
                    <TrendInParts item={item} />
                ))
            }
        </article>
    )
}

export default TrendingArticles;