import { ChevronLeft } from "@/assets/icons";
import { useState } from "react";

interface SelecterProps {
    options : string[]
    setter : (key : string, value : string) => void
    name : string
    values : object
    cls ?: string
    btnCls ?: string
    optionsListCls ?: string
}

const Selecter = ({
    options, setter, name, values, cls, optionsListCls, btnCls
} : SelecterProps) => {

    const [isOpen, setIsOpen] = useState(false)
    
    const optionHandler = (option : string) => {
        setIsOpen(false)
        setter(name, option)
    }    

    return (
        <div className={`relative ${cls}`}>
            {/* // ! btn */}
            <div className={`cursor-pointer px-4 py-2 bg-white rounded-lg flex items-center justify-between ${cls}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={btnCls}>
                {
                    Object.entries(values).map((item, index) => {
                        return (
                            <p key={index}>{
                                item[0] === name && item[1]
                            }</p>
                        )
                    })
                }
                </div>
                <ChevronLeft cls={`w-6 h-6 mr-4 fill-gray-700 ${isOpen ? "rotate-90" : "-rotate-90"} transition duration-500`}/>                
            </div>
            {/* // ! list */}
            {
                isOpen && <ul className={`absolute animate-scaleX z-20 bg-white top-12 p-2 rounded-lg w-full ${optionsListCls}`}>
                    {options.map((option : string, index : number) => {
                        return (
                            <li
                                key={index}
                                className={`${values[name] === option && "!bg-gray-200 text-baby-7"} p-2 cursor-pointer hover:bg-gray-200 rounded-lg`} 
                                onClick={() => optionHandler(option)}
                            >{option}</li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default Selecter;