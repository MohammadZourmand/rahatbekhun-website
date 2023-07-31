import { PlayBrokenIcon } from "@/assets/icons";

import { courseDetails } from "@/components/global/elements/cards/tabSwitcher/courseInfo";

const CourseDemoSidebar : React.FC = () => {

    return (
        <div className="relative flex items-center justify-center rounded-md overflow-hidden">
            <img src={courseDetails.imgLabel} alt="" />
            <div className="absolute top-0 left-0 bg-black/30 w-full h-full"></div>
            <PlayBrokenIcon cls="absolute w-10 h-10 z-20 fill-baby-9" color="white"/>
        </div>
        )
}

export default CourseDemoSidebar;