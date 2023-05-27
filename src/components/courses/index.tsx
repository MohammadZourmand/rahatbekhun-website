import PageHeader from "../global/elements/header/pageHeader";

// ? libraries ===================

// ? assets ======================
import { CategoryBroken, FilterBroken, FilterBrokenIcon, SearchBrokenIcon } from "@/assets/icons";
import { classOfferedDetails } from "../home/courses/slidersDetails";
import { CartType } from "@/types/home";
import Cart from "../home/courses/cart";
import SelectBox from "./selectBox";
import Filtering from "./filtering";
import { useState } from "react";


const Courses : React.FC = () => {

    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
            <PageHeader title="دوره های آموزشی" pagination={["دوره های آموزشی"]} />
            <section className="grid grid-cols-12 justify-start items-start lg:mt-24 mt-8 xl:mx-36 xs:mx-4 mx-2 xl:gap-x-20 lg:gap-x-10">
                <header className="mb-12 col-span-12 grid grid-cols-12 xl:gap-x-20 lg:gap-x-10 lg:gap-y-0 gap-y-4">
                    {/* // ! searchbox */}
                    <form className="lg:col-span-4 col-span-12 relative" action="#">
                        <input placeholder="دنبال چی میگردی ؟" type="text" className="outline-gray-100 focus:outline-baby-9 transition-all duration-500 focus:bg-white p-[1.1rem] bg-gray-100 w-full placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm rounded-md" />
                        <button className="absolute top-4 left-3">
                            <SearchBrokenIcon cls="fill-gray-600" />
                        </button>
                    </form>
                    <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex col-span-12 w-full group mx-auto justify-center bg-gray-800 text-center text-white py-3 px-6  rounded-md">
                        اعمال فیلتر بر دوره ها
                        <FilterBrokenIcon cls="group-hover:scale-150 transition mr-4" color="white" />
                    </button>
                    <div className="lg:col-span-8 col-span-12 bg-gray-100 flex items-center justify-between sm:flex-row flex-col p-3 rounded-md">
                        <div className="flex items-center justify-between sm:mb-0 mb-6 sm:w-[unset] w-full">
                            <div className="flex items-center">
                                <div className={`p-1 cursor-pointer bg-baby-9 rounded-md`}>
                                    <CategoryBroken cls={`fill-white w-5 h-5`} />
                                </div>
                                <div className={`p-1 cursor-pointer`}>
                                    <FilterBroken cls={"fill-gray-900 w-5 h-5 mr-4"}/>
                                </div>
                            </div>
                            <p className="mr-8 text-gray-700">
                            8 مورد یافت شد.
                            </p>
                        </div>
                        <SelectBox cls="flex items-center sm:flex-row flex-col z-20 w-80" />
                    </div>
                </header>
                <aside className="lg:grid hidden lg:col-span-4 col-span-12 grid-cols-12 lg:gap-y-5 xs:gap-6 gap-y-6 mt-8 lg:mt-0">
                    <Filtering />
                </aside>
                <section className="lg:order-1 order-1 lg:col-span-8 col-span-12 flex flex-col">
                    <main className="col-span-8 grid grid-cols-12 sm:gap-8 gap-y-8">
                        {
                            classOfferedDetails.map((item : CartType, index : number) => {
                                return (
                                    <Cart
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
            </section>
            {/* // TODO : Filtering in Mobile */}
            <div className={`${showFilters ? "grid" : "hidden"} fixed bottom-0 left-0 w-full h-screen z-50 animate-comeFromBottom overflow-scroll`}>
                <Filtering cls="" setState={setShowFilters} state={showFilters} />
            </div>
        </>
    )
}

export default Courses;