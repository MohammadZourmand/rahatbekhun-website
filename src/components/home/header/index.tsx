import PinkWave from "./waves/pinkWave";
import WhiteWave from "./waves/whiteWave";

const HomeHeader : React.FC = () => {

    return (
        <header className="flex items-center justify-center bg-[url('/images/home/drawing-by-desk.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[48rem] ">
            <div className="absolute sm:left-[100px] xs:left-[20px] left-[1.5vw] top-16 sm:w-[32rem] sm:h-[32rem] xs:w-[28rem] xs:h-[28rem] w-[90vw] h-[32rem] sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center xs:rounded-[5rem] rounded-[3rem] bg-white">
                <h2 className="roosta text-baby-1 sm:text-[96px] text-[88px] !leading-tight font-extrabold md:text-right text-center">  یادگیری باکیفیت </h2>
                <h3 className="roosta text-baby-4 sm:text-4xl !leading-none text-[1.45rem] my-8"> برای تمامی سنین ابتدایی </h3>
                <button className="btnHoverToRight ">
                    <span className="sm:!text-xl xs:text-xl !text-[1.2rem]"> مشاهده دوره ها </span>
                </button>
            </div>
            <WhiteWave cls="absolute xl:-bottom-[128px] lg:-bottom-[100px] md:-bottom-[70px] sm:-bottom-[50px] xs:-bottom-[30px] -bottom-[22px] scale-y-[.6] z-[3]"/>
            <PinkWave cls="absolute xl:-bottom-[116px] lg:-bottom-[90px] md:-bottom-[60px] sm:-bottom-[40px] xs:-bottom-[20px] -bottom-[14px] scale-y-[.62] z-[2]" />
        </header>
    )
}

export default HomeHeader;