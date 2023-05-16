
interface BlueParagraphProps {
    cls ?: string
    text : string
}

const BlueParagraph : React.FC<BlueParagraphProps> = ({
    cls,
    text
}) => {
    return (
        <p className={`${cls} text-baby-9`}>
            {text}
        </p>
    )
}

export default BlueParagraph