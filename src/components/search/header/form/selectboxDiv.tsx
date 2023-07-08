import {FC} from "react";

import SelectBox from "@/components/global/elements/inputs/selectBox";
import { setSelectBoxTitle } from "./setSelectboxTitle";

export interface SelectBoxDivProps {
    itemsFinder : () => string[]
    changeHandler : (type : string , value : string) => void
    values : string[]
}

const SelectBoxDiv : FC<SelectBoxDivProps> = ({
    itemsFinder, changeHandler, values
}) => {

    return (
        <div className="xl:col-span-4 md:col-span-6 col-span-12 my-2 flex xs:flex-row flex-col items-center justify-between">
            <span className="relative text-lg xs:ml-6 font-semibold text-white my-6">{setSelectBoxTitle(values[0])}</span>
            <SelectBox
                items={itemsFinder().map((item, index) => {
                    return {id : index, text : item}
                })}
                selected={[values[0], values[1]]}
                setSelected={changeHandler}
                cls="h-12 w-72 xs:w-72 md:w-56 lg:w-72 xl:w-56"
                textBtnCls="text-base"
            ></SelectBox>
        </div>
    )
}

export default SelectBoxDiv;