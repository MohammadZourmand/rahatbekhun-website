import { CategoryBroken, ClockBroken, PlayBrokenIcon, UserBrokenIcon, UsersBroken } from "@/assets/icons";
import FaSpan from "@/components/global/elements/boxes/cart/faSpan";
import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import PriceBox from "./price";
import SubjectBox from "./subjectBox";
import BlueBtn from "@/components/global/elements/buttons/blue";
import FiveStars from "@/components/global/elements/boxes/fiveStars";
import Heading6 from "@/components/global/elements/headings/h6";
import Link from "next/link";
import ShareBox from "../main/shareBox";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addProduct } from "@/store/slices/cart";

interface FloatSidebarProps {
    cls ?: string
}

const FloatSidebar : React.FC<FloatSidebarProps> = ({cls}) => {


    const dispatch = useDispatch()

    const addToCartList = () => {

        let {price, offPercent, name, courseLink, imgLabel} = courseDetails
       
        dispatch(addProduct({
            price : offPercent ? price*(100-offPercent)/100 : price,
            link : courseLink,
            name : name,
            img : imgLabel
        }))
    }
    
    return (
        <aside className={`${cls} relative flex flex-col gap-y-8 lg:mt-0 mt-12 lg:mx-0 mx-2`}>
            <img className="absolute top-36 -left-8" src="/images/courses/course-dot.webp" alt="dot-image-for-background-course" />
            <div className="z-10 p-6 bg-white rounded-lg shadow-all-lg shadow-gray-200">
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
                <BlueBtn onClick={() => addToCartList()} text="ثبت نام در دوره"/>
            </div>
            <div className="flex flex-col gap-y-6 py-8 px-6 bg-white rounded-lg shadow-all-lg shadow-gray-200">
                <Heading6 cls="text-gray-800 !text-base" text="دوره های پیش نیاز" />
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
            </div>
            <div className="flex flex-col items-center mt-2 py-8 px-6 bg-white rounded-lg shadow-all-lg shadow-gray-200">
                <span className="font-bold text-lg mb-4 block"> دوره را به اشتراک بگذارید : </span>
                <ShareBox />
            </div>
        </aside>
    )
}

export default FloatSidebar;