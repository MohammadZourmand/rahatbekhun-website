
import { HeadingsProps } from "./h2";

const Heading4 = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
} : HeadingsProps) => {

    return (
        <h4
            className={` 
                ${cls}
                ${color ?? "text-gray-700"}
                ${isNozha && "font-nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
                lg:text-3xl md:text-2xl sm:text-xl text-lg
            `}>
            {text}
        </h4>
    )
}

export default Heading4;