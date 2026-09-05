
interface MyLabelProps {
    htmlFor : string
    cls ?: string
    text : string
}

const MyLabel = ({ cls, htmlFor, text} : MyLabelProps) => {

    return (
        <label htmlFor={htmlFor} className={`${cls} text-gray-900 block `}>
            {text}
        </label>
    )
}

export default MyLabel;