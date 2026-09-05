import Image from "next/image"
import Link from "next/link"

export interface SubMenuBoxProps {
    name : string
    img : string
    cls ?: string
    href : string
}

const SubMenuBox = ({name, img, href, cls} : SubMenuBoxProps) => {

    return (
        <Link href={href} className={`${cls} hover:scale-[1.15] flex flex-col col-span-4 items-center justify-center py-2 px-3 hover:bg-baby-2/30 transition-all duration-500 rounded-md`}>
            <Image src={img} alt={name} width={100} height={100} />
            <span className="font-semibold text-2xl mt-3 text-center">{name}</span>
        </Link>
    )
} 

export default SubMenuBox;