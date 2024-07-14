import MatchedSearchResults from "./matchedResults";
import { useContext } from "react";
import { SearchContext } from "@/context/search";
import dynamic from "next/dynamic";

// ? ========= import Dynamic
const MassageBox = dynamic(() => import("./massageBox"))
const CircleLoading = dynamic(() => import("@/components/global/elements/loadings"))

const AdvancedSearchMain = () => {

    const {data} = useContext(SearchContext)

    return (
        <main className="max-w-7xl mx-auto mt-8 mb-16">
            {data?.data?.length !== 0 && <MassageBox />}
            {
                data?.isLoading && <div className="fixed flex items-center justify-center
                top-0 left-0 w-full h-full bg-gray-900/80 z-[999]">
                    <CircleLoading
                        text="در حال پیدا کردن خواسته شما هستیم لطفا صبور باشید !"
                        textCls="!text-white"
                    />
                </div>
            }
            {/* <SortBox /> */}
            <MatchedSearchResults />
        </main>
    )
}

export default AdvancedSearchMain;