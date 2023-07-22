// ? types & components ==========
import { courseInfoType } from "@/types/home";
import FaSpan from "../../faSpan";

// ? assets ======================
import { LeftIcon } from "@/assets/icons";
import PriceBox from "@/components/singleCourse/floatSidebar/price";

interface CartTextFooterProps {
    item : courseInfoType
}

const CartTextFooter : React.FC<CartTextFooterProps> = ({item}) => {

    const { offPrecent, price } = item

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
                                priceCls="!text-gray-500/80 !font-extrabold"
                                markCls="!text-gray-500/80 !font-extrabold"
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
                    // ? <FaSpan value={offPrecent} hasSlicer={true} suffix={"تومان"}/>
                    // : price === 0 ? "رایگان"  : <FaSpan value={price} hasSlicer={true} suffix={"تومان"}/>  
                }
            </div>
            {/* {
                offPrecent && <div className={`text-baby-6 line-through text-xs font-semibold`}>
                        {<FaSpan value={price} hasSlicer={true} suffix={"تومان"}/>}
                    </div>
            }
            <div className="flex items-center">
                <span className="ml-1 text-sm">مشاهده</span>
                <LeftIcon cls="w-5 h-5" color="#374151" />
            </div> */}
        </footer>
    )
}

export default CartTextFooter