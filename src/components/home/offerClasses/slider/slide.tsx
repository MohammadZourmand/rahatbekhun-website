import PN from "persian-number"

import { classOfferedSliderType } from "@/types/home";

const Slide : React.FC<classOfferedSliderType> = ({
    ageCategory,
    sessions,
    price,
    name,
    details,
    image
}) => {

    return (
        <section className="grid grid-flow-row grid-rows-6 grid-cols-12 rounded-[2rem] bg-white shadow-lg shadow-babyTransparent-2 h-full w-full">
            {/* image part */}
            <div className="overflow-hidden row-span-3 col-span-12 rounded-t-[2rem]">
                <img className="overflow-hidden" src={image} alt="" />
            </div>
            {/* text part */}
            <div className="grid-rows-3 col-span-12 flex flex-col xl:p-8 p-4">
                <header className="">
                    <h2 className="roosta text-baby-1 text-2xl">{name}</h2>
                </header>
                <main className="mt-6 mb-8">
                    <p className="text-slate-900 leading-loose text-base">{details}</p>
                </main>
                <footer className="grid grid-cols-12 gap-4 border-t px-6 py-4">
                    <div className="col-span-4">
                        <div className={`roosta ${ageCategory?"text-2xl mb-[2px]":"text-xl mb-[6px]"} text-baby-6`}>{ageCategory ? PN.convertEnToPe(ageCategory) : "ندارد"}</div>
                        <div className="text-[.94rem] text-slate-700"> گروه سنی </div>
                    </div>
                    <div className="col-span-4">
                        <div className={`roosta ${sessions?"text-2xl mb-[2px]":"text-xl mb-[6px]"} text-baby-4`}>{sessions ? PN.convertEnToPe(sessions) : "نامشخص"}</div>
                        <div className="text-[.94rem] text-slate-700"> جلسات </div>
                    </div>
                    <div className="col-span-4">
                        <div className={`roosta ${price?"flex items-center text-2xl mb-[2px]":"text-xl mb-[6px]"} text-baby-2`}>
                            {price ? PN.convertEnToPe(price) : "رایگان"}
                            {price && <span className={"!text-xs mr-3"}> هزار <br /> تومان </span> }
                        </div>
                        <div className="text-[.94rem] text-slate-700 "> قیمت </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Slide;