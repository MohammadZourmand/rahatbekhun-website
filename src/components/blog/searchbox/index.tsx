import GrayButton from "@/components/global/elements/inputs/button"
import Input from "@/components/global/elements/inputs/input"
import SectionHeader from "@/components/global/elements/header/sectionHeader"
import { IconFileSearch, IconSearch } from "@tabler/icons-react"
import { Form, Formik } from "formik"

const SearchBox : React.FC = () => {

    const validateHandler = (values : any) => {
        let errors : { text ?: string } = {}

        if(values.text === "") errors.text = "متن را وارد کنید !"


        return errors
    }

    const submitHandler = (values : any) => {
        console.log('submit' + values)
    } 

    return (
        <section className="mt-20 mb-12 sm:mx-24 mx-6 flex flex-col items-center justify-center">
            <SectionHeader
                cls="sm:px-6 px-4"
                smallText="داری دنبال چی میگردی ؟"
                largeText="کافیه ۵ تا حرف اولش رو بگی بقیه اش با ما"
                icon1={<IconFileSearch color="rgba(203,213,225,0.6)" className="absolute top-0 left-[24%] -z-[1] rotate-45 scale-[3]" stroke={2} />}
                icon2={<IconSearch color="rgba(203,213,225,0.5)" className="absolute top-0 right-[24%] -z-[1] rotate-[5deg] scale-[2]" stroke={2} />}
            />
            <Formik
                initialValues={{
                    text : "",
                    category : ""
                }}
                validate={validateHandler}
                onSubmit={submitHandler}
            >
                <Form className="w-full grid grid-cols-12 gap-4 py-10 md:px-24">
                    <Input
                        cls="lg:col-span-6 col-span-12"
                        name={"text"}
                        placeholder={"قسمتی از چیزی که دنبال آن هستید را وارد کنید !"}
                    />
                    <GrayButton cls="sm:col-span-2 col-span-5 py-3" />
                </Form>
            </Formik>
        </section>
    )
}

export default SearchBox;