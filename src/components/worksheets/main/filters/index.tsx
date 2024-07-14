import { coursesFilteringTitles } from "./intialvalues"
import { filtersInfo } from "./filtersInfo";
import FilterBox from "./filterBox";
import { useState, Dispatch, SetStateAction } from "react";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { WarningToast } from "@/utils/swal";

interface FiltersProps {
    setFilters : Dispatch<SetStateAction<string>>
}

const Filters = ({setFilters} : FiltersProps) => {
    
    const [initialValues, setInitialValues] = useState(coursesFilteringTitles)

    const changeHandler : (type : string, value: string) => void = (type, value) => {
        setInitialValues((prevState) => {
            return {
                ...prevState,
                [type] : value
            }
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
    } 

    return (
        <div className={`p-8 lg:p-0 lg:w-full xs:w-[96vw] w-[90vw] lg:block hidden fixed -bottom-16 !z-40 mx-auto lg:backdrop-blur-0 backdrop-blur-md bg-gray-100/90 lg:z-0 lg:bg-transparent lg:absolute xl:-top-48 lg:-top-40 rounded-lg`}>
            <div className="grid grid-cols-10 xs:gap-8 gap-y-8 w-full">
                {
                    Object.entries(filtersInfo).map((item, index) => {
                        return (
                            <FilterBox
                                key={index}
                                name={item[0]}
                                options={item[1]}
                                handler={changeHandler}
                                cls="lg:col-span-2 xs:col-span-5 col-span-10"
                                values={initialValues}
                            />
                        )
                    })
                }
                <IconBtn onClick={searchHandler} type="submit" cls="!my-0 py-[8px] px-8 self-end lg:col-span-2 col-span-10" iconName="filter" text="اعمال فیلتر"/>
            </div>
        </div>
    )
}

export default Filters;