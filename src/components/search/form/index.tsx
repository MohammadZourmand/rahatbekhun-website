import { FC, useEffect, useState } from "react";

import { Form, Formik } from "formik";

import { searchFormInitialValues as initialState, searchFormSelectboxOptions, searchFormInitialValuesProps as valuesType} from "./initialvalues";
import SelectBox from "@/components/global/elements/inputs/selectBox";
import { setSelectBoxTitle } from "./setSelectboxTitle";
import IconBtn from "@/components/global/elements/buttons/iconBtn";

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
            <Form className="mx-48 mt-16 self-center grid grid-cols-12 justify-between gap-x-8">
                {
                    Object.entries(initialValues).map((values, index) => {

                        const selectboxItemsFinder : () => string[] = () => {
                            let selectBoxOptions : string[] = []

                            Object.entries(searchFormSelectboxOptions)?.forEach(options => {
                                if (options[0] === values[0]) selectBoxOptions = options[1]
                            })

                            return selectBoxOptions;
                        }

                        return (
                            <div key={index} className="col-span-4 my-2 flex items-center justify-between">
                                <div className="relative ml-6 font-semibold text-white my-4">{setSelectBoxTitle(values[0])}</div>
                                <SelectBox
                                    items={selectboxItemsFinder().map((item, index) => {
                                        return {id : index, text : item}
                                    })}
                                    selected={[values[0], values[1]]}
                                    setSelected={selectboxesChangeHandler}
                                    cls="h-12 w-56"
                                ></SelectBox>
                            </div>
                        )
                    })
                }
                <IconBtn
                    text="آغاز جست و جو"
                    cls="self-center col-span-12 mx-auto"
                    iconName={"search"}
                />
            </Form>
        </Formik>
    )
}

export default AdvancedSearchFrom