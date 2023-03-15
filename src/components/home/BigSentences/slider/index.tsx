// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import Slide from "./slide";
import { sentencesType } from "@/types/home";
import { Autoplay, Navigation } from 'swiper';
import { scientists } from "./slidersDetails";

const SentenceSlider : React.FC = () => {

    return (
        <Swiper
            slidesPerView={1}
            id="sentenceSlider"
            modules={[Autoplay, Navigation]}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            className="flex items-center justify-center sm:mt-16 mt-4 h-full w-full"
            dir="rtl"
        >
            {
                scientists.map((item : sentencesType, index : number) => (
                    <SwiperSlide key={index}>
                        <Slide
                            name={item.name}
                            sentence={item.sentence}
                            image={item.image}
                            job={item.job}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SentenceSlider;