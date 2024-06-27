// ? components ==================
import Navbar from "../../global/navbar";

// ? libraries ===================
import Lottie from "lottie-react";

// ? assets ===================
import ReadingBoy from "@/animations/reading-boy.json"; 
import { Data } from "./boxesData";
import SmallBox from "./smallbox";

// import IconBtn from "@/components/global/elements/buttons/iconBtn";

const HomeHeader = () => {
  return (
    <header>
      <div className="flex flex-col items-center relative overflow-hidden">
        <Navbar isWhite={false} />
        <div className="xl:grid xl:grid-cols-12 flex flex-col-reverse lg:mx-20 lg:mt-20 m-4 mb-8">
          <div className="xl:col-span-6 mt-12 text-lg flex flex-col xl:items-start items-center">
            <h2 className="font-black lg:text-[3.2rem] text-4xl lg:text-right text-center text-gray-700 lg:leading-[1.7] leading-loose"> درس خوندن با راحت بخون خیلی راحت و لذت بخشه !</h2>
            <p className="mt-4 text-lg text-gray-400 leading-loose lg:text-right text-center" > اینجا با کلی دانش آموز باهوش دیگه که مثل خودت هستن بازی کن حرف بزن و کلی چیز جدید یاد بگیر و پیشرفت کن ! </p>
            {/* <IconBtn
              href="/courses"
              iconName="left"
              text="مشاهده دوره های صفر تا صد"
            /> */}
            <div className="grid grid-cols-12 sm:gap-8 gap-y-8 pt-4 items-center w-4/5 mx-4 lg:mt-8 mt-4">
              {
                Data.map((item, index) => (
                  <SmallBox key={index} item={item}/>
                ))
              }
            </div>
          </div>
          <Lottie className="xl:col-span-6" animationData={ReadingBoy} />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;