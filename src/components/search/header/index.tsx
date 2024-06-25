import Navbar from "../../global/navbar"
import Heading2 from "@/components/global/elements/headings/h2"
import AdvancedSearchFrom from "./form"
import Wave from "@/components/global/waves/wave"

import bg from "./../../../../public/images/search/kids-around-school-table.jpg";

const AdvancedSearchHeader = () => {

    return (
        <header
            style={{
                backgroundImage : `url(${bg.src})`
            }}
            className={`flex flex-col relative pb-56 overflow-hidden`}>
            {/* // * background shadow */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gray-900/60"></div>
            {/* // * head of header :( navbar & text-headings  */}
            <Navbar isWhite={true} />
            <Heading2
                cls="relative z-10 text-white text-center !mt-16 mx-auto nozha"
                text="بگرد و بیاب و بخون با راحت بخون !" 
            />
            {/* // * searching Form  */}
            <AdvancedSearchFrom />
            {/* // * White Wave & black wave */}
            <Wave cls={"fill-sky-500 scale-y-[.7] scale-x-[1.2] absolute lg:-bottom-[4.7rem] sm:-bottom-[2.7rem] xs:-bottom-[1.7rem] -bottom-[.9rem]"} />
            <Wave cls={"fill-white scale-y-[.7] scale-x-[1.2] absolute lg:-bottom-[5rem] sm:-bottom-[3rem] xs:-bottom-[2rem] -bottom-[1.2rem]"} />
        </header>
    )
}

export default AdvancedSearchHeader