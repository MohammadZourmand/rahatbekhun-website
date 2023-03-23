
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
            className={`${cls} col-span-2 bg-slate-700 text-center text-xl text-white`}
            type={btnType ? "button" : "submit"}
        >
            تایید 
        </button>

    )
}

export default GrayButton;