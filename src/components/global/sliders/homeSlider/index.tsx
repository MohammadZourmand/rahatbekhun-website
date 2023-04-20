import React from "react";
// Import Swiper React components

import Lottie from "lottie-react";
import ReadingBoy from "@/assets/animation/lottieFiles/reading-boy.json"; 


import Navbar from "../../navbar";

const BigSlider = () => {
  return (
    <>
      <div className="grid grid-cols-12 items-center relative h-screen overflow-hidden">
        <Navbar cls={"col-span-12"} />
        <div className="col-span-6">

        </div>
        <Lottie className="col-span-6" animationData={ReadingBoy} />
      </div>
    </>
  );
}

export default BigSlider;