
// ? types  ======================
import { courseInfoType } from "@/types/home";

// ? assets ======================
import Paragraph from "@/components/global/elements/paragraph";
import MiniIconTextBox from "./minibox";
import FaSpan from "../../../../translators/faSpan";

interface CartTextMainProps {
    item : courseInfoType
}

const CartTextMain : React.FC<CartTextMainProps> = ({item}) => {

    const {details, studentsNumber, sessions, author, group} = item

    return (
        <main className="mt-[10px]">
            <div className="flex items-center mb-4">
                <MiniIconTextBox text={`${studentsNumber} دانش آموز`} icon="users" />
                <MiniIconTextBox text={`${sessions} قسمت`} icon="folder" cls="mr-2 scale-y-105"/>
            </div>
            <Paragraph cls="tracking-tight font-normal text-[.9rem] leading-[1.8]" text={details} />
            <div className="flex mt-4 mb-4 items-center">
                <img className="outline outline-1 outline-gray-300 outline-offset-2 w-9 h-9 rounded-full" src="/images/home/teachers/mohammad-zourmand.jpg" alt="author" />
                <p className="text-gray-400 text-sm font-semibold tracking-normal mr-2">
                    توسط&nbsp;
                    <FaSpan cls="text-gray-800" value={author}/>
                    {group && <>
                        &nbsp;از&nbsp;
                        <FaSpan cls="text-gray-800" value={group}/>
                    </>}
                </p>
            </div>
        </main> 
    )
}

export default CartTextMain