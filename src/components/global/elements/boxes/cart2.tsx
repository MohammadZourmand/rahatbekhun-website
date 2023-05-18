// ? libraries ===================
import PN from "persian-number"

// ? types  ======================
import { Cart2Type } from "@/types/home";

// ? assets ======================
import { ClockBroken, FolderBroken, LeftIcon, Star } from "@/assets/icons";
import Heading6 from "@/components/global/elements/headings/h6";
import Paragraph from "@/components/global/elements/paragraph";
import Heading4 from "../headings/h4";


const Cart2 : React.FC<Cart2Type> = ({
    subject,
    name,
    image,
    cls,
    category,
    date,
}) => {


    return (
        <section className={`${cls} group rounded-lg bg-white shadow-lg`}>
            {/* image part */}
            <div className="relative overflow-hidden h-56 rounded-t-lg">
                <img className="overflow-hidden group-hover:scale-105 transition duration-500" src={image} alt="" />
            </div>
            {/* text part */}
            <div className="flex flex-col xl:p-4 p-3">
                <header className="flex">
                    <div className={`justify-self-start text-sm bg-baby-11/20 font-semibold text-baby-11 px-3 py-1 rounded`}>{category}</div>
                </header>
                <main className="mt-8">
                    <Heading6 text={subject} /> 
                </main>
                <footer className={`flex items-center justify-between gap-4  pt-4 pb-1`}>
                    <div className="flex mt-4 mb-4 items-center">
                        <img className="w-9 h-9 border-2 border-gray-200 shadow-xl rounded-full" src="./images/home/teachers/mohammad-zourmand.jpg" alt="suthor" />
                        <Paragraph cls="text-gray-600 text-xs mr-2" text={name} />
                    </div>
                    <div className="flex items-center">
                        <Paragraph cls="font-medium text-sm mt-0.5" text={PN.convertEnToPe(date)} />
                        <ClockBroken cls="mr-1 w-5 h-5" color={"#94a3b8"} />
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Cart2;