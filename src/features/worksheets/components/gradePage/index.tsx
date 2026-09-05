import Navbar from "@/components/navigation/navbar";
import StoryLineBox from "./storyLineBox";
import WorksheetsList from "./list";
import Footer from "@/components/navigation/footer";
import { gradesData } from "./data";

interface Props {
    grade : string
    params : any
}

export default function GradePage({params, grade} : Props) {
    return (
        <>
            <Navbar isWhite={false}/>
            <StoryLineBox defaultValue={grade} data={gradesData} />
            <WorksheetsList grade={grade} params={params} />
            <Footer />
        </>
    )
}