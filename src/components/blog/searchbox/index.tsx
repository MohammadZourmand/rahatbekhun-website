import SelectBox from "@/components/global/elements/form/selectBox"
import { Form, Formik, Field, ErrorMessage } from "formik"



const SearchBox : React.FC = () => {

    const validateHandler = (values : any) => {
        let errors : { text ?: string } = {}

        if(values.text === "") errors.text = "متن را وارد کنید !"

        console.log(values)

        return errors
    }

    const submitHandler = (values : any) => {
        console.log('submit' + values)
    } 

    return (
        <section className="mt-28 mb-96 mx-24 flex flex-col items-center justify-center">
            <h2 className="text-center bg-baby-2 text-3xl py-6 px-14 text-white font-bold"> دنبال چی میگردی ؟</h2>
            <Formik
                initialValues={{
                    text : "",
                    category : ""
                }}
                validate={validateHandler}
                onSubmit={submitHandler}
            >
                <Form className="bg-baby-2 w-full grid grid-cols-12 gap-4 py-10 px-24">
                    <div className="col-span-6 bg-yellow-500 relative">
                        <Field className={"h-full w-full outline-none px-6 py-5 text-[.9rem] font-light"} name={"text"} placeholder={"قسمتی از چیزی که دنبال آن هستید را وارد کنید !"} />
                        <ErrorMessage component={"div"} className="absolute -bottom-8 right-12 text-white font-bold" name="text" />
                    </div>

                    <SelectBox cls="col-span-4 bg-red-700" />

                    <button className="col-span-2 bg-slate-700 text-center text-xl text-white" type="submit"> تایید </button>
                </Form>
            </Formik>
        </section>
    )
}

export default SearchBox;