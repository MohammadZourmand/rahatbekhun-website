import { Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { searchFormInitialValues as initialState, searchFormSelectboxOptions, searchFormInitialValuesProps as valuesType} from "./initialvalues";
import SelectBox from "@/components/global/elements/inputs/selectBox";

const AdvancedSearchFrom : FC = () => {

    const submitHandler = () => {}

    // * get queries and send to server and get&set data
    useEffect(() => {

    }, [])

    const [initialValues , setInitialValues] = useState<valuesType>(initialState)

    const selectboxesChangeHandler : (e: {id : number, text : string}, type: string) => void = (e, type) => {
        setInitialValues((prevState) => {
            return {
                ...prevState,
                [type] : e.text
            }
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            <Form>
                <SelectBox 
                    items={searchFormSelectboxOptions.type.map((item, index) => {
                        return {id : index, text : item}
                    })}
                    selected={['type', searchFormSelectboxOptions.type[0]]}
                    setSelected={selectboxesChangeHandler}
                ></SelectBox>
            </Form>
        </Formik>
    )
}

export default AdvancedSearchFrom