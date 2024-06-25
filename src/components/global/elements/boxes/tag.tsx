interface TagBoxProps {
    cls ?: string
    value : string
    func ?: () => void
}

const TagBox = ({ cls, value, func } : TagBoxProps) => {

    return (
        <div onClick={func} className={`${cls} text-center cursor-pointer hover:text-white font-medium hover:bg-baby-9 transition duration-500 px-3 py-2 bg-gray-100 text-gray-700 text-[.9rem] rounded`}>
            {value}
        </div>
    )
}

export default TagBox;