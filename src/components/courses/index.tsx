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
import Opener from "./opener";
import SwitchComponent from "./switch";
import MyCheckBox from "./checkBox";


const Courses : React.FC = () => {

    return (
        <>
            <PageHeader title="دوره های آموزشی" pagination={["دوره های آموزشی"]} />
            <section className="grid grid-cols-12 justify-start items-start mt-24 xl:mx-36 xs:mx-4 mx-2 xl:gap-x-20 lg:gap-x-10">
                <header className="mb-12 col-span-12 grid grid-cols-12 xl:gap-x-20 lg:gap-x-10 lg:gap-y-0 gap-y-4">
                    {/* // ! searchbox */}
                    <form className="lg:col-span-4 col-span-12 relative" action="#">
                        <input placeholder="دنبال چی میگردی ؟" type="text" className="outline-gray-100 focus:outline-baby-9 transition-all duration-500 focus:bg-white p-[1.1rem] bg-gray-100 w-full placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm rounded-md" />
                        <button className="absolute top-4 left-3">
                            <SearchBrokenIcon cls="fill-gray-600" />
                        </button>
                    </form>
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
                <aside className="lg:order-1 order-2 lg:col-span-4 col-span-12 grid grid-cols-12 lg:gap-y-5 xs:gap-6 gap-y-6 mt-8 lg:mt-0">
                    <form action="#" className="lg:col-span-12 col-span-12 bg-gray-100 py-8 px-2 rounded-md">
                        <div>
                            <SwitchComponent text="فقط دوره های رایگان" />
                        </div>
                        
                        {/* // ! Category */}
                        <Opener
                            head="دسته بندی موضوع" 
                            main={
                                <main className="space-y-3">
                                    <MyCheckBox text={"ریاضی و محاسبات"} />
                                    <MyCheckBox text={"زبان پارسی"} />
                                    <MyCheckBox text={"علوم و آزمایشگاه"} />
                                    <MyCheckBox text={"تاریخ و جغرافیا"} />
                                    <MyCheckBox text={"هنر و طراحی"} />
                                    <MyCheckBox text={"درک مطلب"} />
                                    <MyCheckBox text={"متفرقه"} />
                                </main>
                            } 
                        />
                        {/* // ! User Level */}
                        <Opener
                            head="سطح دانش آموز" 
                            main={
                                <main className="space-y-3">
                                    <MyCheckBox text={"اول ابتدایی"} />
                                    <MyCheckBox text={"دوم ابتدایی"} />
                                    <MyCheckBox text={"سوم ابتدایی"} />
                                    <MyCheckBox text={"چهارم ابتدایی"} />
                                    <MyCheckBox text={"پنجم ابتدایی"} />
                                    <MyCheckBox text={"ششم ابتدایی"} />
                                </main>
                            } 
                        />
                        {/* // ! User Type */}
                        <Opener
                            head="نوع مخاطب"
                            main={
                                <main className="space-y-3">
                                    <MyCheckBox text={"دانش آموز"} />
                                    <MyCheckBox text={"آموزگاران و دانشجویان"} />
                                    <MyCheckBox text={"والدین دانش آموزان"} />
                                    <MyCheckBox text={"عمومی"} />
                                </main>
                            } 
                        />

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