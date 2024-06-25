// ? react =====================
import { FC, Dispatch, SetStateAction } from "react";

// ? components =====================
// import BlackBtn from "../filtering/blackBtn";
import SearchForm from "./searchForm";
import ShowCoursesModel from "./showModel";
import MatchedCourses from "./mathedCourses";
import { SortItems } from "@/components/data/sortItems";

interface CoursesHeaderProps {
    setState ?: Dispatch<SetStateAction<boolean>>
}

const CoursesHeader : FC<CoursesHeaderProps> = ({setState}) => {

    return (
        <header className="mb-12 grid grid-cols-12 xl:gap-x-20 lg:gap-x-10 lg:gap-y-0 gap-y-4">
            {/* <BlackBtn icon="filter" cls="lg:!hidden !flex col-span-12 justify-center w-full hover:!scale-100" onClick={() => setState(true)} text="اعمال فیلتر بر دوره ها" /> */}
            <div className="col-span-12 bg-gray-100 flex items-center justify-between sm:flex-row flex-col p-3 rounded-md">
                <div className="flex items-center justify-between sm:mb-0 mb-6 sm:w-[unset] w-full">
                    <ShowCoursesModel />
                    <MatchedCourses />
                </div>
            </div>
        </header>
    )
}

export default CoursesHeader;