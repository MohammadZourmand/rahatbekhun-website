
import Heading6 from "@/components/global/elements/headings/h6";
import Link from "next/link";
import { FC, Dispatch, SetStateAction } from "react";
import { userInfo } from "./user";
import UserGradeChooser from "./userGardeChooser";
import FaSpan from "@/components/global/elements/boxes/card/faSpan";
import InfoBox from "./infoBox";
import { EyeBrokenIcon } from "@/assets/icons";

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
                <Link
                    href={"./user-panel"}
                    className={`flex justify-evenly w-full items-center relative top-1`}
                >
                    <div className="bg-white rounded-full">
                        <img
                            src="./images/webLogo.png"
                            width={100}
                            height={100}
                            alt="گروه آموزشی راحت بخون"
                        />
                    </div>
                    <div className="space-y-2">
                        <Heading6 
                            text={userInfo.name}
                            cls="mt-2 bg-gray-800 text-white rounded-xl shadow-all-md font-medium !text-[.9rem] px-2 py-0.5"
                        />
                        <div className="text-sm px-2 py-1 rounded-lg shadow-all-sm">
                            <span className="text-gray-800 font-semibold"> لقب : </span>
                            <FaSpan cls="font-semibold text-gray-900" value={userInfo.userNickname} />
                        </div>
                    </div>
                </Link>
                <div className="grid grid-cols-12  justify-between p-2 w-full mt-2">
                    <div className="flex flex-col col-span-4 items-center">
                        {UserGradeChooser(userInfo)}
                        <span className=" bg-gray-900 text-white border-b border-b-gray-300/60 shadow-all-md shadow-red-500/30 font-semibold py-0.5 px-5 mt-1 rounded-lg text-center">{userInfo.grade}</span>
                        <span className="bg-white border-b border-b-gray-300/60 shadow-sm font-semibold py-0.5 px-2 rounded-b-lg text-center text-sm">درجه</span>
                    </div>
                    <InfoBox subject={"اشتراک"} value={userInfo.subscription + "روز"} img={"./images/userGrades/crown.png"} />
                    <InfoBox subject={"تجربه"} value={userInfo.score} img={"./images/userGrades/experience.png"} />
                </div>
                <div className="bg-red-600 w-full h-24">
                    
                </div>
            </div>
        </section>
    )
}

export default UserPopup;