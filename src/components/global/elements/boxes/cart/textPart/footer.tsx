// ? types & components ==========
import { CartType } from "@/types/home";
import FaSpan from "../faSpan";

// ? assets ======================
import { LeftIcon } from "@/assets/icons";

interface CartTextFooterProps {
    item : CartType
}

const CartTextFooter : React.FC<CartTextFooterProps> = ({item}) => {

    const { offPrice, price } = item

    console.log(offPrice, price)
    console.log(<FaSpan value={price} hasSlicer={true} />)

    return (
        <footer className={`${offPrice ? "gap-0" : "gap-4"} flex items-center justify-between gap-4 border-t px-4 pt-4 pb-1`}>
            <div className={`text-baby-12 font-semibold`}>
                {
                    offPrice
                    ? <FaSpan value={offPrice} hasSlicer={true} suffix={"تومان"}/>
                    : price === 0 ? "رایگان"  : <FaSpan value={price} hasSlicer={true} suffix={"تومان"}/>  
                }
            </div>
            {
                offPrice && <div className={`text-baby-6 line-through text-xs font-semibold`}>
                        {<FaSpan value={price} hasSlicer={true} suffix={"تومان"}/>}
                    </div>
            }
            <div className="flex items-center">
                <span className="ml-1 text-sm">مشاهده جزئیات</span>
                <LeftIcon cls="w-5 h-5" color="#374151" />
            </div>
        </footer>
    )
}

export default CartTextFooter