// ? react ===================
import { FC } from "react";

// ? components & types ======
import Cart from "@/components/global/elements/boxes/cart";
import { CartType } from "@/types/home";
import { classOfferedDetails } from "@/components/home/courses/slidersDetails";

interface ShowCoursesCartsProps {

}

const ShowCoursesCarts : FC<ShowCoursesCartsProps> = () => {

    return (
        <section className="lg:order-1 order-1 lg:col-span-8 col-span-12 flex flex-col">
            <main className="col-span-8 grid grid-cols-12 sm:gap-8 gap-y-8">
                {
                    classOfferedDetails.map((item : CartType, index : number) => {
                        return (
                            <Cart
                                href={`courses/${item?.category}/${item.href}`}
                                category={item.category}
                                cls={"col-span-12 sm:col-span-6"}
                                key={index}
                                name={item.name}
                                details={item.details}
                                image={item.image}
                                sessions={item.sessions}
                                ageCategory={item.ageCategory}
                                price={item.price}
                                offPrice={item.offPrice}
                                votesAverage={item.votesAverage}
                                votes={item.votes}
                            />
                        )
                    })
                }
            </main>
        </section>
    )
}

export default ShowCoursesCarts;