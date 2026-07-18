// ? libraries ===================
import PN from "persian-number"

// ? types  ======================
import { Card2Type } from "@/types/home";

// ? assets ======================
import { ClockBroken } from "@/assets/icons";
import Paragraph from "@/components/global/elements/paragraph";
import Heading1 from "../../headings/h1";
import Link from "next/link";
import { badgeBgColorChooser, badgeTextColorChooser, badgeTextTranslator } from "../../boxes/badges/badgeColorChooser";
import Image from "next/image";

const Card2 = ({article, cls} : Card2Type) => {

    return (
        <section className={`${cls} group rounded-lg bg-white shadow-lg`}>
            {/* image part */}
            <div className="overflow-hidden rounded-t-lg relative w-full md:h-64 sm:h-48 h-64">
                {/* <Image
                    src={article?.cover}
                    className="overflow-hidden group-hover:scale-105 transition duration-500"
                    alt={article?.name}
                    fill
                /> */}
            </div>
            {/* text part */}
            <div className="flex flex-col xl:p-4 p-3">
                <header className="flex">
                    <div className={`${badgeTextColorChooser(article?.category)} ${badgeBgColorChooser(article?.category)} justify-self-start text-sm font-semibold  px-2.5 py-[3px] rounded`}>{badgeTextTranslator(article?.category)}</div>
                </header>
                <main className="mt-5">
                    <Link href={`/articles/${article?.category}/${article?._id}`}>
                        <Heading1 cls="!text-xl !mt-1 text-gray-800 hover:text-baby-9 transition duration-300" text={article?.name} /> 
                    </Link>
                </main>
                <footer className={`flex articles-center justify-between gap-4 pt-4 pb-1`}>
                    <div className="flex mt-4 mb-4 articles-center">
                        <Image
                            src={"/images/home/teachers/mohammad-zourmand.webp"}
                            className="w-9 h-9 border-2 border-gray-200 shadow-xl rounded-full"
                            alt="author"
                            width={36}
                            height={36}
                        />
                        <Paragraph cls="text-gray-600 text-xs mr-2" text={article?.author} />
                    </div>
                    <div className="flex articles-center">
                        {/* <Paragraph cls="font-medium text-sm mt-0.5" text={PN.convertEnToPe(article?.date)} /> */}
                        <ClockBroken cls="mr-1 w-5 h-5" color={"#94a3b8"} />
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Card2;