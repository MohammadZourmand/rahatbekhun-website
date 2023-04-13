import WhiteWave from "@/components/global/waves/whiteWave";
import SentenceSlider from "./slider";


const Sentences : React.FC = () => {

    return (
        <section data-aos="fade-up" data-aos-duration="3000" className="relative flex items-center bg-[#ed7ac741] xl:px-16 h-[30rem] overflow-hidden">
            <WhiteWave cls="absolute right-0 xl:-top-[128px] lg:-top-[100px] md:-top-[70px] sm:-top-[50px] xs:-top-[30px] -top-[22px] scale-y-[.6] z-[3] !rotate-180" />
            <SentenceSlider />
        </section>
    )
}

export default Sentences;