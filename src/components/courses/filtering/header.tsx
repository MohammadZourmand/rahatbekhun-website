// ? react =====================
import { SetStateAction, Dispatch, FC } from "react";

// ? components & types ========
import Heading6 from "@/components/global/elements/headings/h6";

// ? assets ====================
import { FilterBrokenIcon } from "@/assets/icons";


interface FilteringHeadersProps {
    setState ?: Dispatch<SetStateAction<boolean>>
    cls ?: string
}

const FilteringHeaders : FC<FilteringHeadersProps> = ({setState, cls}) => {
    return (
        <header className={`${setState === undefined ? "mr-4" : "mx-auto justify-center justify-self-center" } ${cls} mb-6 flex items-center`}>
            <FilterBrokenIcon cls="ml-2 mb-1 fill-gray-800 w-8 h-8" />
            <Heading6 text={"فیلترها"} />
        </header>
    )
}

export default FilteringHeaders;