import { CartBrokenIcon, DeleteBrokenIcon, UserBrokenIcon } from "@/assets/icons";
import PriceBox from "@/components/courses/singleCourse/floatSidebar/price";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import Paragraph from "@/components/global/elements/paragraph";
import Image from "next/image";
import Link from "next/link";


const CartMainArticle = () => {

    return (
        <article
            // className={`${cartProducts.length === 0 ? "col-span-12 h-[65vh] mb-16" : "xl:col-span-9 order-1 lg:col-span-8 col-span-12 xl:mr-16 lg:mr-8 mb-8 lg:mb-0"}`}
        >
            {/* {
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
                        <div className="flex flex-col space-y-4">
                        {
                            cartProducts.map((item, index) => {
                                return (
                                    <div key={index} className="relative md:p-7 p-5 shadow-all-md rounded-lg grid grid-cols-7 items-center">
                                        <div className="group md:col-span-2 col-span-3 overflow-hidden rounded-lg">
                                            <Image
                                                className="group-hover:rotate-12 group-hover:scale-125 transition duration-500 rounded-lg"
                                                src={item.img}
                                                alt={item.name}
                                                width={25}
                                                height={25}
                                            />
                                        </div>
                                        <div className="md:col-span-3 sm:col-span-4 col-span-4 md:pr-8 pr-4 self-center xs:space-y-6 space-y-2">
                                            <Link
                                                href={item.link}
                                                className="hover:text-baby-9 transition duration-500 font-extrabold text-gray-600 md:text-xl sm:text-lg xs:text-base text-sm"
                                            >
                                                {item.name}
                                            </Link>
                                            <div className="flex items-center">
                                                <UserBrokenIcon cls="w-5 h-5 fill-sky-500" />
                                                <span className="text-gray-700 md:text-[.8rem] xs:text-xs text-[.6rem] mr-2 mt-1 tracking-tight"> آموزگار : محمد زورمند </span>
                                            </div>
                                        </div>
                                        <div className="relative md:col-span-2 col-span-7 mt-4 flex flex-col items-center md:justify-self-center justify-self-end">
                                            <PriceBox
                                                isOff={false}
                                                offPercent={item.offPrecent}
                                                price={item.price}
                                                priceCls={"!text-baby-9 sm:text-3xl text-[24px] relative sm:right-0 right-1.5"}
                                                markCls={"!text-baby-9 sm:!scale-[.75] scale-[.55]"}
                                            />
                                            {
                                                item.offPrecent !== 0 && (
                                                    <PriceBox
                                                        cls="mt-0.5 sm:right-1.5 right-1 relative"
                                                        lineCls="!border-b"
                                                        isOff={true}
                                                        price={item.price}
                                                        priceCls="!text-base"
                                                        markCls={"!scale-[.5]"}
                                                    />
                                                )
                                            }
                                        </div>
                                        <div onClick={() => productDeleter(item)} className="group hover:bg-rose-500 transition duration-500 absolute cursor-pointer bottom-2 md:left-4 right-4 md:right-[unset] p-1.5 rounded-full bg-rose-500/20">
                                            <DeleteBrokenIcon cls="w-5 h-5 fill-rose-500 group-hover:fill-white transition duration-500"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    )
            } */}
        </article>
    )
}

export default CartMainArticle;