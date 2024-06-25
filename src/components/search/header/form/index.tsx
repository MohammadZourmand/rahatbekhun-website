import { useEffect, useState } from "react";

import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { WarningToast } from "@/components/lib/swal";
import { loadingsSetter } from "@/store/slices/loadings";

import { searchFormInitialValues as initialState, searchFormSelectboxOptions, searchFormInitialValuesProps as valuesType} from "./initialvalues";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { typeChecker } from "./typeChecker";
import SelectBoxDiv from "./selectboxDiv";

const AdvancedSearchFrom = () => {

    const dispatch = useDispatch()


    const submitHandler = () => {
        dispatch(loadingsSetter("pages"))
        WarningToast("جستجو ناقص انجام شد !")
    }

    // * get queries and send to server and get&set data
    useEffect(() => {

    }, [])

    const [initialValues , setInitialValues] = useState<valuesType>(initialState)

    const selectboxesChangeHandler : (key : string, value: string) => void = (key, value) => {
        
        setInitialValues((prevState) => {
            return {
                ...prevState,
                [key] : value
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
                                name={values[0]}
                                initialState={initialValues}
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