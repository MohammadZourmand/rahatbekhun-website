import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import PriceBox from "./price";
import FaSpan from "@/components/global/elements/boxes/card/faSpan";


const CoursePriceSidebar : React.FC = () => {

    return (
        <div className="mt-6 flex justify-between">
            <PriceBox
                price={courseDetails.price}
                offPercent={courseDetails.offPercent}
                isOff={false}
            />
            <PriceBox 
                price={courseDetails.price}
                isOff={true}
            />
            <div className="bg-baby-6/20 rounded-md flex items-center text-sm">
                <FaSpan cls="px-3 text-baby-6 font-bold" value={`${courseDetails.offPercent}% تخفیف`} />
            </div>
        </div>
    )
}

export default CoursePriceSidebar;