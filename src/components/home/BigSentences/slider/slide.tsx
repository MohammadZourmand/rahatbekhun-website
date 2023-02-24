import Paragraph from "@/components/global/elements/paragraph";
import { sentencesType } from "@/types/home";
import { IconBrandGithub, IconBrandInstagram, IconBrandTelegram, IconUserExclamation } from "@tabler/icons-react";

const Slide : React.FC<sentencesType> = ({
    name,
    sentence,
    image,
    job
}) => {

    return (
        <section className="group relative flex items-center justify-center h-full">
            <div className="flex flex-col items-center">
                <img className="!w-20 !h-20" src="./images/home/sentence/testimonial.webp" alt="" />
                <Paragraph cls="text-lg !mt-6 !font-semibold" text={sentence} />
                <div className="flex items-center gap-3 mt-6">
                    <div>
                        <img className="!w-16 !h-16 rounded-full" src={image} alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-baby-6 text-xl roosta">{name}</span>
                        <span className="text-slate-700 text-sm">{job}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slide;