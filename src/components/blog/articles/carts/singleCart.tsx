import { IconBrandWechat, IconCategory2, IconUser } from "@tabler/icons-react";
import PN from "persian-number";

export interface SingleCartProps {
    imgSrc : string
    imgAlt : string
    head : string
    para : string
    date : string
    author : string
    category : string
    comments : number
}

const SingleCart : React.FC<SingleCartProps> = ({
    imgSrc,
    imgAlt,
    date,
    head,
    para,
    author,
    category,
    comments
}) => {

    return (
        <div className="group flex flex-col lg:col-span-4 col-span-12 shadow-lg rounded-lg">
            <header className="relative h-1/2 overflow-hidden">
                <img className="group-hover:scale-110 transition duration-500 rounded-t-lg" src={imgSrc} alt={imgAlt} />
            </header>
            <main className="relative py-8 px-6">
                <div className="group-hover:scale-90 transition duration-500 absolute w-20 -top-16 left-12 bg-baby-2 text-center text-white font-black text-xl py-5 px-6 rounded-lg">{date}</div>
                <h1 className="hover:text-baby-2 transition duration-500 text-slate-800 roosta my-4 text-3xl">{head}</h1>
                <p className="text-slate-600 text-[.9rem] leading-loose">{para}</p>
            </main>
            <footer className="flex text-slate-400 text-sm px-8 pb-8">
                <div className="group flex items-center pl-3 border-l-2 border-slate-900">
                    <span className="ml-1"><IconUser className="transition group-hover:stroke-baby-2" color="#94a3b8" width={"20px"} /></span>
                    <span className="font-semibold transition group-hover:text-baby-2">{author}</span>
                </div>
                <div className="group flex items-center px-3 border-l-2 border-slate-900">
                    <span className="ml-1"><IconCategory2 className="transition group-hover:stroke-baby-2" color="#94a3b8" width={"20px"} /></span>
                    <span className="font-semibold transition group-hover:text-baby-2">{category}</span>
                </div>
                <div className="group flex items-center px-3">
                    <span className="ml-1"><IconBrandWechat className="transition group-hover:stroke-baby-2" color="#94a3b8" width={"20px"} /></span>
                    <span className="font-semibold ml-0.5 transition group-hover:text-baby-2">{PN.convertEnToPe(comments)}</span>
                    <span className="font-semibold transition group-hover:text-baby-2">نظر</span>
                </div>
            </footer>
        </div>
    )
}

export default SingleCart;