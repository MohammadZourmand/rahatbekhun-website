// ? components ====================
import Heading4 from "@/components/global/elements/headings/h4";
import LiTickIcon from "@/components/global/elements/lists/liTickIcon";
import { ListInfo, ListInfoProps } from "../../data/home/gameLearningInfo";
import Paragraph from "@/components/global/elements/paragraph";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import Image from "next/image";

const GameLearning = () => {

    return (
        <section className="grid grid-cols-12 justify-center items-center text-center lg:mt-24 mt-12 xl:mx-48 lg:mx-28 md:mx-[40px] sm:mx-[30px] xs:mx-[10px] mx-8">
            <div className="relative md:col-span-6 col-span-12">
                <div className="relative mx-auto 2xl:w-[500px] 2xl:h-[500px] lg:w-96 lg:h-96 md:w-80 md:h-80 w-full xs:h-[500px] h-96">
                    <Image
                        src={"/images/home/student-is-playing.jpg"}
                        alt=""
                        fill
                    />
                </div>
                <div className="absolute lg:right-12 lg:bottom-12 md:right-8 md:bottom-8 xs:right-6 xs:bottom-6 right-4 bottom-4 bg-white p-2 rounded-full shadow-md">
                    <Image
                        src={"/images/home/rocket.png"}
                        className="md:w-20 md:h-20 xs:w-32 xs:h-32 w-16 h-16"
                        alt=""
                        width={64}
                        height={64}
                    />
                </div>
            </div>
            <div className="flex flex-col md:col-span-6 col-span-12">
                <Heading4 cls="!leading-relaxed xl:ml-48 lg:ml-18 md:!text-right !text-center" text={"لذت واقعی درس خوندن اینجا با بازی کردن اتفاق می افته !"} />
                <Paragraph cls="!font-medium !leading-loose xl:ml-36 lg:ml-8 mt-4 md:!text-right !text-center" text="اگر از نوشتن کاربرگ و دیدن فیلم های مختلف خسته شدی کافیه با بازی از اینجا یاد بگیری !" />
                <ul className="text-gray-700 font-semibold mt-6 space-y-5">
                    {
                        ListInfo.map((item : ListInfoProps) => <LiTickIcon key={item?.id} text={item?.text} />)
                    }
                </ul>
                <IconBtn 
                    href="/games"
                    text="بریم بازی"
                    cls="self-center lg:self-start"
                    iconName="left"
                />
            </div>
        </section>
    )
}

export default GameLearning;