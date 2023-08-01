import { CategoryBroken, ClockBroken, UserBrokenIcon, UsersBroken } from "@/assets/icons";

import { addProduct } from "@/store/slices/cart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

import BlueBtn from "@/components/global/elements/buttons/blue";
import SubjectBox from "./subjectBox";
import { courseDetails } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";

const CourseInfoSidebar : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

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
        <>
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
        </>
    )
}

export default CourseInfoSidebar;