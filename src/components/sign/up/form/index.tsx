import BlueBtn from "@/components/global/elements/buttons/blue";
import Heading3 from "@/components/global/elements/headings/h3";
import MyCheckBox from "@/components/global/elements/inputs/checkBox";
import Input from "@/components/global/elements/inputs/input";
import MyLabel from "@/components/global/elements/inputs/label";
import SelectBox from "@/components/global/elements/inputs/selectBox";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Form, Formik } from "formik";
import Link from "next/link";

interface SignUpFormProps {

}


const SignUpForm : React.FC<SignUpFormProps> = () => {
    
    const initialValues = {
        username : '',
        password : '',
        keepSigned : false
    }

    const submitHandler = () => {}

    return (
        <section className="z-[1]  relative bg-gray-50 pt-4 pb-32 mx-auto lg:px-48">
            <header className="mt-16 xs:mx-0 mx-8">
                <Heading3 center={true} cls="lg:w-[20rem] font-extrabold mx-auto text-gray-800 !leading-relaxed" text={"برای خودت یه حساب بساز و پیشرفت کن !"} />
                <p className="text-center text-gray-500 text-sm mt-5 z-[1]">
                    از قبل حساب کاربری راحت بخون داری ؟ همین الان از
                    <Link href={"/sign-in"}> اینجا </Link>
                    وارد حسابت شو.
                </p>
            </header>
            <main className="relative">
                <img className="absolute xs:w sm:block hidden xl:-top-40 xl:right-48 sm:-top-40 sm:-right-0 md:right-24 lg:right-0 z-[-1] opacity-10" src="/images/login/form-bg.webp" alt="" />
                <img className="absolute -top-56 right-8 xs:-top-40 xl:-top-24 xl:right-48 sm:-top-24 sm:right-16 z-[-1] animate-slowSpin" src="/images/login/circle.webp" alt="" />
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                >
                    <Form className="relative z-[1] flex flex-col bg-white sm:max-w-3xl md:mx-auto xs:mx-6 mx-1 shadow-all-lg shadow-[#e5e7eb] rounded-lg xs:px-8 px-4 xs:py-12 py-6 mt-16">  
                            <img className="absolute sm:block -top-16 -right-16 z-[-1] animate-goAndBack" src="/images/login/dot.webp" alt="" />
                            <img className="absolute -top-48 left-4 xl:-left-40 sm:-left-0 lg:-left-28 z-[-1] animate-goAndBack" src="/images/login/zigzag.webp" alt="" />
                            <img className="absolute lg:block hidden top-32 xl:-left-56 lg:-left-32" src="/images/login/man-1.webp" alt="" />
                            <img className="absolute lg:block sm:hidden block z-[-1] -top-20 right-0 w-20 sm:w-24 sm:top-24 xl:-right-56 sm:-right-16 md:-right-32" src="/images/login/man-2.webp" alt="" />
                            <Link href={"/sign-up"} className="self-center sm:w-1/2 w-11/12 xs:w-2/3 xs:mx-8 relative overflow-hidden hover:after:w-[110%] hover:text-white transition-all after:transition-all after:duration-500 duration-500 after:absolute after:-top-5 after:left-0 after:w-1/6 after:h-[200%] after:rounded-r-full after:bg-baby-5 bg-gray-100 pr-8 text-gray-500 text-sm after:z-[-1] z-[1] rounded-md py-3 mb-4">
                                <IconBrandGoogle className="absolute left-0 top-0 ml-3 my-[.6rem]" stroke={3} color="white" />
                                با حساب گوگل خودت وارد شو 
                            </Link>
                            <div className="self-center sm:w-1/2 text-sm xs:mx-6 flex xs:justify-between justify-center text-gray-500 mb-7 text-center">
                                <span className="relative bottom-[2px]"> ..... </span>
                                <div className="mx-2 xs:mx-0">
                                    یا با ایمیل خودت از 
                                    <Link className="hover:text-baby-9" href={"/sign-up"}> اینجا </Link>
                                    ثبت نام کن !
                                </div>
                                <span className="relative bottom-[2px]"> ..... </span>
                            </div>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="md:col-span-6 col-span-12 ">
                                    <MyLabel text="نام و نام خانوادگی :" cls="mb-3 font-medium" htmlFor="username" />
                                    <Input
                                        fieldCls="!py-4"
                                        placeholder={"اسم زیبای خودت رو اینجا وارد کن !"}
                                        name={"username"} 
                                    />
                                </div>
                                <div className="md:col-span-6 col-span-12 ">
                                    <MyLabel text="نام کاربری :" cls="mb-3 font-medium" htmlFor="username" />
                                    <Input
                                        fieldCls="!py-4"
                                        placeholder={"با استفاده از حروف انگلیسی یا اعداد یه نام درست کن تا باهاش وارد سایت بشی"}
                                        name={"username"} 
                                    />
                                </div>
                                <div className="md:col-span-6 col-span-12 ">
                                    <MyLabel text="رمز عبور :" cls="mt-6 mb-3 font-medium" htmlFor="username" />
                                    <Input
                                        fieldCls="!py-4"
                                        placeholder={"یک رمز برای حساب خودت بزار !"}
                                        name={"password"} 
                                    />
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <MyLabel text="تکرار رمز عبور :" cls="mt-6 mb-3 font-medium" htmlFor="username" />
                                    <Input
                                        fieldCls="!py-4"
                                        placeholder={"تکرار رمزت رو اینجا وارد کن !"}
                                        name={"password"} 
                                    />
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <MyLabel text="شماره موبایل" cls="mt-6 mb-3 font-medium" htmlFor="username" />
                                    <Input
                                        fieldCls="!py-4"
                                        placeholder={"یک شماره موبایل برای موارد ضروری ..."}
                                        name={"mobile"} 
                                    />
                                </div>
                                <SelectBox
                                    cls="md:col-span-6 col-span-12  flex-col !items-start"
                                    labelCls="mt-6 mb-3 font-medium !text-gray-900 !text-base"
                                    label="شما چه کاره هستید ؟"
                                    btnCls="w-full !bg-gray-100 !py-3 !text-gray-600 mt-3"
                                    items={[
                                        {id : 1 , text : "دانش آموز"},
                                        {id : 2 , text : "آموزگار"},
                                        {id : 3 , text : "والد دانش آموز"},
                                        {id : 4 , text : "دیگر"},
                                    ]}
                                />
                                <MyCheckBox
                                    text="قوانین سایت را قبول دارم و به آنها احترام می گذارم ." 
                                    textCls="!text-gray-700 !text-sm"
                                    cls="mt-8 justify-self-center self-center md:col-span-6 col-span-12 "
                                />
                                <Link className="lg:col-span-6 col-span-12 lg:text-left text-center text-gray-500 text-sm block lg:mt-8 mt-5" href={"/forgot-password"}>
                                    مشاهده قوانین سایت راحت بخون
                                </Link>
                                <BlueBtn cls="col-span-12 mt-8 w-full" text={"ثبت نام در سایت"} />

                            </div>
                    </Form>
                </Formik>
            </main>

    </section>
    )
}

export default SignUpForm;