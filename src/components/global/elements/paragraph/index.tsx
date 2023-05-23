interface ParagraphProps {
    text : string,
    cls ?: string,
    color ?: string,
    isNozha ?: boolean,
    center ?: boolean,
    weight ?: string
}

const Paragraph : React.FC<ParagraphProps> = ({
    cls,
    text,
    color,
    isNozha,
    center,
    weight
}) => {

    return (
        <p className={`
            ${color ?? "text-gray-400"}
            ${isNozha && "nozha"}
            ${center ? "text-center" : "text-right"}
            ${weight ?? "font-bold"}
            text-base
            ${cls}
        `}>
           {text}
        </p>
    )
}

export default Paragraph;