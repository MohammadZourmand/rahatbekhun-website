import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";

import CloseIcon from "../../mobile/closeIcon";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import Heading6 from "@/components/global/elements/headings/h6";
import Products from "./products";
import CartProductsFooter from "./footer";
import EmptyCart from "./emptyCart";

interface CartProductsPopupProps {
    setShow : Dispatch<SetStateAction<boolean>>
}

const CartProductsPopup : FC<CartProductsPopupProps> = ({
    setShow
}) => {
    // * get total prices and set that
    const [total, setTotal] = useState<number>(0)

    // * dark background
    const darkBg = useRef(null)

    // * make popup hide
    const hidePopup = (e : MouseEvent) => {
        e.target === darkBg.current && setShow(false)
    }

    // * calc total in first time
    useEffect(() => {
        sumProductsPrice()
    })

    // * a function to calc total
    const sumProductsPrice = () => {
        const prices : number[] = []

        cartProducts?.forEach(item => {
            prices.push(item.price)
        })

        const totalPrices = prices.reduce((prev, current) => {
            return prev+current
        },0)

        setTotal(totalPrices)
    }

    // * get card products from state in redux
    const cartProducts = useSelector(( state : RootState) => state.cartProducts)

    return (
        <div ref={darkBg} onClick={(e : any) => hidePopup(e)} className={`bg-black/50 animate-fade fixed z-[98] top-0 left-0 flex items-center justify-center w-full h-full`}>
            <div className={`lg:w-2/3 md:w-4/5 xs:w-11/12 m-1 max-h-[90vh] animate-comeFromRight py-6 overflow-y-auto fixed z-[99] bg-white rounded-md`}>
                <header className="py-3 px-4 sm:mx-6 mx-1 flex justify-between">
                    <Heading6 text="سبد خرید شما"/>
                    <CloseIcon setState={setShow} />
                </header>
                <main className="xs:px-8 px-2 xs:pb-8">
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
                </main>
                <CartProductsFooter total={total} setTotal={setTotal} />
            </div>
        </div>
    )
}

export default CartProductsPopup