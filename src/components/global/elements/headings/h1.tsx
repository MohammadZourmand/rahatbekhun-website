
export interface HeadingsProps {
    cls ?: string,
    text : string,
    color ?: string,
    isNozha ?: boolean,
    center ?: boolean,
    weight ?: string
}

const Heading1 = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
} : HeadingsProps) => {

    return (
        <h2
            className={` 
                ${color ?? "text-gray-700"}
                ${isNozha && "nozha"}
                ${center ? "text-center" : "text-right"}
                ${weight ?? "font-extrabold"}
                mt-28 lg:text-6xl md:text-6xl sm:text-5xl xs:text-[2.45rem] text-[2.65rem]
                ${cls}
            `}>
            {text}
        </h2>
    )
}

export default Heading1;