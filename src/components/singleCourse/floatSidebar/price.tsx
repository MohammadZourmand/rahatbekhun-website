import FaSpan from "@/components/global/elements/boxes/card/faSpan"

interface PriceBoxProps {
    withoutOff ?: boolean
    isOff : boolean
    offPercent ?: number
    price : number
    cls ?: string
    priceCls ?: string
    markCls ?: string
}

const PriceBox : React.FC<PriceBoxProps> = ({
    withoutOff,
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
                withoutOff
                ?
                    <FaSpan cls={`${priceCls} text-2xl font-semibold text-blue-500`} value={price} />
                :
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
            <div className={`${markCls} ${withoutOff ? "text-blue-600" : "text-gray-400"} ${isOff ? "scale-[.6] -mr-1" : "scale-[0.8]"}  flex flex-col text-center`}>
                <span className="-my-2">هــــزار</span>
                <span>تومان</span>
            </div>
        </div>
    )
}

export default PriceBox;