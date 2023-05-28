// ? react ====================
import React from "react";

// ? libraries ================
import PN from "persian-number";

interface RangeInputProps {
    cls ?: string
}

const RangeInput : React.FC<RangeInputProps> = ({cls}) => {

    const [minPrice, setMinPrice] = React.useState<number>(0)
    const [maxPrice, setMaxPrice] = React.useState<number>(1000000)

    return (
        <div className={`${cls} flex flex-col space-y-8`}>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <span className="text-gray-900 text-lg my-2 font-semibold"> حداقل قیمت : </span>
                    <span className="text-gray-600 text-lg my-2 font-semibold">{PN.convertEnToPe(PN.sliceNumber(minPrice))} تومان </span>
                </div>
                <input defaultValue={0} onChange={(e) => setMinPrice(Number(e.target.value)) } min={0} max={1000000} className={"rangeInput mt-2"} type="range" name="minPrice" id="minPrice" />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <span className="text-gray-900 text-lg my-2 font-semibold"> حداکثر قیمت : </span>
                    <span className="text-gray-600 text-lg my-2 font-semibold">{PN.convertEnToPe(PN.sliceNumber(maxPrice))} تومان </span>
                </div>
                <input defaultValue={1000000} onChange={(e) => setMaxPrice(Number(e.target.value)) } min={0} max={1000000} className={"rangeInput mt-2"} type="range" name="maxPrice" id="maxPrice" />
            </div>
        </div>
    )
}

export default RangeInput;