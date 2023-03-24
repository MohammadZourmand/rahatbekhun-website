
interface BlueBtnProps {
    text : string,
    cls ?: string
}

const BlueBtn : React.FC<BlueBtnProps> = ({
    text,
    cls
}) => {

    return (
        <button className={`${cls} hover:scale-x-105 hover:bg-white hover:text-baby-2 bg-baby-2 border text-white border-baby-2 rounded-lg px-5 py-3 mx-auto my-8 transition duration-500`}>
            <span className="sm:!text-xl xs:text-xl !text-[1.2rem] font-semibold"> {text} </span>
        </button>
    )
}

export default BlueBtn;