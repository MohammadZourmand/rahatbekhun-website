import Link from "next/link";

import Heading1 from "@/components/global/elements/headings/h1";
import Paragraph from "@/components/global/elements/paragraph";
import { teamData } from "./teamDate";
import { AddUserBrokenIcon, InstagramIcon, MessageIcon, SendIcon } from "@/assets/icons";
import IconBtn from "@/components/global/elements/buttons/iconBtn";

const Team = () => {

    return (
        <section className="grid grid-cols-12 gap-4 md:px-0 px-2 max-w-5xl mx-auto my-40">
            <div className="mb-12 col-span-12 self-end relative">
                <Heading1 
                    text="چه کسایی داخل راحت بخون کار میکنن ؟"
                    cls="!text-xl mb-6 !mt-0"
                    center={true}
                />
                <Paragraph
                    text="اینجا میتونی ببینی چه کسایی داخل راحت بخون کار میکنن ! شاید الان که می بینی تعدادمون خیلی کم باشه یا حتی خودم تنها باشم (: اما اگه فکر میکنی جای پیشرفت هست همین الان نفر جدید ما باش !"
                    center={true}
                    cls="font-medium text-gray-500/80 text-[.84rem] !leading-loose mb-2 pl-2"
                />
            </div>
            <div className="col-span-12 grid grid-cols-12 md:gap-12 sm:gap-6 gap-y-8 relative mx-16">
                {
                    teamData.map((item, index) => {
                        return (
                            <div key={index} className="transition duration-500 hover:scale-110 xs:p-6 md:col-span-4 sm:col-span-6 col-span-12 flex flex-col items-center">
                                <div className="">
                                    <img className="rounded-full hover:scale-105 transition duration-500" src={item.imgSrc} alt={item.name} />
                                </div>
                                <div className="my-3 font-semibold">
                                    <h1 className="text-center my-3">{item.name}</h1>
                                    <div className="flex gap-2">
                                        {
                                            item.telegram && <Link href={item.telegram} className="group flex items-center justify-center transition duration-500 hover:bg-sky-500 hover:border-transparent border border-gray-300 rounded-full p-1.5">
                                                <SendIcon cls="group-hover:fill-white transition duration-500 w-6 h-6 fill-gray-700"/>
                                            </Link>
                                        }
                                        {
                                            item.instagram && <Link href={item.instagram} className="group flex items-center justify-center transition duration-500 hover:bg-baby-10 hover:border-transparent border border-gray-300 rounded-full p-1.5">
                                                <InstagramIcon cls="group-hover:fill-white transition duration-500 w-6 h-6 fill-gray-700"/>
                                            </Link>
                                        }
                                        {
                                            item.gmail && <Link href={item.gmail} className="flex group items-center justify-center transition duration-500 hover:bg-green-500 hover:border-transparent border border-gray-300 rounded-full p-1.5">
                                                <MessageIcon cls="group-hover:fill-white transition duration-500 w-6 h-6 fill-gray-700"/>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Link href={"/contact"} className="transition duration-500 hover:scale-110 p-6 md:col-span-4 sm:col-span-6 col-span-12 flex flex-col items-center justify-center">
                    <AddUserBrokenIcon cls="fill-baby-9 w-12 h-12" />
                    <div className="my-3 font-semibold">
                        <h1 className="text-center text-baby-9 my-3">عضو جدید باش !</h1>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Team;