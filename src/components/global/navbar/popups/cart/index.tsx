
import { useState } from "react";
import dynamic from "next/dynamic";

import { CartBrokenIcon } from "@/assets/icons";

const CartProductsPopup = dynamic(() => import("./popup"))

interface CartProps {
    isWhite : boolean
}

const Cart = ({isWhite} : CartProps) => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="flex">
            {/* // ! icon */}
            <div onClick={() => setShow(true)} className={`group cursor-pointer flex items-center justify-center ${isWhite ? "bg-white" : "bg-baby-1"} rounded-full xs:w-12 xs:h-12 w-10 h-10 after:hidden after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-6 relative text-center nozha py-4 px-1 transition flex`}>
                <CartBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color={isWhite ? "black" : "white"} />
            </div>
            {/* // ! popup */}
            { show && <CartProductsPopup setShow={setShow} />}
        </div>
    )
}

export default Cart;