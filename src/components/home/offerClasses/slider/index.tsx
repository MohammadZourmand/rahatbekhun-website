// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import Slide from "./slide";
import { classOfferedDetails } from "./slidersDetails";
import { classOfferedSliderType } from "@/types/home";
import { Autoplay } from 'swiper';
import { onAutoplayTimeLeft, OfferSliderAutoPlay } from "./autoplay";

const OfferSlider : React.FC = () => {



    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            className="h-[36rem] xl:mt-16 mt-2 xl:!mx-12 !mx-4"
            dir="rtl"
        >
            {
                classOfferedDetails.map((item : classOfferedSliderType) => (
                    <SwiperSlide>
                        <Slide
                            name={item.name}
                            details={item.details}
                            image={item.image}
                            sessions={item.sessions}
                            ageCategory={item.ageCategory}
                            price={item.price}
                        />
                    </SwiperSlide>
                ))
            }
            <OfferSliderAutoPlay />
        </Swiper>
    )
}

export default OfferSlider;