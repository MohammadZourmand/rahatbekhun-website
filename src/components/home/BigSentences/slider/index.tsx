// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import Slide from "./slide";
import { sentencesType } from "@/types/home";
import { Autoplay } from 'swiper';
import { scientists } from "../../../data/home/sentencesSliderData";

const SentenceSlider : React.FC = () => {

    return (
        <Swiper
            slidesPerView={1}
            id="sentenceSlider"
            modules={[Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="flex items-center justify-center h-full w-full sentence-slider"
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