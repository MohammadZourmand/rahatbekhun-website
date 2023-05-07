// ? components ==================
import Slide from "./slide";
import { teachersDetails } from "./slidersDetails";

// ? libraries ===================
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// ? types  ======================
import { classOfferedSliderType } from "@/types/home";

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
                teachersDetails.map((item : classOfferedSliderType, index : number) => (
                    <SwiperSlide key={index}>
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