import { initialValuesFunc } from "./intialvalues"
import { filtersInfo } from "./filtersInfo";
import FilterBox from "./filterBox";
import { useState, Dispatch, SetStateAction } from "react";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { WarningToast } from "@/utils/swal";
import StoryLineBox from "../storyLineBox";
import { subjectsData } from "../data";
import SeasonSetter from "./seasonSetter";

interface FiltersProps {
    setFilters : Dispatch<SetStateAction<string>>
    grade : string
    setShow : Dispatch<SetStateAction<boolean>>
}

const Filters = ({setFilters, grade, setShow} : FiltersProps) => {
    
    const [initialValues, setInitialValues] = useState(initialValuesFunc(grade))

    const changeHandler : (type : string, value: string) => void = (type, value) => {
        setInitialValues((prevState) => {
            if(type === '_subject') {
                return {
                    ...prevState,
                    [type] : value,
                    _season : 'همه'
                }
            }

            return {...prevState, [type] : value,}
        })
    }

    const searchHandler = () => {
        let filters = ''

        Object.entries(initialValues).forEach((item) => {
            if(item[1] !== 'همه') {
                filters += `${item[0]}=${item[1]}&`
            }
        })

        if(filters === '') {
            WarningToast('حداقل یک مورد را تغییر دهید !')
            return false
        }

        setFilters(filters)
        setShow(false)
    } 

    return (
        <div className="grid grid-cols-12 items-start justify-start xs:gap-8 gap-y-8 w-full">
            <StoryLineBox
                clickHandler={(item) => changeHandler('_subject', item)}
                cls="col-span-12 !justify-start pr-2"
                defaultValue={initialValues?._subject}
                data={subjectsData(grade)}
            />
            <SeasonSetter grade={grade} initialValues={initialValues} handler={changeHandler} />
            {
                Object.entries(filtersInfo).map((item, index) => {
                    return (
                        <FilterBox
                            key={index}
                            item={item}
                            handler={changeHandler}
                            cls="sm:col-span-6 col-span-12"
                            values={initialValues}
                        />
                    )
                })
            }
            <IconBtn onClick={searchHandler} cls="!my-0 py-[8px] px-8 self-end col-span-12" iconName="filter" text="اعمال فیلتر"/>
        </div>
    )
}

export default Filters;