import { Form, Formik } from "formik"
import { coursesFilteringTitles } from "./intialvalues"
import { filtersInfo } from "./filtersInfo";
import FilterBox from "./filterBox";
import { useState } from "react";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { WarningToast } from "@/components/lib/swal";

interface FiltersProps {

}

const Filters : React.FC<FiltersProps> = () => {
    
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
            <Form className="absolute -top-48 xs:p-8 w-full rounded-lg">
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
                    <IconBtn cls="my-0 py-[8px] px-8 self-end lg:col-span-2 col-span-10" iconName="filter" text="فیلتر"/>
                </fieldset>
            </Form>
        </Formik>
    )
}

export default Filters;