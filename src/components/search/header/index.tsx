import { FC } from "react"

import Navbar from "../../global/navbar"
import Heading2 from "@/components/global/elements/headings/h2"
import AdvancedSearchFrom from "../form"
import Wave from "@/components/global/waves/wave"


const AdvancedSearchHeader : FC = () => {

    return (
        <header className="flex flex-col relative pb-56 overflow-hidden">
            {/* // * background */}
            <div className="absolute bottom-16 top-0 left-0 w-full h-full overflow-hidden -z-10">
                <img className="absolute -top-32 left-0 w-full h-[120%]" src="./images/search/kids-around-school-table.jpg" alt="kids-learning-teamwork" />
                <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70"></div>
            </div>
            {/* // * head of header :( navbar & text-headings  */}
            <Navbar isWhite={true} />
            <Heading2
                cls="relative z-10 text-white text-center !mt-16 mx-auto nozha"
                text="بگرد و بیاب و بخون با راحت بخون !" 
            />
            {/* // * searching Form  */}
            <AdvancedSearchFrom />
            {/* // * White Wave & black wave */}
            <Wave cls={"fill-sky-500 scale-y-[.7] scale-x-[1.2] absolute -bottom-[4.7rem]"} />
            <Wave cls={"fill-white scale-y-[.7] scale-x-[1.2] absolute -bottom-[5rem]"} />
        </header>
    )
}

export default AdvancedSearchHeader