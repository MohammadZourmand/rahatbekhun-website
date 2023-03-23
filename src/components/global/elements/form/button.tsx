
interface ButtonProps {
    btnType ?: boolean
    cls ?: string
}

const GrayButton : React.FC<ButtonProps> = ({
    cls,
    btnType
}) => {
    
    return (
        <button
            className={`${cls} col-start-4 bg-slate-700 text-center text-xl text-white rounded-lg`}
            type={btnType ? "button" : "submit"}
        >
            تایید 
        </button>

    )
}

export default GrayButton;