import { FC, useEffect, useState } from "react";

import { Form, Formik } from "formik";

import { searchFormInitialValues as initialState, searchFormSelectboxOptions, searchFormInitialValuesProps as valuesType} from "./initialvalues";
import { setSelectBoxTitle } from "./setSelectboxTitle";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { typeChecker } from "./typeChecker";
import { WarningToast } from "@/components/lib/swal";
import SelectBox from "@/components/global/elements/inputs/selectBox";

const AdvancedSearchFrom : FC = () => {

    const submitHandler = () => {
        WarningToast("جستجو ناقص انجام شد !")
    }

    // * get queries and send to server and get&set data
    useEffect(() => {

    }, [])

    const [initialValues , setInitialValues] = useState<valuesType>(initialState)

    const selectboxesChangeHandler : (type : string, value: string) => void = (type, value) => {
        
        console.log(type, value)

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
                            typeChecker(values[0] , initialValues._type) && <div key={index} className="col-span-4 my-2 flex items-center justify-between">
                                <span className="relative text-lg ml-6 font-semibold text-white my-6">{setSelectBoxTitle(values[0])}</span>
                                <SelectBox
                                    items={selectboxItemsFinder().map((item, index) => {
                                        return {id : index, text : item}
                                    })}
                                    selected={[values[0], values[1]]}
                                    setSelected={selectboxesChangeHandler}
                                    cls="h-12 w-56"
                                    textBtnCls="text-base"
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