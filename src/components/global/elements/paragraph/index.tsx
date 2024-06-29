import PN from "persian-number";

interface ParagraphProps {
    text : string,
    cls ?: string,
    color ?: string,
    isNozha ?: boolean,
    center ?: boolean,
    weight ?: string
}

const Paragraph = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
} : ParagraphProps) => {

    return (
        <p className={`
            ${color ?? "text-gray-400"}
            ${isNozha && "font-nozha"}
            ${center ? "text-center" : "text-right"}
            ${weight ?? "font-bold"}
            text-base
            ${cls}
        `}>
           {PN.convertEnToPe(text)}
        </p>
    )
}

export default Paragraph;