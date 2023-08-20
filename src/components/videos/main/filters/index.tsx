import { Form, Formik } from "formik"
import { coursesFilteringTitles } from "./intialvalues"
import FilterBox from "./filterBox";
import { useState, Dispatch, SetStateAction } from "react";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { WarningToast } from "@/components/lib/swal";
import { filtersInfo } from "./filtersInfo";
import { FilterBrokenIcon } from "@/assets/icons";

interface FiltersProps {
    showFilters : boolean
    setShowFilters : Dispatch<SetStateAction<boolean>>
}

const Filters : React.FC<FiltersProps> = ({setShowFilters, showFilters}) => {
    
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
            <Form className={`${showFilters && "!block "} px-2 py-8 xs:px-8 lg:p-0 lg:w-full w-[96vw] lg:block hidden fixed top-16 mx-auto lg:backdrop-blur-0 backdrop-blur-md bg-gray-100/90 z-50 lg:z-0 lg:bg-transparent lg:absolute xl:-top-48 lg:-top-40 rounded-lg`}>
                <fieldset className="grid grid-cols-10 gap-8 w-full">
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