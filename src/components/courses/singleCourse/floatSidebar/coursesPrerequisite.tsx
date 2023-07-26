import Link from "next/link";

import FiveStars from "@/components/global/elements/boxes/fiveStars";
import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import PriceBox from "./price";



const PrerequisiteCourses : React.FC = () => {

    return (
        <div className="flex flex-col gap-y-8">
        {
            [1,2,3].map((item : number) => {
                return (
                    <div key={item} className="grid grid-cols-3 gap-x-3">
                        <div className="overflow-hidden rounded-lg col-span-1 flex items-center justify-center">
                            <img className="h-[90%]" src={courseDetails?.imgLabel} alt="" />
                        </div>
                        <div className="col-span-2">
                            <div className="mb-1">
                                <FiveStars cls="scale-[.7] -mr-8" />
                            </div>
                            <div>
                                <Link className="text-gray-800 text-sm font-semibold" href={"/"}>
                                    {courseDetails.name}
                                </Link>
                                <PriceBox cls="mt-1" priceCls="text-lg !text-baby-9" markCls="text-xs mt-1 !text-baby-9/90" offPercent={30} isOff={false} price={courseDetails.price} />
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default PrerequisiteCourses;