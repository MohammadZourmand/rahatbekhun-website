import { Dispatch, SetStateAction, useRef, useState } from "react";

import CloseIcon from "../../mobile/closeIcon";

import Heading6 from "@/components/global/elements/headings/h6";
import CartProductsFooter from "./footer";

interface CartProductsPopupProps {
    setShow : Dispatch<SetStateAction<boolean>>
}

const CartProductsPopup = ({ setShow } : CartProductsPopupProps) => {
    const [total, setTotal] = useState<number>(0)

    // * dark background
    const darkBg = useRef(null)

    const popupHider = (e : MouseEvent) => {
        e.target === darkBg.current && setShow(false)
    }

    return (
        <div ref={darkBg} onClick={(e : any) => popupHider(e)} className={`bg-black/50 animate-fade fixed z-[98] top-0 left-0 flex items-center justify-center w-full h-full`}>
            <div className={`lg:w-2/3 md:w-4/5 xs:w-11/12 m-1 max-h-[90vh] animate-comeFromRight py-6 overflow-y-auto fixed z-[99] bg-white rounded-md`}>
                <header className="py-3 px-4 sm:mx-6 mx-1 flex justify-between">
                    <Heading6 text="سبد خرید شما"/>
                    <CloseIcon setState={setShow} />
                </header>
                {/* <main className="xs:px-8 px-2 xs:pb-8">
                    {
                        cartProducts.length === 0
                        ?
                            <EmptyCart />
                        :
                            cartProducts.map((product, index) => {
                                return (
                                    <Products product={product} key={index} />
                                )
                            })
                    }
                </main> */}
                <CartProductsFooter total={total} setTotal={setTotal} />
            </div>
        </div>
    )
}

export default CartProductsPopup