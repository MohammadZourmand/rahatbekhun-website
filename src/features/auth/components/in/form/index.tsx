'use client'

import { GoogleIcon } from "@/assets/icons";
import BlueBtn from "@/components/form/buttons/blue";
import Heading3 from "@/components/elements/headings/h3";
import MyCheckBox from "@/components/form/inputs/checkBox";
import Input from "@/components/form/inputs/input";
import MyLabel from "@/components/form/inputs/label";
import Image from "next/image";
import Link from "next/link";


const SignInForm = () => {
    
    const initialValues = {
        username : '',
        password : '',
        keepSigned : false
    }

    const submitHandler = () => {}

    return (
        <section className="z-[1]  relative bg-gray-50 pt-4 pb-32 mx-auto lg:px-48">
            <header className="mt-16 xs:mx-0 mx-8">
                <Heading3 center={true} cls="lg:w-[20rem] font-extrabold mx-auto text-gray-800 !leading-relaxed" text={"برای تجربه لحظات بهتر وارد حسابت شو !"} />
                <p className="text-center text-gray-500 text-sm mt-5 z-[1]">
                    حساب کاربری راحت بخون برای خودت نداری ؟ همین الان از
                    <Link href={"/sign-up"}> اینجا </Link>
                    ثبت نام کن.
                </p>
            </header>
            <main className="relative">
                <Image 
                    src={"/images/login/form-bg.webp"}
                    className="absolute xs:w sm:block hidden xl:-top-40 xl:right-48 sm:-top-40 sm:-right-0 md:right-24 lg:right-0 z-[-1] opacity-10"
                    alt="pink-background"
                    width={620}
                    height={680}
                />
                <Image 
                    src={"/images/login/circle.webp"}
                    className="absolute -top-56 right-8 xl:-top-24 xl:right-48 sm:-top-24 sm:right-16 z-[-1] animate-slowSpin"
                    alt="pink-background"
                    width={25}
                    height={25}
                />
                {/* the blew code is Formik & Form */}
                {/* <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                >
                    <Form className="relative z-[1] flex flex-col bg-white sm:max-w-lg sm:mx-auto xs:mx-6 mx-1 shadow-all-lg shadow-[#e5e7eb] rounded-lg xs:px-16 px-4 xs:py-12 py-6 mt-16">  
                            <Image 
                                src={"/images/login/dot.webp"}
                                className="absolute sm:block -top-16 -right-16 z-[-1] animate-goAndBack"
                                alt="نقطه-چین"
                                width={33}
                                height={63}
                            />
                            <Image 
                                src={"/images/login/zigzag.webp"}
                                className="absolute -top-48 left-4 xl:-left-40 sm:-left-16 md:-left-28 z-[-1] animate-goAndBack"
                                alt="خط-خمیده"
                                width={32}
                                height={17}
                            />
                            <Image 
                                src={"/images/login/man-1.webp"}
                                className="absolute sm:block hidden top-32 xl:-left-56 sm:-left-16 md:-left-32"
                                alt="مرد-در-حال-اشاره-کردن"
                                width={130}
                                height={250}
                            />
                            <Image 
                                src={"/images/login/man-2.webp"}
                                className="absolute sm:block z-[-1] -top-20 right-0 w-20 sm:w-24 sm:top-24 xl:-right-56 sm:-right-16 md:-right-32"
                                alt="پسر-درحال-کار-با-لپتاپ"
                                width={96}
                                height={118}
                            />
                            <Link href={"/sign-up"} className="xs:mx-8 relative overflow-hidden hover:after:w-[110%] hover:text-white transition-all after:transition-all after:duration-500 duration-500 after:absolute after:-top-5 after:left-0 after:w-1/6 after:h-[200%] after:rounded-r-full after:bg-baby-5 bg-gray-100 pr-8 text-gray-500 text-sm after:z-[-1] z-[1] rounded-md py-3 mb-4">
                                <GoogleIcon cls="absolute w-7 h-7 left-0 top-0 ml-3 my-[.5rem]" stroke={"3"} color="white" />
                                با حساب گوگل خودت وارد شو 
                            </Link>
                            <div className="text-sm xs:mx-6 flex xs:justify-between justify-center text-gray-500 mb-7 text-center">
                                <span className="relative bottom-[2px]"> ..... </span>
                                <div className="mx-2 xs:mx-0">
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
                </Formik> */}
            </main>

    </section>
    )
}

export default SignInForm;