import { Dispatch, SetStateAction } from "react";

import { messagesInfo, messagesInfoProps } from "./messagesInfo";
import Heading6 from "@/components/elements/headings/h6";
import IconBtn from "@/components/form/buttons/iconBtn";
import CloseIcon from "../../mobile/closeIcon";
import MessageBox from "./message";
import Paragraph from "@/components/global/elements/paragraph";

interface MessagesPopupProps {
    setShow : Dispatch<SetStateAction<boolean>>
}

const MessagesPopup = ({ setShow } : MessagesPopupProps) => {

    return (
        <section className={`
            max-w-xl sm:w-[40rem] w-[95vw]
            mx-2 h-96 p-3 flex flex-col justify-between
            shadow-all-md shadow-gray-700 backdrop-blur-sm
            rounded-lg animate-comeFromTop bg-white/20 z-50 sm:absolute 
            fixed top-16 md:left-0 -left-0
        `}>
            <header className="flex items-center">
                <div onClick={() => setShow(false)} className="p-2 cursor-pointer bg-sky-400/20 rounded-full">
                    <CloseIcon setState={setShow} cls=""/>
                </div>
                <Heading6
                    text="پیام های شما"
                    cls="bg-sky-400/20 rounded-lg p-2 mr-2 w-full !text-base"
                    center={true}
                />
            </header>
            <main className="h-full pl-1 my-3 space-y-2 overflow-y-auto">
            {
                messagesInfo.length !== 0
                ? (
                    messagesInfo.map((item : messagesInfoProps, index) => {
                        return (
                            <MessageBox item={item} key={index}/>
                        )
                    })  
                )
                : (
                    <Paragraph center={true} cls="mt-12" text="شما هیج پیام جدیدی ندارید ." />
                )
            }
            </main>
            <footer className="">
                <IconBtn
                    text="مشاهده همه"
                    iconName="eye"
                    cls="w-full py-2 !my-2"
                    href="/messages"
                />
            </footer>
        </section>
    )
}

export default MessagesPopup;