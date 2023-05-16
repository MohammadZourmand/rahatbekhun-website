// ? components ==================
import Heading2 from "@/components/global/elements/headings/h2";
import Paragraph from "@/components/global/elements/paragraph";
import WelcomeBoxes from "./box";
import { WelcomeBoxesInfo, WelcomeBoxesInfoProps } from "./boxesInfo";

const Welcome : React.FC = () => {

    return (
        <section className="relative flex flex-col lg:mt-12 lg:mx-[80px] md:mx-[40px] sm:mx-[30px] xs:mx-[10px] mx-6 lg:text-5xl md:text-4xl sm:text-3xl xs:text-[2.45rem] text-[2.65rem]">
            <Heading2 cls="mt-8 xs:text-xl lg:!text-4xl" isNozha={false} text="با راحت بخون درساتو راحت تر بخون !" />
            <Paragraph cls="mt-6 leading-loose" center={true} text="اینجا از اول تا آخر مسیر رو دنبالت هستیم تا کامل یاد بگیری! " />
            <div className="relative grid grid-cols-12 xl:gap-6 gap-6 xl:mx-32 mt-12">
                {
                    WelcomeBoxesInfo.map((item : WelcomeBoxesInfoProps) => (
                        <WelcomeBoxes item={item} key={item?.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default Welcome;