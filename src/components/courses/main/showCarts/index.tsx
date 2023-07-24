// ? react ===================
import { FC } from "react";

// ? components & types ======
import Card from "@/components/global/elements/boxes/card";
import { courseInfoType } from "@/types/home";
import { coursesData } from "@/components/data/coursesData";
import CoursesHeader from "../header";

interface ShowCoursesCartsProps {

}

const ShowCoursesCarts : FC<ShowCoursesCartsProps> = () => {

    return (
        <section className="lg:order-1 order-1 lg:col-span-12 col-span-12 flex flex-col">
            <CoursesHeader />
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