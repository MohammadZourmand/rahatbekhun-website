// ? assets =================
import { FilterBrokenIcon } from "@/assets/icons";

interface BlackBtnProps {
    icon ?: string
    text : string
    cls ?: string
    iconCls ?: string
    onClick ?: any
}

const BlackBtn : React.FC<BlackBtnProps> = ({icon, text, cls, iconCls , ...props}) => {

    return (
        <button {...props} className={`${cls} group hover:scale-110 transition mx-auto flex bg-gray-800 text-center text-white py-3 px-6 mt-4 rounded-md`}>
            {text}
            {
                icon === "filter" && ( <FilterBrokenIcon cls={`${iconCls} group-hover:scale-150 transition mr-2`} color="white" /> )
            }
        </button>
    )
}

export default BlackBtn;