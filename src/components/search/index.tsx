'use client'

import AdvancedSearchHeader from "./header";
import AdvancedSearchMain from "./main";
import Footer from "../global/footer";
import { useEffect, useState } from "react";
import { SearchContext } from "@/context/search";
import { useSearchParams } from "next/navigation";
import useSWR from 'swr'; 
import { getSearchResult } from "./header/form/getResult";
import CircleLoading from "../global/elements/loadings";

const AdvancedSearch = () => {

    const [page, setPage] = useState(1)
    const [searchData, setSearchData] = useState(`_type=کاربرگ&`)
    
    const queryPage = useSearchParams().get('page')

    useEffect(() => {
        queryPage && setPage(parseInt(queryPage))
    }, [queryPage])

    const {data, error, isLoading} = useSWR(
        `http://localhost:5000/admin/search?${searchData}per_page=${3}&page=${page}`,
        getSearchResult
    )

    return (
        <SearchContext.Provider value={{data,error,isLoading,page,setPage, setSearchData, searchData}}>
            <AdvancedSearchHeader />
            {
                isLoading
                    ? <CircleLoading cls="mb-16" text="درحال جست و جو برای درخواست شما ..."/>
                    : <AdvancedSearchMain />
            }
            <Footer />
        </SearchContext.Provider>
    )
}

export default AdvancedSearch