// ? react =======================
import { useState , FC } from "react";

// ? components & types ==========
import Filtering from "./filtering";
import PageHeader from "../global/elements/header/pageHeader";
import ShowCoursesCarts from "./showCarts";
import CoursesHeader from "./header";

const Courses : FC = () => {

    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
            <PageHeader title="دوره های آموزشی" pagination={["دوره های آموزشی"]} />
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

export default Courses;