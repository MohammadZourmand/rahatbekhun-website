
import Heading6 from "@/components/global/elements/headings/h6";
import Link from "next/link";
import { FC, Dispatch, SetStateAction } from "react";
import { userInfo } from "./user";
import UserGradeChooser from "./userGardeChooser";
import FaSpan from "@/components/global/elements/boxes/card/faSpan";

interface UserPopupProps {
    setShow : Dispatch<SetStateAction<boolean>>
}

const UserPopup : FC<UserPopupProps> = ({}) => {
    return (
        <section className={`
            max-w-xl sm:w-[20rem] w-[95vw]
            mx-2 h-96 p-3 shadow-all-md shadow-gray-700/23 backdrop-blur-sm
            rounded-lg animate-comeFromTop bg-white/30 z-50 sm:absolute 
            fixed top-16 md:-left-6 -left-0
        `}>
            <div className="relative w-full h-full flex flex-col justify-center items-center">
                <div className="absolute flex flex-col justify-between top-0 p-2">
                    {UserGradeChooser(userInfo)}
                    <span className="bg-white border-b border-b-gray-300/60 shadow-sm font-semibold py-0.5 px-1 mt-1 rounded-lg text-center text-sm">{userInfo.grade}</span>
                </div>
                <div className="absolute flex justify-between top-12 left-0 p-2 w-full h-32">
                    <div className="flex flex-col">
                        <img src="./images/userGrades/achievement.png" />
                        <FaSpan 
                            value={userInfo.score}
                            cls="bg-white border-b border-b-gray-300/60 py-0.5 px-1 mt-1 rounded-lg text-center text-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <img src="./images/userGrades/crown.png" className="scale-[.8]"/>
                        <FaSpan 
                            value={`${userInfo.subscription} روز`}
                            cls="bg-white border-b border-b-gray-300/60 py-0.5 px-1 mt-1 rounded-lg text-center text-sm"
                        />
                    </div>
                </div>
                <Link
                    href={"./user-panel"}
                    className={`flex flex-col items-center relative top-1`}
                >
                    <div className="bg-white rounded-full">
                        <img
                            src="./images/webLogo.png"
                            width={100}
                            height={100}
                            alt="گروه آموزشی راحت بخون"
                        />
                    </div>
                    <Heading6 
                        text={userInfo.name}
                        cls="mt-2 bg-white rounded-xl font-medium !text-[.9rem] px-2 py-0.5"
                    />
                </Link>
                <div className="absolute bottom-0 left-0 bg-red-600 w-full h-24">
                    
                </div>
            </div>
        </section>
    )
}

export default UserPopup;