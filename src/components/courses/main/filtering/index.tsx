
// ? Componenets & types ==
import SwitchComponent from "../../../global/elements/inputs/switch";
import { FilteringProps } from "@/types/courses";
import CloseIconAbs from "./closeIconAbs";
import AnimationWithBg from "./animationWithBg";
import FilteringHeaders from "./header";
import Selecters from "./selecters";
import BlackBtn from "./blackBtn";

// ? assets ===============
import SearcherAnimal from "@/assets/animation/lottieFiles/searching-cartoon.json"; 

const Filtering : React.FC<FilteringProps> = ({cls, setState, state}) => {

    return (
        <div className={`${cls} relative lg:col-span-12 flex flex-col col-span-12 bg-gray-100 py-8 px-2 rounded-md`}>
            <AnimationWithBg animationDate={SearcherAnimal} />
            <CloseIconAbs setState={setState} />
            <FilteringHeaders setState={setState} />
            <SwitchComponent text="فقط دوره های رایگان" />
            <SwitchComponent text="فقط دوره های تخفیف دار" />
            <Selecters />
            <BlackBtn text="اعمال فیلتر بر دوره ها" icon="filter" />
        </div>
    )
}

export default Filtering;