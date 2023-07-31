import { FC } from "react";
import Link from "next/link";

import { messageBgColorChooser, messageHeadTextColorChooser, messageTextColorChooser, TypeMessageIconChooser } from "./choosersFunctions";
import FaSpan from "@/components/global/elements/translators/faSpan";
import { messagesInfoProps } from "../messagesInfo";


interface MessageBoxProps {
    item : messagesInfoProps
}

const MessageBox : FC<MessageBoxProps> = ({item}) => {
    return (
        <div className={`group relative flex sm:flex-row flex-col items-center sm:items-start py-4 rounded-lg 
            ${item.seen ? "bg-gray-500/40" : messageBgColorChooser(item.type)} transition
        `}>
            <div className="pr-2">
                {TypeMessageIconChooser(item)}
            </div>
            <div className="px-3 w-full">
                <header className="flex justify-between sm:flex-row flex-col items-center sm:items-start w-full mx-0">
                    <Link
                        href={item.href}
                        className={`${item.seen ? "text-gray-900" : messageHeadTextColorChooser(item.type)} mb-1 font-semibold sm:text-right text-center leading-loose`}
                    >
                        {item?.title}
                    </Link>
                    <FaSpan
                        value={item.date}
                        cls={`${item.seen ? "text-gray-900" : messageHeadTextColorChooser(item.type)} text-sm sm:my-0 my-2`}
                    />
                </header>
                <main>
                    <p className={`${item.seen ? "text-gray-600" : messageTextColorChooser(item.type)} text-sm leading-loose sm:text-right text-center`}>
                        {item?.description.slice(0,65) + "..."}
                    </p>
                </main>
            </div>
        </div>
    )
}

export default MessageBox;