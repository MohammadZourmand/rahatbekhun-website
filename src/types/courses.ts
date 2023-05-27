import { Dispatch, SetStateAction } from "react"

export interface FilteringProps {
    cls ?: string
    hasCloseBtn ?: boolean
    setState ?: Dispatch<SetStateAction<boolean>>
    state ?: boolean
}

export interface SortItemsProps {
    text : string
    id : number
}

export interface CoursesFilteringTitlesProps {
    id : number
    title : string
    items : string[]
} 