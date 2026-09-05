
import { HeadingsProps } from "./h2";

const Heading3 = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
} : HeadingsProps) => {

    return (
        <h3
            className={`
                lg:text-4xl md:text-3xl text-2xl
                ${cls}
                ${color ?? "text-gray-700"}
                ${isNozha && "font-nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
            `}>
            {text}
        </h3>
    )
}

export default Heading3;