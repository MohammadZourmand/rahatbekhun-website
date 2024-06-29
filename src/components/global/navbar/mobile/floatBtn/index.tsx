'use client'

// ? react =======================
import {useState} from "react";
import dynamic from "next/dynamic";

// ? components ==================

// ? assets ======================
import { CategoryBroken } from "@/assets/icons";


const MobileNavbar = dynamic(() => import(/* webpackChunkName : "mobile-navbar" */".."))

interface FloatBtnProps {
    cls ?: string
}


const FloatBtn = ({cls} : FloatBtnProps) => {

    const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>()

    return (
        <>
            <div className={`${cls} hover:scale-[1.2] cursor-pointer bg-baby-9 fixed bottom-0 left-0 p-2
                rounded-full sm:w-12 sm:h-12 w-10 h-10 text-center font-nozha transition duration-500 z-[9999]
                flex justify-center items-center m-8 animate-comeFromBottom shadow-all-lg shadow-sky-400`}
                onClick={() => setShowMobileNavbar(true)}
            >
                <CategoryBroken cls={"w-[1.8rem] h-[1.8rem] transition-all duration-500"} color={"white"} />
            </div>
            {
                showMobileNavbar && <MobileNavbar 
                    setShowNavbar={setShowMobileNavbar}
                    showNavbar={showMobileNavbar}
                />
            }
        </>
    )
}

export default FloatBtn;