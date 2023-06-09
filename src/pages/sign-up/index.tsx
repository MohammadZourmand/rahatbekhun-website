import SignUp from "@/components/sign/up";
import { NextPage } from "next";
import Head from "next/head";


const SignUpPage : NextPage = () => {

    return (
        <>
            <Head>
                <title> ثبت نام در راحت بخون </title>
            </Head>
            <SignUp />
        </>
    )
}

export default SignUpPage;