import { Star } from "@/assets/icons";

interface FiveStarsProps {
    cls ?: string
}

const FiveStars = ({cls} : FiveStarsProps) => {

    return (
        <div className={`flex ${cls}`}>
            {
                [1,2,3,4,5].map((item) => {
                    return (
                        <Star key={item} cls="fill-yellow-400 w-5 h-5" />
                    )
                })
            }
        </div>
    )
}

export default FiveStars;