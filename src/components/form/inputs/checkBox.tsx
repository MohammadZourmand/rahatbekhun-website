'use client'

// ? react =================
import { useState } from "react";

// ? components ============
import Paragraph from "../../elements/paragraph";

interface MyCheckBoxProps {
    cls ?: string
    text : string
    textCls ?: string
}

const MyCheckBox =  ({
    cls,
    text,
    textCls
} : MyCheckBoxProps) => {

    const [isChecked , setIsChecked] = useState(false)

    return (
        <label className={`${cls} group myCheckbox !flex items-center` }>
            <input type="checkbox"  onChange={() => setIsChecked(!isChecked)}/>
            <div className="checkmark"></div>
            <Paragraph cls={`${textCls} ${isChecked ? "!font-bold text-gray-800" : "!font-medium"} text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text={text} />
        </label>
    )
}

export default MyCheckBox;