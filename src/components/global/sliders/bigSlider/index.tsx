import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Autoplay } from "swiper";
import PinkWave from "../../waves/pinkWave";
import WhiteWave from "../../waves/whiteWave";
import Navbar from "../../navbar";
import MovingText from "react-moving-text"

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
        <SwiperSlide className="!overflow-hidden">
            <div className="flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/kid-in-online-course.webp')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh] ">
            <MovingText
                type="fadeInFromTop"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <div>
                    <h2 className="text-center text-[5rem] leading-relaxed nozha text-[yellow] text-shadow">
                        دوره های آموزشی جذاب <br /> برای دانش آموز دلبند شما
                    </h2>
                </div>
            </MovingText>
            </div>
        </SwiperSlide>
        <SwiperSlide className="!overflow-hidden">
            <div className="flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/student-doing-homework.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh] ">
            <MovingText
                type="fadeInFromTop"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <div>
                    <h2 className="text-center text-[5rem] leading-relaxed nozha text-[yellow] text-shadow">
                        کاربرگ هایی متنوع و جذاب <br /> برای تمام مقاطع ابتدایی
                    </h2>
                </div>
            </MovingText>
            </div>
        </SwiperSlide>
        <SwiperSlide className="!overflow-hidden">
            <div className="flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/drawing-by-desk.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh] ">
            <MovingText
                type="fadeInFromTop"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <div>
                    <h2 className="text-center text-[5rem] leading-relaxed nozha text-[yellow] text-shadow">
                        آزمون های متعدد با سوالات خلاقانه <br /> برای تکمیل یادگیری شما
                    </h2>
                </div>
            </MovingText>
            </div>
        </SwiperSlide>
        <SwiperSlide className="!overflow-hidden">
            <div className="flex animate-scaleToScreen items-center justify-center bg-[url('/images/home/Education-Video-Games.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[115vh] ">
            <MovingText
                type="fadeInFromTop"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <div>
                    <h2 className="text-center text-[5rem] leading-relaxed nozha text-[yellow] text-shadow">
                        یادگیری و آموزش از طریق بازی <br /> برای اولین بار در ایران
                    </h2>
                </div>
            </MovingText>
            </div>
        </SwiperSlide>
        <WhiteWave cls="absolute xl:-bottom-[128px] lg:-bottom-[100px] md:-bottom-[70px] sm:-bottom-[50px] xs:-bottom-[30px] -bottom-[22px] scale-y-[.6] z-[3]"/>
        <PinkWave cls="absolute xl:-bottom-[116px] lg:-bottom-[90px] md:-bottom-[60px] sm:-bottom-[40px] xs:-bottom-[20px] -bottom-[14px] scale-y-[.62] z-[2]" />
      </Swiper>
    </>
  );
}

export default BigSlider;