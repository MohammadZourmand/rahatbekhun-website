import { partedEpisodes } from "./courseInfo";
import TabOpener from "./openerTabs";

interface CourseEpisodesProps {
    episodes : partedEpisodes
}

const CourseEpisodes = ({episodes} : CourseEpisodesProps) => {

    return (
        <div>
            {
                Object.entries(episodes).map((part, index : number) => {
                    return (
                        <TabOpener key={index} item={part} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default CourseEpisodes;