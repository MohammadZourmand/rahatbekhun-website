import { createContext } from "react";


export const SearchContext = createContext({
    data : {
        data : [],
        page : 1,
        totalPages : 1,
        isLoading : false,
        error : false
    },
    setData : (data : any) => {},
})