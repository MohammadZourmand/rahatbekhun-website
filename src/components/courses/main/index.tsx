// ? react =======================
import { FC , useState } from "react";

// ? components & types ==========
import CoursesHeader from "./header";
import Filtering from "./filtering";
import ShowCoursesCarts from "./showCarts";

const CoursesPageMain : FC = () => {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
            <section className="grid grid-cols-12 justify-start items-start 2xl:max-w-[1400px] xl:mx-auto mx-2 mt-8 xl:gap-x-2 lg:gap-x-6">
                {/* <aside className="lg:grid hidden lg:col-span-3 col-span-12 grid-cols-12 lg:gap-y-5 xs:gap-6 gap-y-6 mt-8 lg:mt-0">
                    <Filtering />
                </aside> */}
                <ShowCoursesCarts />
            </section>
            {/* // TODO : Filtering in Mobile */}
            {/* <div className={`${showFilters ? "grid" : "hidden"} fixed bottom-0 left-0 w-full h-screen z-50 animate-comeFromBottom overflow-scroll`}>
                <Filtering setState={setShowFilters} state={showFilters} />
            </div> */}
        </>
    )
}

export default CoursesPageMain;