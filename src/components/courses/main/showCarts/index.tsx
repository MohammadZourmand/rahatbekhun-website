// ? react ===================
import { FC } from "react";

// ? components & types ======
import Card from "@/components/global/elements/boxes/card";
import { CardType } from "@/types/home";
import { coursesData } from "@/components/data/coursesData";

interface ShowCoursesCartsProps {

}

const ShowCoursesCarts : FC<ShowCoursesCartsProps> = () => {

    return (
        <section className="lg:order-1 order-1 lg:col-span-8 col-span-12 flex flex-col">
            <main className="col-span-8 grid grid-cols-12 sm:gap-8 gap-y-8">
                {
                    coursesData.map((item : CardType, index : number) => {
                        return (
                            <Card
                                key={index}
                                cls={"col-span-12 sm:col-span-6"}
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