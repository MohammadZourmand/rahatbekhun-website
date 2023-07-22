// ? types & components =================
import { courseInfoType } from "@/types/home";
import CartTextHeader from "./header";
import CartTextMain from "./main";
import CartTextFooter from "./footer";
import IconChooser from "./header/iconChooser";

interface CartTextPartProps {
    item : courseInfoType
}

const CartTextPart : React.FC<CartTextPartProps> = ({item}) => {
        
    return (
        <div className="relative flex flex-col py-3">
            <CartTextHeader item={item}/>
            <CartTextMain item={item}/>
            <CartTextFooter item={item}/>
        </div>
    )
}

export default CartTextPart;