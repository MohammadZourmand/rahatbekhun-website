import { CategoryBroken, ClockBroken, PlayBrokenIcon, UserBrokenIcon, UsersBroken } from "@/assets/icons";
import FaSpan from "@/components/global/elements/boxes/cart/faSpan";
import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import PriceBox from "./price";
import SubjectBox from "./subjectBox";
import BlueBtn from "@/components/global/elements/buttons/blue";
import FiveStars from "@/components/global/elements/boxes/fiveStars";
import Heading6 from "@/components/global/elements/headings/h6";
import Link from "next/link";
import Paragraph from "@/components/global/elements/paragraph";

interface FloatSidebarProps {
    cls ?: string
}

const FloatSidebar : React.FC<FloatSidebarProps> = ({cls}) => {


    console.log(courseDetails.price/100*courseDetails.offPercent)
    
    return (
        <aside className={`${cls} flex flex-col gap-y-4`}>
            <div className="p-6 bg-white rounded-lg shadow-2xl shadow-gray-200">
                <div className="relative flex items-center justify-center rounded-md overflow-hidden">
                    <img src={courseDetails.imgLabel} alt="" />
                    <div className="absolute top-0 left-0 bg-black/30 w-full h-full"></div>
                    <PlayBrokenIcon cls="absolute w-10 h-10 z-20 fill-baby-9" color="white"/>
                </div>
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
                <div className="my-6 flex flex-col items-center divide-y-[1px]">
                    <SubjectBox
                        icon={<UserBrokenIcon cls="fill-baby-9 w-5 h-5" />}
                        subject=" آموزگار "
                        text={courseDetails.teachers[0].name}
                    />
                    <SubjectBox
                        icon={<CategoryBroken cls="fill-baby-9 w-5 h-5" />}
                        subject=" تعداد قسمت "
                        text={courseDetails.episodesNumber}
                    />
                    <SubjectBox
                        icon={<ClockBroken cls="fill-baby-9 w-5 h-5" />}
                        subject=" زمان شروع دوره "
                        text={courseDetails.startDate}
                    />
                    <SubjectBox
                        icon={<UsersBroken cls="fill-baby-9 w-5 h-5" />}
                        subject=" حداقل پایه تحصیلی "
                        text={courseDetails.studentsAge}
                    />
                    <SubjectBox
                        icon={<CategoryBroken cls="fill-baby-9 w-5 h-5" />}
                        subject=" پیش نیاز "
                        text={courseDetails.prerequisite ? "دارد" : "ندارد"}
                    />
                </div>
                <BlueBtn text="ثبت نام در دوره"/>
            </div>
            <div className="flex flex-col gap-y-6 p-6 bg-white rounded-lg shadow-2xl shadow-gray-200">
                <Heading6 cls="text-gray-800" text="دوره های مشابه" />
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
                                        <FiveStars />
                                    </div>
                                    <div>
                                        <Link className="text-gray-800 font-semibold" href={"/"}>
                                            {courseDetails.name}
                                        </Link>
                                        <PriceBox cls="mt-1" priceCls="text-xl !text-baby-9" markCls="text-sm !text-baby-9/90" offPercent={30} isOff={false} price={courseDetails.price} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </aside>
    )
}

export default FloatSidebar;