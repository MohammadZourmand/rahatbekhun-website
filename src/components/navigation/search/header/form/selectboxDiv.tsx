import Selecter from "@/components/form/inputs/selector";

export interface SelectBoxDivProps {
    options : string[]
    changeHandler : (type : string , value : string) => void
    name : string
    initialState : object
    title : string
}

const SelectBoxDiv = ({ options, title, changeHandler, name, initialState } : SelectBoxDivProps) => {

    return (
        <div className="xl:col-span-4 md:col-span-6 col-span-12 my-2 flex xs:flex-row flex-col items-center justify-between">
            <span className="relative text-lg xs:ml-6 font-semibold text-white my-6">{title}</span>
            <Selecter
                cls="w-72 xs:w-72 md:w-56 lg:w-72 xl:w-56"
                setter={changeHandler}
                options={options}
                name={name}
                values={initialState}
            />
        </div>
    )
}

export default SelectBoxDiv;