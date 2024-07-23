// import Input from "@/components/global/form/input";
import { Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";


const Search = ({setMenu} : {setMenu : Dispatch<SetStateAction<string>>}) => {

    return (
        (
            <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
                <div onClick={() => setMenu('')} className="z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"></div>
                <Formik initialValues={{value : ''}} onSubmit={() => {}}>
                    <Form className="z-10 w-[90%]">
                        {/* <Input
                            label={"عبارت مورد نظر را جستجو کنید"} 
                            name={"search"} 
                            placeholder={"سعی کنید حداقل ۲ و حداکثر ۴ عبارت وارد کنید !"} 
                            labelCls="rounded text-white bg-gray-600/50 p-2"
                        /> */}
                    </Form>
                </Formik>
            </div>
        )
    )
}

export default Search;