import { CartBrokenIcon, UserBrokenIcon } from "@/assets/icons";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import Heading3 from "@/components/global/elements/headings/h3";
import Paragraph from "@/components/global/elements/paragraph";
import EmptyCart from "@/components/global/navbar/popups/cart/emptyCart";
import { RootState } from "@/store";
import Link from "next/link";
import { useSelector } from "react-redux";


const CartMainArticle = () => {

    const cartProducts = useSelector(( state : RootState) => state.cartProducts)

    return (
        <article className={`${cartProducts.length === 0 ? "col-span-12 h-[65vh] mb-16" : "col-span-8 mr-16"}`}>
            {
                cartProducts.length === 0
                ?
                    (
                        <div className="flex flex-col gap-y-4 items-center justify-center w-full h-full">
                            <CartBrokenIcon cls="fill-gray-200 w-32 h-32"/>
                            <Paragraph 
                                text="سبد خرید شما خالی است !"
                            />
                            <IconBtn
                                iconName="eye"
                                cls="py-2 text-sm my-0"
                                text="مشاهده دوره ها"
                            />
                        </div>
                    )
                :
                    (
                        <div className="shadow-all-lg">
                        {
                            cartProducts.map((item) => {
                                return (
                                    <div className="p-7 rounded-lg grid grid-cols-7">
                                        <img className="col-span-2 rounded-lg" src={item.img} alt={item.name} />
                                        <div className="col-span-3 pr-8 self-center space-y-6">
                                            <Link
                                                href={item.link}
                                                className="font-extrabold text-gray-600 text-xl"
                                            >
                                                {item.name}
                                            </Link>
                                            <div className="flex">
                                                <UserBrokenIcon cls="w-5 h-5 fill-sky-500" />
                                                <span className="text-sm text-gray-700 mr-2"> مدرس دوره : محمد زورمند </span>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    )
            }
        </article>
    )
}

export default CartMainArticle;