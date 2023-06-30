import { Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
import { searchFormInitialValues as initialState, searchFormInitialValuesProps as valuesType} from "./initialvalues";

const AdvancedSearchFrom : FC = () => {

    const submitHandler = () => {}

    // * get queries and send to server and get&set data
    useEffect(() => {

    }, [])

    const [initialValues , setInitialValues] = useState<valuesType>(initialState)

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            <Form>
                
            </Form>
        </Formik>
    )
}

export default AdvancedSearchFrom