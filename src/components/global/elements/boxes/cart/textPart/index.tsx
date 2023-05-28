// ? types & components =================
import { CartType } from "@/types/home";
import CartTextHeader from "./header";
import CartTextMain from "./main";
import CartTextFooter from "./footer";

interface CartTextPartProps {
    item : CartType
}

const CartTextPart : React.FC<CartTextPartProps> = ({item}) => {
    
    return (
        <div className="flex flex-col xl:p-4 p-3">
            <CartTextHeader item={item}/>
            <CartTextMain item={item}/>
            <CartTextFooter item={item}/>
        </div>
    )
}

export default CartTextPart;