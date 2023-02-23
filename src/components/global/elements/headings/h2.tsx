
interface Heading2Props {
    cls ?: string,
    text : string
}

const Heading2 : React.FC<Heading2Props> = ({
    cls,
    text
}) => {

    return (
        <h2 className={`${cls} mt-28 roosta text-baby-1 lg:text-6xl md:text-6xl sm:text-5xl xs:text-[2.45rem] text-[2.65rem]`}>
            {text}
        </h2>
    )
}

export default Heading2;