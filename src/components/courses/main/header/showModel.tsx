// ? react ==================
import { FC } from "react";

// ? assets =================
import { CategoryBroken, FilterBroken } from "@/assets/icons";

interface ShowCoursesModelProps {

}

const ShowCoursesModel : FC<ShowCoursesModelProps> = () => {
    return (
        <div className="flex items-center">
            <div className={`p-1 cursor-pointer bg-baby-9 rounded-md`}>
                <CategoryBroken cls={`fill-white w-5 h-5`} />
            </div>
            <div className={`p-1 cursor-pointer`}>
                <FilterBroken cls={"fill-gray-900 w-5 h-5 mr-4"}/>
            </div>
        </div>
    )
}

export default ShowCoursesModel;