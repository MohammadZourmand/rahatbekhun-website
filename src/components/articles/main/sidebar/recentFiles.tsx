import { CartsInfo } from "@/components/blog/bestArticles/data";
import MiniCard from "@/components/global/elements/cards/miniCards";
import Heading6 from "@/components/global/elements/headings/h6";

interface RecentFilesProps {
    cls ?: string
}

const RecentFiles : React.FC<RecentFilesProps> = () => {

    return (
        <div className="lg:mt-10 mt-6">
            <Heading6 
                text="آخرین مقالات"
                cls="text-gray-800 px-1 py-4 border-b border-gray-100"
            />
            <main className="flex flex-col my-8 gap-y-5">
                {
                    CartsInfo.map((item, index) => (
                        <MiniCard key={index} item={item}/>
                    ))
                }
            </main>
        </div>
    )
}

export default RecentFiles;