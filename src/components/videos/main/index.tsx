// ? react =======================
import { FC , useState } from "react";

// ? components & types ==========
import ShowCoursesCarts from "./showCarts";
import Filters from "./filters";
import { FilterBrokenIcon } from "@/assets/icons";

const VideosPageMain : FC = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false)

    return (
        <>
            <section className="relative flex flex-col 2xl:max-w-[1400px] xl:mx-auto mx-2 mt-8 xl:gap-x-2 lg:gap-x-6">
                <button
                    className={`flex flex-col bottom-8 right-8 w-20 h-20
                        items-center justify-center rounded-full z-50 bg-baby-3
                        text-white text-sm shadow-all-md shadow-gray-700 hover:scale-110
                        transition duration-500 lg:hidden fixed
                    `}
                    onClick={() => setShowFilters(true)}
                >
                    <FilterBrokenIcon cls="fill-white h-8 w-8"/>
                    فیلترها
                </button>
                <div onClick={() => setShowFilters(false)} className={`${showFilters ? "fixed" : "hidden" } lg:!hidden top-0 left-0 w-full h-full bg-gray-900/60 z-40`}></div>
                <Filters showFilters={showFilters} setShowFilters={setShowFilters}/>
                <ShowCoursesCarts />
            </section>
            {/* // TODO : Filtering in Mobile */}
            {/* <div className={`${showFilters ? "grid" : "hidden"} fixed bottom-0 left-0 w-full h-screen z-50 animate-comeFromBottom overflow-scroll`}>
                <Filtering setState={setShowFilters} state={showFilters} />
            </div> */}
        </>
    )
}

export default VideosPageMain;