
interface BlueBtnProps {
    text : string,
    cls ?: string
}

const BlueBtn : React.FC<BlueBtnProps> = ({
    text,
    cls
}) => {

    return (
        <button className={`${cls} hover:shadow-xl bg-baby-9 border text-white rounded-lg px-5 py-3 mx-auto transition duration-500`}>
            <span className=""> {text} </span>
        </button>
    )
}

export default BlueBtn;