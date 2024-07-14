import MatchedSearchResults from "./matchedResults";
import { useContext } from "react";
import { SearchContext } from "@/context/search";
import dynamic from "next/dynamic";

// ? ========= import Dynamic
const MassageBox = dynamic(() => import("./massageBox"))

const AdvancedSearchMain = () => {

    const {data} = useContext(SearchContext)

    return (
        <main className="max-w-7xl mx-auto mt-8 mb-16">
            {data?.data?.length !== 0 && <MassageBox />}
            {/* <SortBox /> */}
            <MatchedSearchResults />
        </main>
    )
}

export default AdvancedSearchMain;