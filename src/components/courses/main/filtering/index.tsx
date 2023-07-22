
// ? Componenets & types ==
import { FilteringProps } from "@/types/courses";
import CloseIconAbs from "./closeIconAbs";
import AnimationWithBg from "./animationWithBg";
import FilteringHeaders from "./header";

// ? assets ===============
import SearcherAnimal from "@/assets/animation/lottieFiles/searching-cartoon.json"; 
import Filters from "./filters";

const Filtering : React.FC<FilteringProps> = ({cls, setState, state}) => {

    return (
        <div className={`${cls} relative lg:col-span-12 flex flex-col col-span-12 bg-gray-100 py-8 px-2 rounded-md`}>
            <AnimationWithBg animationDate={SearcherAnimal} />
            <CloseIconAbs setState={setState} />
            <FilteringHeaders setState={setState} />
            <Filters />
        </div>
    )
}

export default Filtering;