// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import Slide from "./slide";
import { SlidesInfo, SlidesInfoProps } from "./slidesInfo";

interface SliderProps {
    cls ?: string
}

const Slider : React.FC<SliderProps> = ({cls}) => {
    
    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation]}
                className={`h-40 sm:!mx-20 !mx-2 !px-20 mb-48 ${cls}`}
            >
            {
                SlidesInfo.map((item : SlidesInfoProps) => {
                    return (
                        <SwiperSlide>
                            <Slide
                                text={item.text}
                                icon={item.icon}
                                number={item.number}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    )
}

export default Slider;