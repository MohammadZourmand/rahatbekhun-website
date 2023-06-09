
interface MyLabelProps {
    htmlFor : string
    cls ?: string
    text : string
}

const MyLabel : React.FC<MyLabelProps> = ({
    cls,
    htmlFor,
    text
}) => {

    return (
        <label htmlFor={htmlFor} className={`${cls} text-gray-900 block `}>
            {text}
        </label>
    )
}

export default MyLabel;