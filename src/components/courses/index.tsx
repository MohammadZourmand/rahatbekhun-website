import PageHeader from "../global/elements/header/pageHeader";

// ? libraries ===================
import Lottie from "lottie-react";

// ? assets ======================
import ReadingBoy from "@/assets/animation/lottieFiles/searching-cartoon.json"; 
import Heading5 from "../global/elements/headings/h5";
import Paragraph from "../global/elements/paragraph";
import { CategoryBroken, FilterBroken, SearchBrokenIcon } from "@/assets/icons";
import Heading6 from "../global/elements/headings/h6";
import { classOfferedDetails } from "../home/courses/slidersDetails";
import { CartType } from "@/types/home";
import Cart from "../home/courses/cart";
import SelectBox from "./selectBox";


const Courses : React.FC = () => {

    return (
        <>
            <PageHeader title="دوره های آموزشی" pagination={["دوره های آموزشی"]} />
            <section className="grid-cols-12 mt-24 xl:mx-36 xs:mx-4 mx-2 xl:gap-x-20 lg:gap-x-10 grid ">
                <header className="mb-12 col-span-12 grid grid-cols-12 xl:gap-x-20 lg:gap-x-10 lg:gap-y-0 gap-y-4">
                    {/* // ! searchbox */}
                    <form className="lg:col-span-4 col-span-12 relative" action="#">
                        <input placeholder="دنبال چی میگردی ؟" type="text" className="outline-gray-100 focus:outline-baby-9 transition-all duration-500 focus:bg-white p-[1.1rem] bg-gray-100 w-full placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm rounded-md" />
                        <button className="absolute top-4 left-3">
                            <SearchBrokenIcon cls="fill-gray-600" />
                        </button>
                    </form>
                    <div className="lg:col-span-8 col-span-12 bg-gray-100 flex items-center justify-between p-3 rounded-md">
                        <div className="flex items-center">
                            <div className={`p-1 cursor-pointer bg-baby-9 rounded-md`}>
                                <CategoryBroken cls={`fill-white w-5 h-5`} />
                            </div>
                            <div className={`p-1 cursor-pointer`}>
                                <FilterBroken cls={"fill-gray-900 w-5 h-5 mr-4"}/>
                            </div>
                            <p className="mr-8 text-gray-700">
                            8 مورد یافت شد.
                        </p>
                        </div>
                        <SelectBox cls="flex items-center z-20 w-80" />
                    </div>
                </header>
                <aside className="lg:order-1 order-2 lg:col-span-4 grid grid-cols-12 col-span-12 lg:gap-y-5 xs:gap-6 gap-y-6 mt-8">
                    {/* // ! Category */}
                    <form action="#" className="lg:col-span-12 xs:col-span-6 col-span-12 bg-gray-100 py-8 px-6 rounded-md">
                        <header>
                            <Heading6 cls="text-gray-900" text="دسته بندی موضوع" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="ریاضی و محاسبات" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="زبان پارسی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="علوم و آزمایشگاه" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="تاریخ و جغرافیا" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="هنر و طراحی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="درک مطلب" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="متفرقه" />
                            </label>
                        </main>
                    </form>
                    {/* // ! User Level */}
                    <form action="#" className="lg:col-span-12 xs:col-span-6 col-span-12 bg-gray-100 py-8 px-6 rounded-md">
                        <header>
                            <Heading6 cls="text-gray-900" text="سطح دانش آموز" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="اول ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="دوم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="سوم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="چهارم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="پنجم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="ششم ابتدایی" />
                            </label>
                        </main>
                    </form>
                    {/* // ! Course Price */}
                    <form action="#" className="lg:col-span-12 xs:col-span-6 col-span-12 bg-gray-100 py-8 px-6 rounded-md">
                        <header>
                            <Heading6 cls="text-gray-900" text="هزینه دوره ها" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="تمامی دوره ها" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="دوره های رایگان" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="دوره های ویژه" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="دوره های نقدی" />
                            </label>
                        </main>
                    </form>
                    {/* // ! User Type */}
                    <form action="#" className="lg:col-span-12 xs:col-span-6 col-span-12 bg-gray-100 py-8 px-6 rounded-md">
                        <header>
                            <Heading6 cls="text-gray-900" text="نوع مخاطب" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="دانش آموز" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="آموزگاران و دانشجویان" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="والدین دانش آموزان" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls={`text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9`} text="عمومی" />
                            </label>
                        </main>
                    </form>
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
        </>
    )
}

export default Courses;