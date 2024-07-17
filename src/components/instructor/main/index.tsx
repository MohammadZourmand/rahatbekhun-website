import { AparatIcon, InstagramIcon, LinkedinIcon } from "@/assets/icons";
import { coursesData } from "@/components/data/coursesData";

import FiveStarsWithScore from "@/components/global/elements/boxes/stars/fiveStarsWithScore";
import Card from "@/components/global/elements/cards/card";
import Heading3 from "@/components/global/elements/headings/h3";
import Heading6 from "@/components/global/elements/headings/h6";
import Paragraph from "@/components/global/elements/paragraph";
import FloatedPictures from "./floated";
import Image from "next/image";

const InstructorMain = () => {

    return (
        <main className="grid grid-cols-3 lg:gap-x-16 px-3 sm:px-8 lg:px-0 max-w-7xl mx-auto mt-32">
            <FloatedPictures />
            <div className="relative xl:h-96 lg:h-80 xs:h-96 lg:w-full xs:w-96 h-72 w-72 col-span-3 sm:col-span-2 lg:col-span-1 rounded-lg">
                <div className="w-40 h-40 rounded-full -z-10 absolute top-40 -left-8 bg-sky-500/10"></div>
                <Image 
                    className="rounded-lg z-10" 
                    src="/images/home/teachers/mohammad-zourmand.webp"
                    alt=""
                    fill
                />
            </div> 
            <div className="col-span-3 lg:col-span-2 flex flex-col">
                <div className="border-b pb-6 flex md:flex-row flex-col gap-y-7 md:items-end justify-between">
                    <div className="flex flex-col gap-y-1 mt-8">
                        <Heading3
                            text="محمد زورمند"
                            cls="text-gray-800 !text-4xl !font-black"
                        />
                        <Paragraph 
                            text="سازنده راحت بخون"
                            cls="font-medium text-sm !mt-2"
                        />
                    </div>
                    <div>
                        <span className="text-sm text-gray-400 font-medium">امتیاز :</span>
                        <FiveStarsWithScore votesNumber={3.7} />
                    </div>
                    <div className="flex flex-col">
                        <Paragraph text="دنبالم کنید :" cls="font-medium"/>
                        <div className="flex items-center gap-2 mt-2">
                            <InstagramIcon cls="fill-gray-500 w-4 h-4 hover:fill-baby-9 cursor-pointer"/>
                            <LinkedinIcon cls="fill-gray-500 w-4 h-4 hover:fill-baby-9 cursor-pointer"/>
                            <AparatIcon cls="fill-gray-500 w-4 h-4 hover:fill-baby-9 cursor-pointer"/>
                        </div>
                    </div>
                    <button className="group hover:border-baby-9 hover:bg-baby-9 transition duration-500 self-start md:self-end flex rounded-lg px-4 py-2 border border-gray-200 text-gray-700">
                        <span className="group-hover:text-white transition duration-500 tracking-tight font-semibold">دنبال کردن</span>
                    </button>
                </div>
                <div className="pt-6 pb-14 border-b">
                    <Heading6 
                        text="بیوگرافی"
                        cls="text-gray-800 !text-lg"
                    />
                    <Paragraph 
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                        cls="!font-normal mt-4 text-base tracking-tight leading-loose"
                    />
                </div>
                <div className="pt-14 ">
                    <Heading3 
                        text="دوره های این آموزگار"
                        cls="!text-gray-800 !font-black !text-3xl"
                    />
                    <div className="grid grid-cols-2 gap-7 mt-10">
                        {
                            coursesData?.map((item, index) => {
                                return index < 4 && <Card key={index} cls="col-span-2 md:col-span-1" item={item}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default InstructorMain;