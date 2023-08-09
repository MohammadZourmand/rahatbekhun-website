// ? react
import { Dispatch, FC, SetStateAction } from "react";

// ? libraries
import { AppDispatch } from "@/store";
import { emptyCart } from "@/store/slices/cart";
import { useDispatch } from "react-redux";

// ? components
import BlueBtn from "@/components/global/elements/buttons/blue";
import PriceBox from "@/components/courses/singleCourse/floatSidebar/price";
import IconBtn from "@/components/global/elements/buttons/iconBtn";

interface CartProductsFooterProps {
    total : number
    setTotal : Dispatch<SetStateAction<number>>
}

const CartProductsFooter : FC<CartProductsFooterProps> = ({total, setTotal}) => {
    
    const dispatch = useDispatch<AppDispatch>()

    return (
        <footer className="xs:mx-8 mx-2 border-t py-8">
            <div className="flex items-center justify-between xs:pl-8">
                <span className="text-gray-800 font-semibold text-xl">جمع سبد خرید شما : </span>
                <PriceBox
                    isOff={true}
                    withoutOff={true}
                    price={Math.floor(total)}
                    markCls="scale-[.8]"
                    priceCls="text-4xl ml-2"
                />
            </div>
            <div className="mt-8">
                <button onClick={() => dispatch(emptyCart())} className={`w-full mb-3 hover:shadow-md text-center border border-gray-300 text-gray-900 rounded-lg px-5 py-3 mx-auto transition duration-500`}>
                    خالی کردن سبد خرید
                </button>
                <IconBtn href="/cart" iconName="left" cls="w-full my-0 py-3 mt-0" text="ادامه دادن فرایند خرید" />
            </div>
        </footer>
    )
}

export default CartProductsFooter;