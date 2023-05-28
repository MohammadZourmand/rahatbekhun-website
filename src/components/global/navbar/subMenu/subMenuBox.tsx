import Link from "next/link"

export interface SubMenuBoxProps {
    name : string
    img : string
    cls ?: string
}

const SubMenuBox : React.FC<SubMenuBoxProps> = ({name, img, cls}) => {

    return (
        <Link href={"/courses"} className={`${cls} hover:scale-[1.15] flex flex-col col-span-4 items-center justify-center py-2 px-3 hover:bg-baby-2/30 transition-all duration-500 rounded-md`}>
            <img src={img} alt="grade-6-courses-and-worksheets-exams" />
            <span className="font-semibold mt-2 text-center">{name}</span>
        </Link>
    )
} 

export default SubMenuBox;