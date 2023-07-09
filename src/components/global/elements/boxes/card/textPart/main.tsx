
// ? types  ======================
import { CardType } from "@/types/home";

// ? assets ======================
import Paragraph from "@/components/global/elements/paragraph";

interface CartTextMainProps {
    item : CardType
}

const CartTextMain : React.FC<CartTextMainProps> = ({item}) => {

    const {details} = item

    return (
        <main className="mt-4">
            <Paragraph cls="font-medium text-[.9rem] leading-relaxed" text={details} />
            <div className="flex mt-4 mb-4 items-center">
                <img className="w-9 h-9 border-2 border-gray-200 shadow-xl rounded-full" src="/images/home/teachers/mohammad-zourmand.jpg" alt="author" />
                <Paragraph cls="text-gray-600 text-xs mr-4" text={"نویسنده راحت بخون"} />
            </div>
        </main> 
    )
}

export default CartTextMain