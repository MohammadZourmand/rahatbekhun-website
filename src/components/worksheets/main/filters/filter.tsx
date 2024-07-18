import { FilterBrokenIcon } from "@/assets/icons";
import Filters from ".";
import { Dispatch, SetStateAction, useState } from "react";

const Filtering = ({setFilters} : {setFilters : Dispatch<SetStateAction<string>>}) => {

    const [showFilters, setShowFilters] = useState<boolean>(false)

    return (
        <>

            <div className={`hover:scale-[1.2] cursor-pointer bg-baby-9 fixed bottom-0 right-0 p-2
                rounded-full sm:w-12 sm:h-12 w-10 h-10 text-center font-nozha transition duration-500 z-50
                lg:hidden flex justify-center items-center m-8 animate-comeFromBottom shadow-all-lg shadow-sky-400`}
                onClick={() => setShowFilters(true)}
            >
                <FilterBrokenIcon cls={"w-[1.8rem] h-[1.8rem] transition-all duration-500"} color={"white"} />
            </div>
            <div onClick={() => setShowFilters(false)} className={`${showFilters ? "fixed" : "hidden" } lg:!hidden top-0 left-0 w-full h-full bg-gray-900/60 z-40`}></div>
            <div className="relative col-span-12 w-full 2xl:max-w-[1400px] xl:mx-auto">
                <Filters setFilters={setFilters} />
            </div>
        </>
    )
}

export default Filtering;