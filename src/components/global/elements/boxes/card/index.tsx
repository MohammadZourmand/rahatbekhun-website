// ? types & components  ======================
import { courseInfoType } from "@/types/home";
import CardImgPart from "./imgPart";
import CardTextPart from "./textPart";

interface CardProps {
    cls ?: string
    item : courseInfoType
}

const Card : React.FC<CardProps> = ({
    cls,
    item
}) => {

    return (
        <section className={`${cls} hover:scale-[1.03] transition duration-300 p-7 group rounded-lg bg-white shadow-all-lg shadow-gray-300/70`}>
            <CardImgPart  item={item} />
            <CardTextPart item={item} />
        </section>
    )
}

export default Card;