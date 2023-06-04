import { ClockBroken, DocumentBrokenIcon, DownloadPaperBrokenIcon, EditBrokenIcon, EditSquareBroken, GameBroken, ImageBrokenIcon, VideoBrokenIcon, VolumeUpBrokenIcon } from "@/assets/icons";
import FaSpan from "../cart/faSpan";
import { episodesInfoProps } from "./courseInfo";

interface CourseEpisodesProps {
    episodes : episodesInfoProps[]
}

const typeTranslator = (type : string) => {
    switch (type) {
        case "video":
            return 'ویدیو'
        case "picture":
            return 'عکس'
        case "text":
            return 'متن'
        case "worksheet":
            return 'کاربرگ'
        case "practice":
            return 'تمرین'
        case "test":
            return 'آزمون'
        case "game":
            return 'بازی'
        case "audio":
            return 'فایل صوتی'
        default:
            return 'فایل'
    }
}

const typeIconSelector = (type : string) => {
    switch (type) {
        case "video":
            return <VideoBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "picture":
            return <ImageBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "text":
            return <DownloadPaperBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "worksheet":
            return <DocumentBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "practice":
            return <EditBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "test":
            return <EditSquareBroken cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "game":
            return <GameBroken cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "audio":
            return <VolumeUpBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        default:
            return 'فایل'
    }
}

const CourseEpisodes : React.FC<CourseEpisodesProps> = ({
    episodes
}) => {
    
    return (
        <div>
            <ul className="space-y-4">
                {
                    episodes.map((episode : episodesInfoProps) => {
                        return (
                            <li className="group transition-all grid grid-cols-12 bg-gray-200/40 hover:bg-baby-9 hover:border-transparent border border-gray-200 rounded-md py-4 pr-6 pl-8" key={episode.id}>
                                <div className="col-span-3 flex items-center">
                                    <span className="ml-1 relative bottom-0.5">
                                        {typeIconSelector(episode.type)}
                                    </span>
                                    <FaSpan cls="transition text-gray-800 group-hover:text-white font-bold" value={`قسمت ${episode.id + 1 } : `} />
                                    <span className="transition text-gray-800 group-hover:text-white font-bold">
                                        {typeTranslator(episode.type)}
                                    </span>
                                </div>
                                <div className="col-span-6">
                                    <FaSpan cls="transition text-gray-900 group-hover:text-white" value={episode.name} />
                                </div>
                                <div className="col-span-3 flex items-center justify-self-end">
                                    <ClockBroken cls={`transition fill-gray-600 group-hover:fill-white w-5 h-5`} />
                                    <FaSpan cls="transition text-gray-600 group-hover:text-white mr-1 text-sm" value={`${episode.time} دقیقه`} />
                                    <FaSpan cls="text-white bg-baby-6 rounded text-sm px-2 py-[1px] mr-3" value={`${episode.comments.length} دیدگاه`} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CourseEpisodes;