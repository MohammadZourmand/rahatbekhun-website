// ? assets =================
import { ChevronLeftCircleBroken } from "@/assets/icons";

// ? components =============
import Heading5 from "@/components/global/elements/headings/h5";
import Paragraph from "@/components/global/elements/paragraph";
import { WelcomeBoxesInfoProps } from "./boxesInfo";

interface WelcomeBoxesProps {
    item : WelcomeBoxesInfoProps
}

const WelcomeBoxes : React.FC<WelcomeBoxesProps> = ({item}) => {

    return (
        <div className={`${item?.bgColor ?? "bg-baby-9"} shadow-[0_35px_60px_-30px_rgba(0,0,0,0.3)] group hover:-translate-y-4 hover:scale-y-[1.01] transition duration-500 flex flex-col px-8 py-8 text-white lg:col-span-3 sm:col-span-6 col-span-12 rounded-lg`}>
            <header className="relative">
                <img className="w-14 h-14" src={item?.icon} alt="" />
                <ChevronLeftCircleBroken cls="absolute top-4 transition left-8 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6" color="white" />
            </header>
            <main className="">
                <Heading5 cls="mt-10 mb-6" center={false} color="text-white" text={item?.title} />
                <div className="relative">
                    <Paragraph cls="" weight="font-normal leading-loose" center={false} color="text-white" text={item?.text} />
                </div>
            </main>
        </div>
    )
}


export default WelcomeBoxes;