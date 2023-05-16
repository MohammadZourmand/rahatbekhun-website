
export interface HeadingsProps {
    cls ?: string,
    text : string,
    color ?: string,
    isNozha ?: boolean,
    center ?: boolean,
    weight ?: string
}

const Heading2 : React.FC<HeadingsProps> = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
}) => {

    return (
        <h2
            className={` 
                ${cls}
                ${color ?? "text-gray-700"}
                ${isNozha && "nozha"}
                ${!center ? "text-center" : "text-right"}
                ${weight ?? "font-bold"}
                mt-28 lg:text-6xl md:text-6xl sm:text-5xl xs:text-[2.45rem] text-[2.65rem]
            `}>
            {text}
        </h2>
    )
}

export default Heading2;