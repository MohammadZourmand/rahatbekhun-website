'use client'

import BlueBtn from "@/components/form/buttons/blue";
import Heading5 from "@/components/elements/headings/h5";
import Input from "@/components/form/inputs/input";
import Paragraph from "@/components/global/elements/paragraph";

interface MainProps {
    cls ?: string
}

const Main = ({cls} : MainProps) => {

    const initialValues = {
        name : '',
        email : '',
        comment : '' 
    }

    const FormHandler = (props : any) => {
        return 
    }

    return (
        <div className={`${cls} lg:p-0 p-6 xl:col-span-8 lg:col-span-7 col-span-12`}>
            <div className="mb-10">
                <Heading5 cls="text-gray-700 !text-[2.8rem] lg:!text-right !text-center leading-normal !font-black" text="با ما در تماس باشید !" />
                <Paragraph 
                    text="سوال یا پیشنهادی دارید یا فقط قصد دارید یه سلامی بکنید ؟ در هر صورت ما آماده ایم تا حرف شما را بشنویم ."
                    cls="font-medium mt-8 lg:!text-right !text-center"
                />
            </div>
            {/* <Formik
                initialValues = {initialValues}
                onSubmit={FormHandler}
            >
                <Form className="grid grid-cols-12 gap-6">
                    <Input name="name" cls="sm:col-span-6 col-span-12" placeholder="نام شما"/>
                    <Input name="email" cls="sm:col-span-6 col-span-12" placeholder="ایمیل شما"/>
                    <Input name="subject" cls="col-span-12" placeholder="موضوع پیام"/>
                    <Input as={"textarea"} name="comment" fieldCls="" cls="col-span-12 h-36" placeholder="متن پیام" />
                    <BlueBtn cls="lg:mr-0 md:justify-self-start w-full md:w-[unset] text-center mt-4 md:col-span-4 col-span-12 px-8" text="ارسال پیام"/>
                </Form>
            </Formik> */}
        </div>
    )
}

export default Main;