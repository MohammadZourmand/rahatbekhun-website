// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import Slide from "./slide";
import { classOfferedDetails } from "./slidersDetails";
import { classOfferedSliderType } from "@/types/home";
import { Autoplay } from 'swiper';

const TeachersSlider : React.FC = () => {

    return (
        <Swiper
            id="teachersSlider"
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                568: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            className="h-[28rem] xl:mt-24 mt-2 xl:!mx-16 !mx-4"
            dir="rtl"
        >
            {
                classOfferedDetails.map((item : classOfferedSliderType) => (
                    <SwiperSlide>
                        <Slide
                            name={item.name}
                            details={item.details}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TeachersSlider;