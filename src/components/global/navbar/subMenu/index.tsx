import { SearchBrokenIcon } from "@/assets/icons"
import Link from "next/link"
import SubMenuBox from "./subMenuBox"

interface SubMenuProps {
    name : string 
    mainLink : string
    searchLink : string
    mainImg : string
    mainInfo : string
    mainHead : string
    items : any[]
    cls ?: string
    subCls ?: string
}

const SubMenu : React.FC<SubMenuProps> = ({name, mainLink, searchLink, mainImg, mainInfo, mainHead, items, cls, subCls}) => {

    const linkStyle = `group py-5 px-1 after:content-[''] after:absolute after:transition-all after:duration-500 after:w-0 hover:after:w-full after:bottom-0 after:left-0 after:h-full after:border-b-[3.5px] after:border-b-baby-1 relative text-center nozha transition`


    return (
        <div className={linkStyle}>
            {name}
            <div className={`${cls} group-hover:grid hidden animate-fade grid-cols-12 xl:w-[42vw] lg:w-[56vw] p-4 absolute top-[5.1rem] border-[1rem] border-transparent -right-28 text-base bg-white shadow-all-md z-10 rounded-lg`}>
                <div className="col-span-5 flex flex-col items-center justify-center">
                    <img src={mainImg} alt="0-to-100-course-rahat-bekhun" />
                    <Link className="text-xl font-black mt-4 text-center" href={`${mainLink}`}> {mainHead} </Link>
                    <p className="text-center mt-1">{mainInfo}</p>
                    <Link href={`/${searchLink}`} className="flex items-center hover:bg-indigo-900 transition-all bg-baby-1 rounded-lg px-2 py-1 mt-3">
                        <SearchBrokenIcon cls="w-5 h-5" color="white" />
                        <span className="text-white text-sm mr-2"> جستجوی پیشرفته </span>
                    </Link>
                </div>
                <div className="grid grid-cols-12 gap-2 col-span-7">
                    {
                        items.map((item : any, index : number) => (
                            <SubMenuBox key={index} cls={subCls} name={item?.name} img={item?.img} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SubMenu;