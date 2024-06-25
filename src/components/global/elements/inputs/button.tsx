
interface ButtonProps {
    btnType ?: boolean
    cls ?: string
    text : string
}

const GrayButton = ({ cls, btnType, text } : ButtonProps) => {
    
    return (
        <button
            className={`${cls} col-start-4 bg-slate-700 text-center text-xl text-white rounded-lg`}
            type={btnType ? "button" : "submit"}
        >
            {text}
        </button>

    )
}

export default GrayButton;