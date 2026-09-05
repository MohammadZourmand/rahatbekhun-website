import { AparatIcon, EyeBrokenIcon, GithubIcon, InstagramIcon, MessageBrokenIcon, SendBrokenIcon, SendIcon } from "@/assets/icons";
import Heading6 from "@/components/elements/headings/h6";
import Image from "next/image";
import Link from "next/link";

interface AsideProps {
    cls ?: string
}

const Aside = ({cls} : AsideProps) => {

    return (
        <aside className={`${cls} lg:px-0 md:mx-32 sm:mx-28 xs:mx-12 mx-6 xl:col-span-4 lg:col-span-5 col-span-12 relative gap-y-8 lg:mt-0 mt-12 lg:mx-0`}>
            <div className="z-10 p-10 bg-white rounded-lg shadow-all-lg shadow-gray-200 gap-y-8 flex flex-col ">
                <div className="grid grid-cols-7 justify-start">
                    <MessageBrokenIcon cls="col-span-1 fill-baby-9 w-7 h-7"/>
                    <div className="col-span-6">
                        <Heading6 
                            text="برای ما پیام بدین"
                        />
                        <div className="mt-3 flex flex-col gap-2">
                            <Link 
                                href={"mailto:rahatbekhun@gmail.com"}
                                className="text-gray-500/80 font-medium hover:text-baby-9 transition duration-500"
                            >
                                ایمیل راحت بخون
                            </Link>
                            <Link 
                                href={"mailto:zourmandrhbcontact@gmail.com"}
                                className="text-gray-500/80 font-medium hover:text-baby-9 transition duration-500"
                            >
                                ایمیل سازنده راحت بخون
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7 justify-start">
                    <SendBrokenIcon cls="col-span-1 fill-baby-9 w-7 h-7"/>
                    <div className="col-span-6">
                        <Heading6 
                            text="داخل تلگرام منتظرتونیم"
                        />
                        <div className="mt-3 flex flex-col gap-2">
                            <Link 
                                href={"/"}
                                className="text-gray-500/80 font-medium hover:text-baby-9 transition duration-500"
                            >
                                کانال ارتباطی راحت بخون
                            </Link>
                            <Link 
                                href={"/"}
                                className="text-gray-500/80 font-medium hover:text-baby-9 transition duration-500"
                            >
                                ربات راحت بخون
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7 justify-start">
                    <EyeBrokenIcon cls="col-span-1 fill-baby-9 w-7 h-7"/>
                    <div className="col-span-6">
                        <Heading6 
                            text="به ما سر بزنین"
                        />
                        <div className="mt-3 flex flex-col gap-2">
                            <Link 
                                href={"/"}
                                className="text-gray-500/80 font-medium hover:text-baby-9 transition duration-500"
                            >
                                پروژه های گیت هاب
                            </Link>
                            <Link 
                                href={"/"}
                                className="text-gray-500/80 font-medium hover:text-baby-9 transition duration-500"
                            >
                                ویدیوهای رایگان آپارات
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7 justify-start">
                    <div className="col-span-1"></div>
                    <div className="col-span-6">
                        <Heading6 
                            text="دنبالمون کنین"
                        />
                        <div className="mt-5 flex gap-2">
                            <Link href="#" className="group hover:bg-baby-6 bg-baby-6/10 transition-all duration-500 rounded-md p-2.5">
                                <AparatIcon cls="fill-baby-6 group-hover:fill-white transition duration-500 w-5 h-5"/>
                            </Link>
                            <Link href="#" className="group hover:bg-sky-500 bg-sky-500/10 transition-all duration-500 rounded-md p-2.5">
                                <SendIcon cls="fill-sky-500 group-hover:fill-white transition duration-500 w-5 h-5" />
                            </Link>
                            <Link href="#" className="group hover:bg-black bg-black/10 transition-all duration-500 rounded-md p-2.5">
                                <GithubIcon cls="fill-black group-hover:fill-white transition duration-500 w-5 h-5" />
                            </Link>
                            <Link href="#" className="group hover:bg-baby-10 bg-baby-10/10 transition-all duration-500 rounded-md p-2.5">
                                <InstagramIcon cls="fill-baby-10 group-hover:fill-white transition duration-500 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={"/images/contact/contact-shape-1.webp"}
                alt="مستطیل نقطه چین"
                width={84}
                height={90}
                className="absolute -z-10 bottom-28 -right-8"
            />
            <Image
                src={"/images/contact/contact-shape-2.webp"}
                alt="مستطیل نقطه چین"
                width={70}
                height={110}
                className="absolute -z-10 top-16 2xl:-left-8 xl:-left-4 lg:-left-8 -left-6"
            />
            <Image
                src={"/images/contact/contact-shape-3.webp"}
                alt="دایره متحرک"
                width={59}
                height={56}
                className="absolute -z-10 top-64 -rotate-90 2xl:-left-20 lg:-left-16 sm:-left-24 -left-6"
            />
        </aside>
    )
}

export default Aside;