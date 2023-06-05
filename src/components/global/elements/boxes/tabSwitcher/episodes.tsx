import { partedEpisodes } from "./courseInfo";
import TabOpener from "./openerTabs";

interface CourseEpisodesProps {
    episodes : partedEpisodes
}

const CourseEpisodes : React.FC<CourseEpisodesProps> = ({
    episodes
}) => {

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