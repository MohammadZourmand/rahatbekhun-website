import Navbar from "@/components/global/navbar";
import { worksheetsDataProps } from "../data";
import BooksBox from "./booksBox";

interface Props {
    grade : string
    data : worksheetsDataProps[]
    params : any
}

export default function GradePage({data, grade, params} : Props) {
    return (
        <>
            <Navbar isWhite={false}/>
            <BooksBox grade={grade} />
        </>
    )
}