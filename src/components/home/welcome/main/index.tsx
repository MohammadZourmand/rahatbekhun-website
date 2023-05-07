// ? components ==================
import Box from "./box";

// ? libraries ===================
import Lottie from "lottie-react";

// ? assets ======================
import { IconBrandYoutube, IconDeviceGamepad2, IconFileReport } from "@tabler/icons-react";
import StudentOnPen from "@/assets/animation/lottieFiles/onlineLearning.json";

const Main : React.FC = () => {

    return (
        <main data-aos="fade-up" data-aos-duration="3000" className="grid grid-cols-12 my-8">
            <div className="flex flex-col p-4 space-y-8 lg:col-span-5 col-span-12 justify-center">
                <Box
                    headerText=" ویدیوهای جذاب آموزشی "
                    paraText=" آموزش هایی با سطوح مختلف و صفحه به صفحه برای تمامی دانش آموزان "
                    Icon={IconBrandYoutube}
                />
                <Box
                    headerColor="text-baby-4"
                    iconBgColor="bg-baby-4"
                    headerText=" کاربرگ های متنوع، جذاب و به روز "
                    paraText=" کاربرگ هایی از پایه اول تا ششم به همراه آزمون های عملکردی و تکالیف خلاقیتی و مهارتی "
                    Icon={IconFileReport}
                />
                <Box
                    headerColor="text-baby-2"
                    iconBgColor="bg-baby-2"
                    headerText=" بازی های سرگرم کننده آموزشی "
                    paraText=" اگر از دیدن و شنیدن فیلم آموزشی خسته شده اید پس بازی کنید، لذت ببرید و یاد بگیرید! "
                    Icon={IconDeviceGamepad2}
                />
            </div>
            <div className="lg:col-span-7 col-span-12 xs:mt-0 mt-8 flex items-center justify-center">
                <Lottie animationData={StudentOnPen} />
            </div>
        </main>
    )
}

export default Main;