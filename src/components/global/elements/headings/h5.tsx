
import { HeadingsProps } from "./h2";

const Heading5 : React.FC<HeadingsProps> = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
}) => {

    return (
        <h5
            className={` 
                ${cls}
                ${color ?? "text-gray-700"}
                ${isNozha && "nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
                lg:text-2xl md:text-xl sm:text-lg text-base
            `}>
            {text}
        </h5>
    )
}

export default Heading5;