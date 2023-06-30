import { FC } from "react"
import Navbar from "../../global/navbar"
import Heading1 from "@/components/global/elements/headings/h1"
import Heading2 from "@/components/global/elements/headings/h2"
import Heading3 from "@/components/global/elements/headings/h3"


const AdvancedSearchHeader : FC = () => {

    return (
        <header className="relative h-[46rem] rounded-b-[100%] overflow-hidden">
            {/* // * background */}
            <img className="absolute -top-32 left-0 w-full h-[120%]" src="./images/search/kids-around-school-table.jpg" alt="kids-learning-teamwork" />
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70"></div>
            {/* // * head of header :( navbar & text-headings  */}
            <Navbar isWhite={true} />
            <Heading2
                cls="relative z-10 text-white text-center !mt-16 mx-auto nozha"
                text="بگرد و بیاب و بخون با راحت بخون !" 
            />
            {/* // * searching Form  */}
        </header>
    )
}

export default AdvancedSearchHeader