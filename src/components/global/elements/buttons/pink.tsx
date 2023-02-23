
interface PinkBtnProps {
    text : string,
    cls ?: string
}

const PinkBtn : React.FC<PinkBtnProps> = ({
    text,
    cls
}) => {

    return (
        <button className={`btnHoverToRight ${cls}`}>
            <span className="sm:!text-xl xs:text-xl !text-[1.2rem]"> {text} </span>
        </button>
    )
}

export default PinkBtn;