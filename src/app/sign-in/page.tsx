import SignIn from "@/components/sign/in";
import { NextPage } from "next";
import Head from "next/head";


const SignInPage : NextPage = () => {

    return (
        <>
            <Head>
                <title> ورود به حساب کاربری </title>
            </Head>
            <SignIn />
        </>
    )
}

export default SignInPage;