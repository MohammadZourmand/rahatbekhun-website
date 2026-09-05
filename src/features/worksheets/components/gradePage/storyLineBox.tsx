import Image from "next/image"
import Link from "next/link"

interface dataProps {
    name : string
    img : string
    href ?: string
}

interface StoryLineBoxProps {
    defaultValue : string,
    data : dataProps[],
    cls ?: string
    clickHandler ?: any
}

export default function StoryLineBox({defaultValue, data, cls, clickHandler} : StoryLineBoxProps) {

    return (
        <header className={`${cls} overflow-x-auto flex items-center md:justify-center justify-start lg:p-4 pt-4 pb-2 px-1 lg:gap-x-8 gap-x-6 mx-3`}>
            {
                data.map((item, index) => {
                    return (
                        item?.href
                            ?
                                <Link
                                    href={item?.href}
                                    key={index}
                                    className={`group hover:scale-105 transition-transform flex flex-col items-center justify-center`}
                                >
                                    <div className={`${item?.name.includes(defaultValue) ? 'scale-[1.10] shadow-lg border-baby-10/70 outline-baby-10' : 'border-sky-300 outline-baby-7'} lg:w-24 lg:h-24 w-17.5 h-17.5 flex items-center justify-center rounded-full outline-offset-2 border outline overflow-hidden`}>
                                        <div className="relative lg:w-20 w-16 lg:h-20 h-16">
                                            <Image
                                                fill
                                                src={item?.img}
                                                alt={item?.name}
                                                className="group-hover:scale-[1.12] transition-all"
                                                sizes="100px"
                                            />
                                        </div>
                                    </div>
                                    <p className={`${item?.name.includes(defaultValue) ? 'font-bold text-baby-6 mt-4' : 'text-[.95rem] text-sky-900 mt-3'} text-center whitespace-nowrap`}>{item?.name}</p>
                                </Link>
                            :
                                <div
                                    key={index}
                                    className={`group hover:scale-105 transition-transform flex flex-col items-center justify-center`}
                                    onClick={() => clickHandler(item.name)}
                                >
                                    <div className={`${item?.name.includes(defaultValue) ? 'scale-[1.10] shadow-lg border-baby-10/70 outline-baby-10' : 'border-sky-300 outline-baby-7'} lg:w-24 lg:h-24 w-17.5 h-17.5 flex items-center justify-center rounded-full outline-offset-2 border outline overflow-hidden`}>
                                        <div className="relative lg:w-20 w-16 lg:h-20 h-16">
                                            <Image
                                                fill
                                                src={item?.img}
                                                alt={item?.name}
                                                className="group-hover:scale-[1.12] transition-all"
                                                sizes="100px"
                                            />
                                        </div>
                                    </div>
                                    <p className={`${item?.name.includes(defaultValue) ? 'font-bold text-baby-6 mt-4' : 'text-[.95rem] text-sky-900 mt-3'} text-center whitespace-nowrap`}>{item?.name}</p>
                                </div>
                    )
                })
            }
        </header>
    )
}