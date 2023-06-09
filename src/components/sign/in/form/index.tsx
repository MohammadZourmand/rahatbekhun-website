import BlueBtn from "@/components/global/elements/buttons/blue";
import Heading3 from "@/components/global/elements/headings/h3";
import MyCheckBox from "@/components/global/elements/inputs/checkBox";
import Input from "@/components/global/elements/inputs/input";
import MyLabel from "@/components/global/elements/inputs/label";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Form, Formik } from "formik";
import Link from "next/link";

interface SignInFormProps {

}


const SignInForm : React.FC<SignInFormProps> = () => {
    
    const initialValues = {
        username : '',
        password : '',
        keepSigned : false
    }

    const submitHandler = () => {}

    return (
        <section className="bg-gray-50 pt-4 pb-32 mx-auto lg:px-48">
            <header className="mt-16">
                <Heading3 center={true} cls="lg:w-[20rem] font-extrabold mx-auto text-gray-800 !leading-relaxed" text={"برای تجربه لحظات بهتر وارد حسابت شو !"} />
                <p className="text-center text-gray-500 text-sm mt-5">
                    حساب کاربری راحت بخون برای خودت نداری ؟ همین الان از
                    <Link href={"/sign-up"}> اینجا </Link>
                    ثبت نام کن.
                </p>
            </header>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
            >
                <Form className="flex flex-col bg-white max-w-lg mx-auto shadow-all-lg shadow-[#e5e7eb] rounded-lg px-16 py-12 mt-16">  
                    <Link href={"/sign-up"} className="mx-8 relative overflow-hidden hover:after:w-[110%] hover:text-white transition-all after:transition-all after:duration-500 duration-500 after:absolute after:-top-5 after:left-0 after:w-1/6 after:h-[200%] after:rounded-r-full after:bg-baby-5 bg-gray-100 pr-8 text-gray-500 text-sm after:z-[-1] z-[1] rounded-md py-3 mb-4">
                        <IconBrandGoogle className="absolute left-0 top-0 ml-3 my-[.6rem]" stroke={3} color="white" />
                        با حساب گوگل خودت وارد شو 
                    </Link>
                    <div className="text-sm mx-6 flex justify-between text-gray-500 mb-7 text-center">
                        <span className="relative bottom-[2px]"> ..... </span>
                        <div>
                            یا با ایمیل خودت از 
                            <Link className="hover:text-baby-9" href={"/sign-up"}> اینجا </Link>
                            ثبت نام کن !
                        </div>
                        <span className="relative bottom-[2px]"> ..... </span>
                    </div>
                    <MyLabel text="نام کاربری :" cls="mb-3 font-medium" htmlFor="username" />
                    <Input
                        fieldCls="!py-4"
                        placeholder={"نام کاربری خودت رو اینجا وارد کن !"}
                        name={"username"} 
                    />
                    <MyLabel text="رمز عبور :" cls="mt-6 mb-3 font-medium" htmlFor="username" />
                    <Input
                        fieldCls="!py-4"
                        placeholder={"رمز خودت رو اینجا وارد کن !"}
                        name={"password"} 
                    />
                    <MyCheckBox
                        text="حساب کاربری من را فعال نگهدار !" 
                        textCls="!text-gray-700 !text-sm"
                        cls="mt-8 self-center"
                    />
                    <BlueBtn cls="mt-8 w-full" text={"ورود به سایت"} />
                    <Link className="self-center text-gray-500 text-sm mt-5 block" href={"/forgot-password"}>
                        رمز عبورم رو فراموش کردم !
                    </Link>
            </Form>
        </Formik>
    </section>
    )
}

export default SignInForm;