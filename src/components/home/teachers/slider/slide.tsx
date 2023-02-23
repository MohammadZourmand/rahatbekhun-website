import { teachersInfoType } from "@/types/home";
import { IconBrandGithub, IconBrandInstagram, IconBrandTelegram, IconUserExclamation } from "@tabler/icons-react";

const Slide : React.FC<teachersInfoType> = ({
    name,
    details,
    image
}) => {

    return (
        <section className="group grid grid-flow-row grid-rows-6 grid-cols-12 rounded-[2rem] bg-white shadow-lg shadow-babyTransparent-2 h-full w-full">
            {/* image part */}
            <div className="relative overflow-hidden row-span-4 col-span-12 rounded-[3rem]">
                <img className="overflow-hidden" src={image} alt="" />
                <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover:bg-babyTransparent-6"></div>
                <div className="flex group-hover:w-full group-hover:translate-y-0 group-hover:translate-x-0 -translate-x-28 transition-all duration-500 translate-y-20 justify-around w-0 absolute bottom-8 px-16">
                    <IconBrandTelegram color="white" className="w-6 h-6" />
                    <IconBrandInstagram color="white" className="w-6 h-6" />
                    <IconBrandGithub color="white" className="w-6 h-6" />
                    <IconUserExclamation color="white" className="w-6 h-6" />
                </div>
            </div>
            {/* text part */}
            <div className="grid-rows-2 col-span-12 flex flex-col items-center xl:p-8 p-4">
                <h2 className="mb-2 text-xl font-bold text-slate-900"> {name} </h2>
                <h2 className="text-sm text-slate-700"> {details} </h2>
            </div>
        </section>
    )
}

export default Slide;