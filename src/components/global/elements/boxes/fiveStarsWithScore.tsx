import { Star } from "@/assets/icons";
import FaSpan from "./card/faSpan";


interface FiveStarsWithScoreProps {
    votesNumber : number
}

const FiveStarsWithScore : React.FC<FiveStarsWithScoreProps> = ({
    votesNumber
}) => {

    return (
        <div className="flex items-center">
            {/* <FaSpan cls="mx-1" value={votesAverage} /> */}
            <Star cls="w-4 h-4" color="#FF9747" />
            <Star cls="w-4 h-4" color="#FF9747" />
            <Star cls="w-4 h-4" color="#FF9747" />
            <Star cls="w-4 h-4" color="#FF9747" />
            <Star cls="w-4 h-4" color="#FF9747" />
            <FaSpan cls="text-gray-500 font-medium mr-2 mt-1" value={`(${votesNumber} نظر)`} />
        </div>
    )
}

export default FiveStarsWithScore;