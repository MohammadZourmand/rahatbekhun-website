import { useState } from "react";

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";

import searchingPages from "@/assets/animation/lottieFiles/searching-pages.json";
import { SearchIcon } from "@/assets/animation/svg";

const Loadings : React.FC = () => {

    const loadingType = useSelector((state : RootState) => state.setLoadingSlice.loadingType)

    return (
        loadingType && <div className="fixed inset-0 w-full h-full bg-black/90 flex flex-col items-center justify-center z-50">
            {
                loadingType === "pages" && <>
                    <SearchIcon />
                    <span className="text-white text-lg text-center">
                        صبور باش دارم دنبال چیزی که خواستی میگردم !
                    </span>
                </>
            }
        </div>
    )
}

export default Loadings;