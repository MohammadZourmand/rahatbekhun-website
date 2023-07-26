import Selecter from "@/components/global/elements/inputs/selecter";

interface FilterBoxProps {
    options : string[]
    name : string
    cls ?: string
    handler : (value : string, type : string) => void
    values : Object
}

const FilterBox : React.FC<FilterBoxProps> = ({
    options, name, handler, cls, values
}) => {

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
        <div className={`${cls} flex flex-col items-start`}>
            <span className="lg:text-white text-gray-800 mr-1">{titleTranslator(name)}</span>
            <Selecter 
                options={options}
                name={name}
                setter={handler}
                values={values}
                cls="mt-[5px] w-full"
                optionsListCls="!z-50"
            />
        </div>
    )
}

export default FilterBox;