// ? types & components ==========
import { courseInfoType } from "@/types/home";

// ? assets ======================
import { ChevronLeft } from "@/assets/icons";
import Link from "next/link";
import PriceBox from "@/components/global/price";

interface CartTextFooterProps {
    item : courseInfoType
}

const CartTextFooter = ({item} : CartTextFooterProps) => {

    const { offPrecent, price, href } = item

    return (
        <footer className={`${offPrecent ? "gap-0" : "gap-4"} flex items-center justify-between gap-4 pt-3`}>
            <div className={`text-baby-12 font-semibold`}>
                {
                    offPrecent === 0
                    ? (
                        <PriceBox
                            isOff={false}
                            price={price}
                            withoutOff={true}
                            priceCls="text-gray-600"
                            markCls="text-gray-600"
                        />
                    )
                    : (
                        <div className="flex items-center gap-x-4">
                            <PriceBox
                                isOff={false}
                                price={price}
                                offPercent={offPrecent}
                                priceCls="!text-gray-500 !font-extrabold"
                                markCls="!text-gray-500 !font-extrabold !scale-[0.7] relative !-right-[3px]"
                            />   
                            <PriceBox
                                cls="scale-[.9]"
                                isOff={true}
                                price={price}
                                priceCls="!text-gray-400/50 font-bold"
                                markCls="!text-gray-400/50 font-bold"
                                lineCls="border-gray-400/50"
                            />
                        </div>
                    ) 
                }
            </div>
            <Link href={`/courses/${href}`} className="relative group hover:after:block hover:after:border-baby-9 after:animate-scaleX flex items-center after:hidden after:absolute after:w-[93%] after:-right-0 after:border-b-2 after:p-3 after:border-gray-700">
                <p className="group-hover:text-baby-9 text-gray-700 transition ml-[1px] text-xs font-semibold">توضیح کامل تر</p>
                <ChevronLeft cls="fill-gray-700 group-hover:fill-baby-9 transition w-5 h-5 relative bottom-[1px]" />
            </Link>
        </footer>
    )
}

export default CartTextFooter