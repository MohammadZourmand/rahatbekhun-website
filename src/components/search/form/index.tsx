import { FC, useEffect, useState } from "react";

import { Form, Formik } from "formik";

import { searchFormInitialValues as initialState, searchFormSelectboxOptions, searchFormInitialValuesProps as valuesType} from "./initialvalues";
import { setSelectBoxTitle } from "./setSelectboxTitle";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { typeChecker } from "./typeChecker";
import { WarningToast } from "@/components/lib/swal";
import SelectBox from "@/components/global/elements/inputs/selectBox";
import SelectBoxDiv from "./selectboxDic";

const AdvancedSearchFrom : FC = () => {

    const submitHandler = () => {
        WarningToast("جستجو ناقص انجام شد !")
    }

    // * get queries and send to server and get&set data
    useEffect(() => {

    }, [])

    const [initialValues , setInitialValues] = useState<valuesType>(initialState)

    const selectboxesChangeHandler : (type : string, value: string) => void = (type, value) => {
        
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
            onSubmit={submitHandler}
        >
            <Form className="2xl:mx-20 mt-16 self-center grid grid-cols-12 justify-between md:gap-x-6">
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
                            typeChecker(values[0] , initialValues._type) && <SelectBoxDiv
                                key={index}
                                itemsFinder={selectboxItemsFinder}
                                changeHandler={selectboxesChangeHandler}
                                values={values}
                            />
                        )
                    })
                }
                <IconBtn
                    text="آغاز جست و جو"
                    cls="self-center col-span-12 mx-auto hover:px-12 z-0"
                    iconName={"search"}
                />
            </Form>
        </Formik>
    )
}

export default AdvancedSearchFrom