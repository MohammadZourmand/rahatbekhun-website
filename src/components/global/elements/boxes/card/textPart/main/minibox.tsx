import { CategoryBroken, FilterBroken, FolderBroken, UsersBroken } from "@/assets/icons"
import FaSpan from "../../faSpan"

interface MiniIconTextBoxProps {
    icon : string
    text : string
    cls ?: string
} 

const IconChooser = (value : string) => {
    switch (value) {
        case "users":
            return (
                <UsersBroken cls="w-5 h-5 fill-gray-400" />
            )
        case "category":
            return (
                <CategoryBroken cls="w-5 h-5 fill-gray-400" />
            )
        case "folder":
            return (
                <FolderBroken cls="w-5 h-5 fill-gray-400" />
            )
        case "students":
            return (
                <></>
            )
        case "students":
            return (
                <></>
            )
        default:
            break;
    }
}

const MiniIconTextBox : React.FC<MiniIconTextBoxProps> = ({
    text, icon, cls
}) => {
    
    return (
        <div className={`${cls} flex items-center`}>
            {IconChooser(icon)}
            <FaSpan value={text} cls="text-sm mr-0.5 text-gray-400" />
        </div>
    )
}

export default MiniIconTextBox;