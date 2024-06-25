import Navbar from "../global/navbar";
import CartMainAside from "./main/aside";
import CartMainArticle from "./main/article";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Footer from "../global/footer";

const Cart = () => {

    const cartProducts = useSelector(( state : RootState) => state.cartProducts)

    return (
        <>
            <Navbar isWhite={false}/>
            <main className="max-w-7xl xl:mx-auto lg:mx-8 xs:mx-12 mx-2 my-16 grid grid-cols-12">
                <CartMainAside cls={cartProducts.length === 0 && "hidden"} />
                <CartMainArticle />
            </main>
            <Footer />
        </>
    )
}

export default Cart;