
// ? components & types ======
import Card from "@/components/global/elements/cards/card";
import { courseInfoType } from "@/types/home";
import { coursesData } from "@/components/data/coursesData";
import CoursesHeader from "../header";

const ShowCoursesCarts = () => {

    return (
        <section className="flex flex-col mt-8">
            {/* <CoursesHeader /> */}
            <main className="grid grid-cols-12 md:gap-8 sm:gap-4 gap-y-8">
                {
                    coursesData.map((item : courseInfoType, index : number) => {
                        return (
                            <Card
                                key={index}
                                cls={"col-span-12 sm:col-span-6 lg:col-span-4"}
                                item={item}
                            />
                        )
                    })
                }
            </main>
        </section>
    )
}

export default ShowCoursesCarts;