import { createContext } from "react";


export const SearchContext = createContext({
    data : {data : [], totalPages : 0, documents : 0},
    isLoading : false,
    error : false,
    page : 1,
    setPage : (data : any) => {},
    searchData : '',
    setSearchData : (data : any) => {},
})