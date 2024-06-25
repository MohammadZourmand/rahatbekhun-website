import { CategoryBroken, ChartBrokenIcon, EditBrokenIcon, FolderBroken, GameBroken, PaperBrokenIcon, VideoBrokenIcon } from "@/assets/icons";
import { useRef } from "react";

interface IconChooserProps {
    type : string
}

const IconChooser = ({type} : IconChooserProps) => {

    const tooltip = useRef(null)

    switch (type) {
        case "worksheet":
            return (
                <div onMouseMove={() => tooltip.current.classList.toggle("!block")} className="relative ml-1 mb-0.5 group">
                    <span
                        ref={tooltip} 
                        className="hidden whitespace-nowrap absolute bottom-6 -right-4 font-semibold rounded-lg px-3 py-2 text-gray-800 bg-white shadow"
                    >
                        کاربرگ 
                    </span>
                    <EditBrokenIcon cls="w-5 h-5 fill-gray-400" />
                </div>
                
            )
        case "courses":
            return (
                <div onMouseMove={() => tooltip.current.classList.toggle("!block")} className="relative ml-1 mb-0.5 group">
                    <span
                        ref={tooltip} 
                        className="hidden whitespace-nowrap absolute bottom-6 -right-8 font-semibold rounded-lg px-3 py-2 text-gray-800 bg-white shadow"
                    >
                        دوره صفر تا صد 
                    </span>
                    <FolderBroken cls="w-5 h-5 fill-gray-400" />
                </div>
                
            )
        case "game":
            return (
                <div onMouseMove={() => tooltip.current.classList.toggle("!block")} className="relative ml-1 mb-0.5 group">
                    <span
                        ref={tooltip} 
                        className="hidden whitespace-nowrap absolute bottom-6 -right-4 font-semibold rounded-lg px-3 py-2 text-gray-800 bg-white shadow"
                    >
                        بازی 
                    </span>
                    <GameBroken cls="w-5 h-5 fill-gray-400" />
                </div>
                
            )
        case "video":
            return (
                <div onMouseMove={() => tooltip.current.classList.toggle("!block")} className="relative ml-1 mb-0.5 group">
                    <span
                        ref={tooltip} 
                        className="hidden whitespace-nowrap absolute bottom-6 -right-4 font-semibold rounded-lg px-3 py-2 text-gray-800 bg-white shadow"
                    >
                        ویدیو 
                    </span>
                    <VideoBrokenIcon cls="w-5 h-5 fill-gray-400" />
                </div>
                
            )
        case "article":
            return (
                <div onMouseMove={() => tooltip.current.classList.toggle("!block")} className="relative ml-1 mb-0.5 group">
                    <span
                        ref={tooltip} 
                        className="hidden whitespace-nowrap absolute bottom-6 -right-4 font-semibold rounded-lg px-3 py-2 text-gray-800 bg-white shadow"
                    >
                        مقاله 
                    </span>
                    <PaperBrokenIcon cls="w-5 h-5 fill-gray-400" />
                </div>
                
            )
        case "test":
            return (
                <div onMouseMove={() => tooltip.current.classList.toggle("!block")} className="relative ml-1 mb-0.5 group">
                    <span
                        ref={tooltip} 
                        className="hidden whitespace-nowrap absolute bottom-6 -right-4 font-semibold rounded-lg px-3 py-2 text-gray-800 bg-white shadow"
                    >
                        آزمون 
                    </span>
                    <ChartBrokenIcon cls="w-5 h-5 fill-gray-400" />
                </div>
                
            )
        default:
            return (
                <CategoryBroken cls="w-5 h-5 fill-gray-400" />
            )
    }
}

export default IconChooser;