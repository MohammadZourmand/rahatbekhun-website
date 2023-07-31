// ? react =======================
import Link from "next/link";
import React from "react";

// ? components ==================
import Navbar from "../../global/navbar";

// ? libraries ===================
import Lottie from "lottie-react";

// ? assets ===================
import { ActivityBroken, EditSquareBroken, GameBroken, LeftIcon, UsersBroken } from "@/assets/icons";
import ReadingBoy from "@/assets/animation/lottieFiles/reading-boy.json"; 
import IconBtn from "@/components/global/elements/buttons/iconBtn";

const HomeHeader = () => {
  return (
    <header>
      <div className="flex flex-col items-center relative overflow-hidden">
        <Navbar isWhite={false} />
        <div className="xl:grid xl:grid-cols-12 flex flex-col-reverse lg:mx-20 lg:mt-20 m-4 mb-8">
          <div className="xl:col-span-6 mt-12 text-lg flex flex-col xl:items-start items-center">
            <h2 className="font-black lg:text-[3.2rem] text-4xl lg:text-right text-center text-gray-700 lg:leading-[1.7] leading-loose"> درس خوندن با راحت بخون خیلی راحت و لذت بخشه !</h2>
            <p className="mt-4 text-lg text-gray-400 leading-loose lg:text-right text-center" > اینجا با کلی دانش آموز باهوش دیگه که مثل خودت هستن بازی کن حرف بزن و کلی چیز جدید یاد بگیر و پیشرفت کن ! </p>
            <IconBtn 
              iconName="left"
              text="مشاهده دوره های صفر تا صد"
            />
            <div className="grid grid-cols-12 items-center w-4/5 mx-4 lg:mt-8 mt-4">
              <div className="sm:col-span-6 col-span-12 flex items-center justify-center font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-baby-6/30">
                  <ActivityBroken color="rgb(237 7 139)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  متناسب با روند شما
                </div>
              </div>
              <div className="sm:col-span-6 col-span-12 flex items-center justify-center sm:mt-0 mt-8 font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-slate-700/30">
                  <UsersBroken color="rgb(51 65 85)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  یادگیری گروهی در تیم
                </div>
              </div>
              <div className="sm:col-span-6 col-span-12 flex items-center justify-center mt-8 font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-baby-4/30">
                  <GameBroken color="rgb(244 231 0)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  یادگیری از طریق بازی
                </div>
              </div>
              <div className="sm:col-span-6 col-span-12 flex items-center justify-center mt-8 font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-baby-7/30">
                  <EditSquareBroken color="rgb(0 123 255)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  سنجش یادگیری با آزمون
                </div>
              </div>
            </div>
          </div>
          <Lottie className="xl:col-span-6" animationData={ReadingBoy} />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;