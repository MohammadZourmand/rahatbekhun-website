// ? types & components  ======================
import { CardType } from "@/types/home";
import CardImgPart from "./imgPart";
import CardTextPart from "./textPart";

interface CardProps {
    cls ?: string
    item : CardType
}

const Card : React.FC<CardProps> = ({
    cls,
    item
}) => {

    return (
        <section className={`${cls} group rounded-lg bg-white shadow-lg`}>
            <CardImgPart  item={item} />
            <CardTextPart item={item} />
        </section>
    )
}

export default Card;