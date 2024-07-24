import Navbar from "@/components/global/navbar";
import BooksBox from "./booksBox";
import Filtering from "./filtering";
import WorksheetsList from "./list";
import Footer from "@/components/global/footer";

interface Props {
    grade : string
    params : any
}

export default function GradePage({params, grade} : Props) {
    return (
        <>
            <Navbar isWhite={false}/>
            <BooksBox grade={grade} />
            <Filtering />
            <WorksheetsList grade={grade} params={params} />
            <Footer />
        </>
    )
}