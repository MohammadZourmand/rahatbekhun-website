
import Pagination from "@/utils/pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
    totalPages : number
    setPage : Dispatch<SetStateAction<number>>
    params : any
}

const ListPagination = ({totalPages, setPage, params} : Props) => {

    const queryPage = useSearchParams().get('page')
    const router = useRouter()

    useEffect(() => {
        queryPage && setPage(parseInt(queryPage))
    }, [queryPage, setPage])

    return (
        <div className="col-span-12 bg-white/30 max-w-xs mx-auto p-6 rounded-full">
            <Pagination
                cls="!mt-0"
                totalPages={totalPages} 
                onClick={({selected}) => router.push(`/worksheets/${params?.grade}?page=${selected+1}`)} 
                initialPage={queryPage}
            />
        </div>
    )
}

export default ListPagination;