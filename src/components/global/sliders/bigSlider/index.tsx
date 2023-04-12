import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Autoplay } from "swiper";
import PinkWave from "../../waves/pinkWave";
import WhiteWave from "../../waves/whiteWave";
import Navbar from "../../navbar";
import Slide from "./slide";
import { HomeSliderInfo, HomeSliderInfoProps } from "./slidesInfo";

const BigSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="bigSlider relative !h-[115vh] overflow-hidden"
        autoplay={{
            delay : 5400,
            disableOnInteraction : false
        }}
      >
        <Navbar isFixed={true} />
          {
            HomeSliderInfo.map((item : HomeSliderInfoProps) => {


              return (
                <SwiperSlide>
                  <Slide text={item.text} cls={item.cls} />
                </SwiperSlide>
              )
            })
          }
        <WhiteWave cls="absolute xl:-bottom-[128px] lg:-bottom-[100px] md:-bottom-[70px] sm:-bottom-[50px] xs:-bottom-[30px] -bottom-[22px] scale-y-[.6] z-[3]"/>
        <PinkWave cls="absolute xl:-bottom-[116px] lg:-bottom-[90px] md:-bottom-[60px] sm:-bottom-[40px] xs:-bottom-[20px] -bottom-[14px] scale-y-[.62] z-[2]" />
      </Swiper>
    </>
  );
}

export default BigSlider;