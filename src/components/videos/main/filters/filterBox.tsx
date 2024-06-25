import Selecter from "@/components/global/elements/inputs/selecter";

interface FilterBoxProps {
    options : string[]
    name : string
    cls ?: string
    handler : (value : string, type : string) => void
    values : Object
}

const FilterBox = ({
    options, name, handler, cls, values
} : FilterBoxProps) => {

    const titleTranslator = (value) => {
        switch (value) {
            case "book":
            return "کتاب :"
            case "sort":
            return "نحوه نمایش :"
            case "videosUserType":
            return "مخاطب :"
            case "type":
            return "نوع دوره :"
        }
    }

    return (
        <div className={`${cls} flex flex-col`}>
            <span className="lg:text-white text-gray-800 mr-1">{titleTranslator(name)}</span>
            <Selecter 
                options={options}
                name={name}
                setter={handler}
                values={values}
                cls="mt-[5px] xs:w-full"
                optionsListCls="!z-50"
            />
        </div>
    )
}

export default FilterBox;