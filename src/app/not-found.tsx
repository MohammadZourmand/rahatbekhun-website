'use client'
import dynamic from "next/dynamic";

import { NextPage } from "next";
import Link from "next/link";

import Navbar from "@/components/navigation/navbar";
import Paragraph from "@/components/global/elements/paragraph";
import Heading4 from "@/components/elements/headings/h4";

import error404 from "@/animations/error-404.json";
import Footer from "@/components/navigation/footer";

// ? libraries ===================
import { Lottie } from "lottie-react";


const UndefinedPage : NextPage = () => {

    return (
        <>
            <Navbar isWhite={false} />
            <div className="grid grid-cols-12 items-center justify-center lg:mt-8 md:mt-16 mt-8 lg:mx-36 sm:mx-12 mx-6">
                <Lottie className="sm:col-span-6 col-span-12" src={error404} />
                <div className="sm:col-span-6 col-span-12 flex flex-col sm:items-start items-center">
                    <Heading4 text="صفحه مورد نظرت پیدا نشد !" />
                    <Paragraph cls="font-medium mt-4 leading-loose sm:!text-right !text-center" text="شاید آدرس صفحه رو اشتباه وارد کردی یا شاید این صفحه قدیمی هست ! شایدم ما داریم روی این صفحه کار می کنیم ولی در هر صورتی این صفحه الان وجود نداره که باز بشه برات !" />
                    <Link className="text-baby-9 font-semibold mt-4 block" href={"/"}> برگردیم به خانه </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UndefinedPage;