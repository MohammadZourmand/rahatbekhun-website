import Selecter from "@/components/global/elements/inputs/selector"

interface FilterBoxProps {
    item : any[]
    cls ?: string
    handler : (value : string, type : string) => void
    values : Object
}

const FilterBox = ({
    item, handler, cls, values
} : FilterBoxProps) => {

    return (
        <div className={`${cls} flex flex-col items-start`}>
            <span className="text-gray-800 mr-1">{item[1].title}</span>
            <Selecter
                options={item[1].options}
                name={item[0]}
                setter={handler}
                values={values}
                cls="mt-[5px] w-full"
                optionsListCls="!z-50"
            />
        </div>
    )
}

export default FilterBox;