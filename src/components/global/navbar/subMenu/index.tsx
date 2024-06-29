import { SearchBrokenIcon } from "@/assets/icons"
import Link from "next/link"
import SubMenuBox from "./subMenuBox"
import Image from "next/image"
import { SubMenusValuesProps } from "./data"

const SubMenu = ({isWhite, item} : {isWhite : boolean, item : SubMenusValuesProps}) => {

    const {items,link,mainHead,mainImg,mainInfo,cls,subCls} = item

    return (
        <>
            <div className={`${cls} ${isWhite ? "border border-gray-200" : "shadow-all-md border-transparent border-[1rem]"} group-hover:grid hidden animate-fade grid-cols-12 xl:w-[42vw] lg:w-[56vw] p-4 absolute top-[5.1rem] -right-28 text-base bg-white z-10 rounded-lg`}>
                <div className="col-span-5 flex flex-col items-center justify-center">
                    <Image width={100} height={100} src={mainImg} alt={mainHead} />
                    <Link className="text-lg font-black mt-4 text-center" href={`/${link}`}> {mainHead} </Link>
                    <p className="text-center mt-1">{mainInfo}</p>
                    <Link href={`/${link}`} className="flex items-center hover:bg-indigo-900 transition-all bg-baby-1 rounded-lg px-2 py-1 mt-3">
                        <SearchBrokenIcon cls="w-5 h-5" color="white" />
                        <span className="text-white text-sm mr-2"> جستجوی پیشرفته </span>
                    </Link>
                </div>
                <div className="grid grid-cols-12 gap-2 col-span-7">
                    {
                        items.map((item : any, index : number) => (
                            <SubMenuBox key={index} cls={`${subCls} font-nozha`} name={item?.name} img={item?.img} href={item?.href} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SubMenu;