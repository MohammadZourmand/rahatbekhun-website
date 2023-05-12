
import { HeadingsProps } from "./h2";

const Heading3 : React.FC<HeadingsProps> = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
}) => {

    return (
        <h3
            className={` 
                ${cls}
                ${color ?? "text-gray-700"}
                ${isNozha && "nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
                mt-28 lg:text-3xl md:text-2xl sm:text-xl text-lg
            `}>
            {text}
        </h3>
    )
}

export default Heading3;