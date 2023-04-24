import React from "react";
// Import Swiper React components

import Lottie from "lottie-react";
import ReadingBoy from "@/assets/animation/lottieFiles/reading-boy.json"; 


import Navbar from "../../global/navbar";
import Link from "next/link";
import { ActivityBroken, EditSquare, EditSquareBroken, GameBroken, LeftIcon, UsersBroken } from "@/assets/icons";

const HomeHeader = () => {
  return (
    <header>
      <div className="flex flex-col mx-24 items-center relative overflow-hidden">
        <Navbar />
        <div className="grid grid-cols-12 mx-20 mt-20 mb-8">
          <div className="col-span-6 text-lg flex flex-col justify-center items-start">
            <h2 className="font-black text-[3.2rem] text-gray-700 leading-[1.7]"> درس خوندن با راحت بخون خیلی راحت و لذت بخشه !</h2>
            <p className="mt-4 text-lg text-gray-400 leading-loose" > اینجا با کلی دانش آموز باهوش دیگه که مثل خودت هستن بازی کن حرف بزن و کلی چیز جدید یاد بگیر و پیشرفت کن ! </p>
            <Link href={"/courses"} className="group my-8 flex items-center text-base font-semibold bg-[dodgerblue] text-white p-5 rounded-xl " >
              مشاهده دوره های صفر تا صد
              <LeftIcon color="white" cls="group-hover:-translate-x-2 transition mr-2" />
            </Link>
            <div className="grid grid-cols-12 w-4/5 mx-4 mt-8">
              <div className="col-span-6 flex items-center font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-baby-6/30">
                  <ActivityBroken color="rgb(237 7 139)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  متناسب با روند شما
                </div>
              </div>
              <div className="col-span-6 flex items-center font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-slate-700/30">
                  <UsersBroken color="rgb(51 65 85)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  یادگیری گروهی در تیم
                </div>
              </div>
              <div className="col-span-6 flex items-center mt-8 font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-baby-4/30">
                  <GameBroken color="rgb(244 231 0)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  یادگیری از طریق بازی
                </div>
              </div>
              <div className="col-span-6 flex items-center mt-8 font-semibold text-gray-500">
                <div className="relative w-6 h-6 rounded-full bg-baby-7/30">
                  <EditSquareBroken color="rgb(0 123 255)" cls="absolute -top-2 -right-2" />
                </div>
                <div className="mr-2">
                  سنجش یادگیری با آزمون
                </div>
              </div>
            </div>
          </div>
          <Lottie className="col-span-6" animationData={ReadingBoy} />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;