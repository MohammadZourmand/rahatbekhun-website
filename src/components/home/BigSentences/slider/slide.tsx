import Paragraph from "@/components/global/elements/paragraph";
import { sentencesType } from "@/types/home";
import Image from "next/image";

const Slide = ({
    name,
    sentence,
    image,
    job
} : sentencesType ) => {

    return (
        <section className="flex flex-col items-center justify-center h-full">
            <header>
                <Image src={image} width={80} height={80} className="rounded-full" alt="جمله-پرمعنا-جمله-اینستاگرامی-جمله-سنگین"/>
            </header>
            <main>
                <Paragraph center={true} cls="md:!text-[1.5rem] !text-[1.25rem] !mt-6 !font-medium text-white xl:px-64 px-4 !leading-loose" text={sentence} />
            </main>
            <footer className="flex flex-col items-center gap-2 mt-5">
                <span className="text-xl text-white font-extrabold">{name}</span>
                <span className="text-xs text-gray-200">{job}</span>
            </footer>
        </section>
    )
}

export default Slide;