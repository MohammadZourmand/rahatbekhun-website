import Link from "next/link";


import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import FiveStars from "@/components/global/elements/boxes/stars/fiveStars";
import Image from "next/image";
import PriceBox from "@/components/global/price";



const PrerequisiteCourses = () => {

    return (
        <div className="flex flex-col gap-y-8">
        {
            [1,2,3].map((item : number) => {
                return (
                    <div key={item} className="grid grid-cols-3 gap-x-3">
                        <div className="overflow-hidden rounded-lg col-span-1 flex items-center justify-center">
                            <div className="relative h-[90%]">
                                <Image
                                    src={courseDetails?.imgLabel}
                                    alt={courseDetails.name}
                                    fill
                                />
                            </div>
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