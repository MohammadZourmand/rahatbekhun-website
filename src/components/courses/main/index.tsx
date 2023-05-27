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
            <section className="grid grid-cols-12 justify-start items-start lg:mt-24 mt-8 xl:mx-36 xs:mx-4 mx-2 xl:gap-x-20 lg:gap-x-10">
                <CoursesHeader setState={setShowFilters} />
                <aside className="lg:grid hidden lg:col-span-4 col-span-12 grid-cols-12 lg:gap-y-5 xs:gap-6 gap-y-6 mt-8 lg:mt-0">
                    <Filtering />
                </aside>
                <ShowCoursesCarts />
            </section>
            {/* // TODO : Filtering in Mobile */}
            <div className={`${showFilters ? "grid" : "hidden"} fixed bottom-0 left-0 w-full h-screen z-50 animate-comeFromBottom overflow-scroll`}>
                <Filtering cls="" setState={setShowFilters} state={showFilters} />
            </div>
        </>
    )
}

export default CoursesPageMain;