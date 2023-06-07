import FaSpan from "@/components/global/elements/boxes/cart/faSpan"

interface PriceBoxProps {
    isOff : boolean
    offPercent ?: number
    price : number
    cls ?: string
    priceCls ?: string
    markCls ?: string
}

const PriceBox : React.FC<PriceBoxProps> = ({
    isOff,
    offPercent,
    price,
    cls,
    priceCls,
    markCls
}) => {

    return (
        <div className={`${cls} flex items-center relative`}>
            {
                isOff
                ? (
                    <>
                        <FaSpan cls={`${priceCls} text-xl font-semibold text-gray-400`} value={price} />
                        <div className="absolute top-0 left-1 w-full h-1/2 border-b-[3px] border-gray-500/70"></div>
                    </>
                )
                : (
                    <>
                        <FaSpan cls={`${priceCls} text-3xl font-semibold text-gray-800`} value={offPercent && Math.round(price*(100 - offPercent)/100)} />
                    </>
                )

            }
            <div className={`${markCls} ${isOff ? "scale-[.6] -mr-1" : "scale-[0.8] "} text-gray-400 flex flex-col text-center`}>
                <span className="-my-2">هــــزار</span>
                <span>تومان</span>
            </div>
        </div>
    )
}

export default PriceBox;