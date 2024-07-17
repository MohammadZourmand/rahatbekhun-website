import Image from "next/image";
import SentenceSlider from "./slider";

const Sentences = () => {

    return (
        <section className="relative flex items-center bg-baby-9/80 xl:px-16 h-[35rem] overflow-hidden">
            <Image
                className="absolute left-0 top-0 w-[400%] h-full -z-10"
                src={"/images/blog/blank-business-cards-cup-coffee-wooden-table-corporate-stationary-branding-mock-up.webp"}
                alt="read-book-table-education"
                fill
            />
            <SentenceSlider />
        </section>
    )
}

export default Sentences;