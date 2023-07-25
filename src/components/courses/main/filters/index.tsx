import { Form, Formik } from "formik"
import { coursesFilteringTitles } from "./intialvalues"
import { filtersInfo } from "./filtersInfo";
import FilterBox from "./filterBox";
import { useState } from "react";

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
            onSubmit={() => {}}
        >
            <Form className="col-span-12">
                <fieldset className="grid grid-cols-10 w-full">
                    {
                        Object.entries(filtersInfo).map((item, index) => {
                            return (
                                item[0] !== "search" && <FilterBox
                                    key={index}
                                    name={item[0]}
                                    options={item[1]}
                                    handler={changeHandler}
                                    cls="col-span-2"
                                    values={initialValues}
                                />
                            )
                        })
                    }
                </fieldset>
            </Form>
        </Formik>
    )
}

export default Filters;