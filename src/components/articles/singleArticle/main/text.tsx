import { MessageIcon, SendIcon } from "@/assets/icons";
import TagBox from "@/components/global/elements/boxes/tag";
import Heading3 from "@/components/global/elements/headings/h3";
import Heading5 from "@/components/global/elements/headings/h5";
import BlueLink from "@/components/global/elements/links/blueLink";
import Paragraph from "@/components/global/elements/paragraph";
import Sentence from "@/components/global/elements/paragraph/sentence";
import Image from "next/image";

const SingleArticlesMainText = () => {

    const authorInfo = {
        name : "محمد زورمند",
        sentence : "یادگیری موضوع مهمی است و برای چه یادگرفتن موضوعی مهمتر !",
        profileImg : "/images/home/teachers/mohammad-zourmand.jpg"
    }

    return (
        <>
            <Paragraph
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                cls="font-normal leading-loose text-lg text-gray-700 md:!text-right !text-center"
            />
            <Sentence
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
                teller="لورم اپیسوم"
            />
            <Paragraph
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                cls="font-normal leading-loose text-lg text-gray-700 md:!text-right !text-center"
            />
            <div>
                <p
                    className="font-medium !leading-loose mt-6 !text-2xl text-gray-900 md:!text-right !text-center"
                >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    <BlueLink cls="mr-2" href="/courses" text="مشاهده دوره های آموزشی"/>
                </p>
            </div>
            <div className="lg:w-full md:w-11/12 w-full my-8 mx-auto md:h-[400px] xs:h-64 h-56 relative">
                <Image
                    src={"/images/blog/examplePicture.webp"}
                    alt="examplePic"
                    className="rounded-lg"
                    fill
                />
            </div>
            <Heading5
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"
                cls="text-gray-800 !leading-loose my-5 md:!text-right !text-center"
            />
            <Paragraph
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                cls="font-normal leading-loose text-lg text-gray-700 mb-16 md:!text-right !text-center"
            />
            <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 pt-16">
                <div className="flex gap-4">
                {
                    ["خواندن", "سریع خواندن", "بازدهی خواندن"].map((item : string, index : number) => (
                        <TagBox key={index} value={item} func={() => console.log(item)}/>
                    ))
                }
                </div>
                <div className="flex items-center md:mt-0 mt-3">
                    <span className="font-bold ml-4">اشتراک :</span>
                    <div className="flex gap-2 border-gray-100">
                        <div className="group cursor-pointer hover:text-white font-medium hover:bg-sky-400 transition duration-500 p-2 bg-sky-100 text-gray-700 text-[.9rem] rounded">
                            <SendIcon cls={`fill-sky-500 group-hover:fill-white transition duration-500 w-5 h-5`} />
                        </div>
                        <div className="group cursor-pointer hover:text-white font-medium hover:bg-orange-400 transition duration-500 p-1.5 bg-orange-100 text-gray-700 text-[.9rem] rounded">
                            <MessageIcon cls={`fill-orange-500 group-hover:fill-white transition duration-500 w-6 h-6`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 md:my-16 my-12 md:p-10 p-6 bg-gray-100">
                <div className={`md:justify-self-end justify-self-center md:pl-6 md:col-span-2 col-span-12 rounded-full flex`}>
                    <Image
                        className="rounded-full"
                        src={authorInfo.profileImg}
                        alt={authorInfo.name}
                        width={64}
                        height={64}
                    />
                </div>
                <div className={`md:col-span-10 col-span-12 flex flex-col`}>
                    <Heading3
                        cls="!text-lg md:!text-right !text-center mt-3"
                        text={authorInfo.name}
                    />
                    <Paragraph 
                        text="نویسنده"
                        cls="!font-medium mt-1 md:!text-right !text-center"
                    />
                    <Paragraph
                        text={authorInfo.sentence}
                        cls="!font-medium leading-loose text-gray-800 md:pt-6 pt-4 md:!text-right !text-center"
                    />
                </div>
            </div>
        </>
    )
}

export default SingleArticlesMainText;