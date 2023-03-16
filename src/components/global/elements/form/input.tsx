
interface InputProps {
    cls : string
    placeholder : string

}

const Input : React.FC<InputProps> = ({
    cls,
    placeholder
}) => {

    return (
        <input
            className={`${cls}`}
            type="text"
            placeholder={placeholder}    
            
        />
    )
}