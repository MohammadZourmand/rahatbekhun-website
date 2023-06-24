
import { FC, useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { emptyCart } from "@/store/slices/cart";
import { useDispatch } from "react-redux";

import { BagIcon, CartBrokenIcon } from "@/assets/icons";
import Heading6 from "../../../elements/headings/h6";
import CloseIcon from "../../mobile/closeIcon";
import DarkBackground from "../darkBg";
import Link from "next/link";
import PriceBox from "@/components/singleCourse/floatSidebar/price";
import BlueBtn from "../../../elements/buttons/blue";
import WhiteBtn from "../../../elements/buttons/white";
import Products from "./products";
import CartProductsFooter from "./footer";

interface CartProps {
    isWhite : boolean
}

const Cart : FC<CartProps> = ({isWhite}) => {

    const [show, setShow] = useState<boolean>(false)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        sumProductsPrice()
    })

    const sumProductsPrice = () => {
        const prices : number[] = []

        cartProducts.forEach(item => {
            prices.push(item.price)
        })

        const totalPrices = prices.reduce((prev, current) => {
            return prev+current
        },0)

        setTotal(totalPrices)
    }

    const cartProducts = useSelector(( state : RootState) => state.cartProducts)

    return (
        <div>
            {/* // ! icon */}
            <div onClick={() => setShow(true)} className={`group cursor-pointer flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full xs:w-12 xs:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition md:flex hidden`}>
                <CartBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
            </div>
            {/* // ! popup */}
            <div className={` ${show ? "block" : "hidden"} fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full`}>
                <div className={`lg:w-2/3 md:w-4/5 xs:w-11/12 m-1 max-h-[90vh] animate-comeFromRight py-6 overflow-y-auto fixed z-50 bg-white rounded-md`}>
                    <header className="py-3 px-4 sm:mx-6 mx-1 flex justify-between">
                        <Heading6 text="سبد خرید شما"/>
                        <CloseIcon setState={setShow} />
                    </header>
                    <main className="xs:px-8 px-2 xs:pb-8">
                        {
                            cartProducts.length === 0
                            ?
                                <div className="flex flex-col text-lg font-semibold text-gray-400 items-center justify-center border-[3px] border-dashed rounded-lg m-3 h-72">
                                    <BagIcon cls="fill-gray-400 w-16 h-16 mb-2" />
                                    سبد خرید شما خالی است.
                                </div>
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
            {/* // ! dark background */}
            <DarkBackground show={show} setShow={setShow} />
        </div>
    )
}

export default Cart;