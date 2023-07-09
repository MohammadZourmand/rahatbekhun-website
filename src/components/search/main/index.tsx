import { FC } from "react";

import SortBox from "./sort";
import MassageBox from "./massageBox";
import MatchedSearchResults from "./matchedResults";

const AdvancedSearchMain : FC = () => {

    return (
        <main className="max-w-7xl mx-auto mt-8 mb-16">
            <MassageBox />
            <SortBox />
            <MatchedSearchResults />
            {/* // ! WE NEED PAGINATION IN HERE */}
            <p className="text-red-500 font-bold text-3xl text-center">
            .................PAGINATION NEEDS.....................
            </p>
        </main>
    )
}

export default AdvancedSearchMain;