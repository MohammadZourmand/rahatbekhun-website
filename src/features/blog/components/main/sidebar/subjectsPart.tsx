import Heading6 from "@/components/elements/headings/h6";
import Link from "next/link";

const categories = [
    {text : "همه", href : "all"},
    {text : "ریاضی", href : "math"},
    {text : "ورزش و سلامتی", href : "sport"},
    {text : "زبان", href : "language"},
    {text : "هنر", href : "art"},
    {text : "تاریخ و جغرافیا", href : "history"},
    {text : "تکنولوژی", href : "technology"},
    {text : "روابط اجتماعی", href : "social"},
    {text : "علوم و آزمایشگاه", href : "science"},
    {text : "دینی و مذهبی", href : "religion"},
    {text : "بازی", href : "game"},
    {text : "متفرقه", href : "other"},
]

const SubjectsPart = () => {

    return (
        <div className="lg:mt-8 mt-6">
            <Heading6 
                text="دسته بندی مقالات"
                cls="text-gray-800 px-1 py-4 border-b border-gray-200"
            />
            <div className="px-3 py-6 space-y-3">
                {
                    categories.map((item, index) => (
                        <Link href={`/articles/${item.href}`} key={index} onClick={() => console.log(item.href)} className="group cursor-pointer relative flex items-center">
                            <div className="group-hover:bg-baby-9 transition duration-500 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <div className="group-hover:text-baby-9 transition duration-500 tracking-tight font-medium text-gray-500 mr-2">{item.text}</div>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default SubjectsPart;