import Paragraph from "@/components/global/elements/paragraph";
import { sentencesType } from "@/types/home";

const Slide : React.FC<sentencesType> = ({
    name,
    sentence,
    image,
    job
}) => {

    return (
        <section className="flex flex-col items-center justify-center h-full">
            <header>
                <img className="!w-20 !h-20 rounded-full" src={image} alt="" />
            </header>
            <main>
                <Paragraph center={true} cls="!text-2xl !leading-loose !mt-6 !font-medium text-white px-64" text={sentence} />
            </main>
            <footer className="flex flex-col items-center gap-2 mt-5">
                <span className="text-xl text-white font-extrabold">{name}</span>
                <span className="text-xs text-gray-200">{job}</span>
            </footer>
        </section>
    )
}

export default Slide;