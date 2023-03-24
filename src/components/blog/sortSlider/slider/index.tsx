// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import Slide from "./slide";
import { SlidesInfo, SlidesInfoProps } from "./slidesInfo";

interface SliderProps {

}

const Slider : React.FC<SliderProps> = ({}) => {
    
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
                className="h-40 !mx-20 !px-20 !mt-48 mb-48"
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