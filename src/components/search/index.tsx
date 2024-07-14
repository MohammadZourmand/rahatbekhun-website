'use client'

import AdvancedSearchHeader from "./header"
import AdvancedSearchMain from "./main"
import Footer from "../global/footer"
import { useEffect, useState } from "react"
import { SearchContext } from "@/context/search"
import { useSearchParams } from "next/navigation"

const AdvancedSearch = () => {

    const [data, setData] = useState({
        data : [],
        page : 1,
        totalPages : 1,
        isLoading : false,
        error : false
    })
    
    const queryPage = useSearchParams().get('page')

    useEffect(() => {
        queryPage && setData(prev => { return {...prev, page : parseInt(queryPage)}})
    }, [queryPage])

    return (
        <SearchContext.Provider value={{data, setData}}>
            <AdvancedSearchHeader />
            <AdvancedSearchMain />
            <Footer />
        </SearchContext.Provider>
    )
}

export default AdvancedSearch