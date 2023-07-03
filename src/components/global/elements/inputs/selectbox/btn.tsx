import { Listbox } from '@headlessui/react'

import { ChevronLeftCircleBroken } from "@/assets/icons"

interface ListBoxBtnProps {
    btnCls : string
    textBtnCls : string
    changeSelected : string
    open : boolean
    setIsOpen : any
}

const ListBoxBtn : React.FC<ListBoxBtnProps> = ({btnCls, textBtnCls, changeSelected, open, setIsOpen}) => {

    setIsOpen(open)

    return (
        <Listbox.Button className={`${btnCls} relative w-full h-full cursor-default rounded-md bg-white py-1.5 pr-3 pl-10 text-left text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6`}>
            <span className="flex items-center">
            <span className={`${textBtnCls} block truncate mr-2 text-[.9rem]`}>
                {changeSelected}
            </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center">
            <ChevronLeftCircleBroken cls={`${open ? "rotate-90" : "-rotate-90" } transition duration-500 h-6 w-6 text-gray-400 fill-gray-400`} aria-hidden="true" />
            </span>
        </Listbox.Button>
    )
}

export default ListBoxBtn;