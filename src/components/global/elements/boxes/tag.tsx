import { FC } from "react";

interface TagBoxProps {
    cls ?: string
    value : string
    func ?: () => void
}

const TagBox : FC<TagBoxProps> = ({
    cls, value, func
}) => {

    return (
        <div onClick={func} className={`${cls} text-center cursor-pointer hover:text-white font-medium hover:bg-baby-9 transition duration-500 px-3 py-2 bg-gray-100 text-gray-700 text-[.9rem] rounded`}>
            {value}
        </div>
    )
}

export default TagBox;