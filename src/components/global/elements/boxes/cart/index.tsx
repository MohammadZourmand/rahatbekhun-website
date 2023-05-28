// ? types & components  ======================
import { CartType } from "@/types/home";
import CartImgPart from "./imgPart";
import CartTextPart from "./textPart";

interface CartProps {
    cls ?: string
    item : CartType
}

const Cart : React.FC<CartProps> = ({
    cls,
    item
}) => {

    return (
        <section className={`${cls} group rounded-lg bg-white shadow-lg`}>
            <CartImgPart  item={item} />
            <CartTextPart item={item} />
        </section>
    )
}

export default Cart;