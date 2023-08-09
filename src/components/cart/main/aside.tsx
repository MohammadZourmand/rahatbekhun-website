import Lottie from "lottie-react";
import ManShopping from "@/assets/animation/lottieFiles/nan-shopping-cart.json"
import Heading4 from "@/components/global/elements/headings/h4";
import Paragraph from "@/components/global/elements/paragraph";
import PriceBox from "@/components/courses/singleCourse/floatSidebar/price";
import IconBtn from "@/components/global/elements/buttons/iconBtn";

interface CartMainAsideProps {
    cls ?: string
}

const CartMainAside : React.FC<CartMainAsideProps> = ({cls}) => {

    return (
        <aside className={`${cls} lg:order-1 order-2 xl:col-span-3 lg:col-span-4 col-span-12 flex flex-col`}>
            <div className="flex flex-col items-center shadow-all-lg px-6 pb-8 pt-3 rounded-xl">
                <Lottie className="w-72 h-72" animationData={ManShopping}/>                
                <Heading4 
                    text="جزئیات سبد خرید"
                    cls="!text-baby-9 !text-3xl"
                />
                <div className="flex flex-col w-full space-y-4 mt-6">
                    <div className={"flex items-center justify-between"}>
                        <Paragraph
                            cls="font-medium" 
                            text="قیمت کالاها :"
                        />
                        <PriceBox
                            withoutOff={true}
                            isOff={false}
                            price={465}
                            priceCls={"!text-gray-800 text-base"}
                            markCls={"text-gray-500 !scale-[.7]"}
                        />
                    </div>
                    <div className={"flex items-center justify-between"}>
                        <Paragraph
                            cls="font-medium text-rose-500" 
                            text="تخفیف :"
                            
                        />
                        <PriceBox
                            withoutOff={true}
                            isOff={false}
                            price={0}
                            priceCls={"!text-rose-500 text-base"}
                            markCls={"text-rose-500 !scale-[.7]"}
                        />
                    </div>
                    <div className={"flex items-center justify-between"}>
                        <Paragraph 
                            text="مبلغ نهایی :"
                            cls="!text-baby-9 text-lg"
                        />
                        <PriceBox
                            withoutOff={true}
                            isOff={false}
                            price={465}
                            priceCls={"!text-baby-9 text-3xl"}
                            markCls={"text-baby-9 !scale-[.75]"}
                        />
                    </div>
                </div>
            </div>
            <IconBtn iconName="left" text="ورود به درگاه پرداخت"/>
        </aside>

    )
}

export default CartMainAside;