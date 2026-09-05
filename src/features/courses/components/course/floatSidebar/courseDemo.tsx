import { PlayBrokenIcon } from "@/assets/icons";
import { courseDetails } from "@/components/elements/boxes/tabSwitcher/courseInfo";
import Image from "next/image";

const CourseDemoSidebar = () => {

    return (
        <div className="relative flex items-center justify-center rounded-md overflow-hidden">
            <div className="w-full xl:h-40 xs:h-72 h-56">
                <Image
                    fill
                    src={courseDetails.imgLabel}
                    alt="demo"
                />
            </div>
            <div className="absolute top-0 left-0 bg-black/30 w-full h-full"></div>
            <PlayBrokenIcon cls="absolute w-10 h-10 z-20 fill-baby-9" color="white"/>
        </div>
        )
}

export default CourseDemoSidebar;