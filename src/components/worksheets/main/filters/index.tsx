import { Form, Formik } from "formik"
import { coursesFilteringTitles } from "./intialvalues"
import { filtersInfo } from "./filtersInfo";
import FilterBox from "./filterBox";
import { useState, Dispatch, SetStateAction } from "react";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { WarningToast } from "@/utils/swal";

interface FiltersProps {
    showFilters : boolean
    setShowFilters : Dispatch<SetStateAction<boolean>>
}

const Filters = ({setShowFilters, showFilters} : FiltersProps) => {
    
    const [initialValues, setInitialValues] = useState(coursesFilteringTitles)

    const changeHandler : (type : string, value: string) => void = (type, value) => {
        setInitialValues((prevState) => {
            return {
                ...prevState,
                [type] : value
            }
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={() => {WarningToast("اطلاعات دریافت شد !")}}
        >
            <Form className={`${showFilters && "!block "} p-8 lg:p-0 lg:w-full xs:w-[96vw] w-[90vw] lg:block hidden fixed -bottom-16 !z-40 mx-auto lg:backdrop-blur-0 backdrop-blur-md bg-gray-100/90 lg:z-0 lg:bg-transparent lg:absolute xl:-top-48 lg:-top-40 rounded-lg`}>
                <fieldset className="grid grid-cols-10 xs:gap-8 gap-y-8 w-full">
                    {
                        Object.entries(filtersInfo).map((item, index) => {
                            return (
                                item[0] !== "search" && <FilterBox
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
                    <IconBtn cls="!my-0 py-[8px] px-8 self-end lg:col-span-2 col-span-10" iconName="filter" text="اعمال فیلتر"/>
                </fieldset>
            </Form>
        </Formik>
    )
}

export default Filters;