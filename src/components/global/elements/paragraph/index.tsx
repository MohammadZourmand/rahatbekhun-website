interface ParagraphProps {
    text : string,
    cls ?: string
}

const Paragraph : React.FC<ParagraphProps> = ({
    text,
    cls
}) => {

    return (
        <p className={`${cls} text-baby-1 leading-[2.5] sm:mt-8 mt-4 xl:px-64 md:px-32 px-6 text-center text-base font-medium`}>
           {text}
        </p>
    )
}

export default Paragraph;