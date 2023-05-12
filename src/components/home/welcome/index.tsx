// ? components ==================
import Heading2 from "@/components/global/elements/headings/h2";
import Paragraph from "@/components/global/elements/paragraph";
import WelcomeBoxes from "./box";
import { WelcomeBoxesInfo, WelcomeBoxesInfoProps } from "./boxesInfo";

const Welcome : React.FC = () => {

    return (
        <section className="relative flex flex-col lg:my-12 lg:mx-[80px] lg:text-6xl md:mx-[40px] md:text-6xl sm:mx-[30px] sm:text-5xl xs:mx-[10px] xs:text-[2.45rem] mx-8 text-[2.65rem]">
            <Heading2 cls="mt-8" isNozha={false} text="با راحت بخون درساتو راحت تر بخون !" />
            <Paragraph cls="mt-6" center={true} text="اینجا از اول تا آخر مسیر رو دنبالت هستیم تا کامل یاد بگیری! " />
            <div className="relative grid grid-cols-12 xl:gap-6 gap-6 xl:mx-32 mt-12 mb-64">
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