// ? react =======================
import Link from "next/link";
import {useState, FC} from "react";

// ? components ==================

// ? assets ======================
import { CategoryBroken, SearchBrokenIcon } from "@/assets/icons";
import WindowSize from "@/components/global/functions/windowSize";
import MobileNavbar from "..";

interface FloatBtnProps {
    cls ?: string
}


const FloatBtn : FC<FloatBtnProps> = ({cls}) => {

    const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>()

    return (
        <>
            <div className={`${cls} hover:scale-[1.2] cursor-pointer bg-baby-9 fixed bottom-0 left-0 p-2
                rounded-full sm:w-12 sm:h-12 w-10 h-10 text-center nozha transition duration-500 z-[9999]
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