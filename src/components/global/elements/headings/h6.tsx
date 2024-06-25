
import { HeadingsProps } from "./h2";

const Heading6 = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
} : HeadingsProps) => {

    return (
        <h6
            className={` 
                ${color ?? "text-gray-700"}
                ${isNozha && "nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
                md:text-xl sm:text-lg text-base
                ${cls}
            `}>
            {text}
        </h6>
    )
}

export default Heading6;