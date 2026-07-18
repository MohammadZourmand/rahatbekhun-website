
import { cardsInfo } from "@/components/global/data";
import Card2 from "@/components/global/elements/cards/card2";
import MiniCard from "@/components/global/elements/cards/miniCard";
import Heading6 from "@/components/global/elements/headings/h6";

interface RecentFilesProps {
    cls ?: string
}

const RecentFiles = ({cls} : RecentFilesProps) => {

    return (
        <div>
            <Heading6 
                text="آخرین مقالات"
                cls="text-gray-800 px-1 py-3 border-b border-gray-200"
            />
            <main className="flex flex-col my-8 gap-y-2">
                {
                    cardsInfo.map((item, index) => (
                        <MiniCard key={index} item={item}/>
                    ))
                }
            </main>
        </div>
    )
}

export default RecentFiles;