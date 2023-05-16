
import { HeadingsProps } from "./h2";

const Heading4 : React.FC<HeadingsProps> = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
}) => {

    return (
        <h4
            className={` 
                ${cls}
                ${color ?? "text-gray-700"}
                ${isNozha && "nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
                lg:text-3xl md:text-2xl sm:text-xl text-lg
            `}>
            {text}
        </h4>
    )
}

export default Heading4;