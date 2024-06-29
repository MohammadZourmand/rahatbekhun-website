import Navbar from "../global/navbar";
import CartMainAside from "./main/aside";
import CartMainArticle from "./main/article";
import Footer from "../global/footer";

const Cart = () => {


    return (
        <>
            <Navbar isWhite={false}/>
            <main className="max-w-7xl xl:mx-auto lg:mx-8 xs:mx-12 mx-2 my-16 grid grid-cols-12">
                {/* <CartMainAside cls={cartProducts.length === 0 && "hidden"} /> */}
                <CartMainArticle />
            </main>
            <Footer />
        </>
    )
}

export default Cart;