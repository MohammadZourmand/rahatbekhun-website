import PageHeader from "../global/elements/header/pageHeader";

// ? libraries ===================
import Lottie from "lottie-react";

// ? assets ======================
import SearcherAnimal from "@/assets/animation/lottieFiles/searching-cartoon.json"; 
import { CategoryBroken, FilterBroken, FilterBrokenIcon, SearchBrokenIcon } from "@/assets/icons";
import Heading6 from "../global/elements/headings/h6";
import { classOfferedDetails } from "../home/courses/slidersDetails";
import { CartType } from "@/types/home";
import Cart from "../home/courses/cart";
import SelectBox from "./selectBox";
import Opener from "./opener";
import SwitchComponent from "./switch";
import MyRadio from "./radioBox";
import RangeInput from "./rangeInput";

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
                    <div className="relative lg:col-span-12 flex flex-col col-span-12 bg-gray-100 py-8 px-2 rounded-md">
                        <Lottie className="absolute -top-8 -left-8 w-32 h-32 z-10" animationData={SearcherAnimal} />
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-white rounded-full"></div>
                        <header className="mr-4 mb-6 flex items-center">
                            <FilterBrokenIcon cls="ml-3 mb-1 fill-gray-800 w-8 h-8" />
                            <Heading6 text={"فیلترها"} />
                        </header>
                        <div>
                            <SwitchComponent text="فقط دوره های رایگان" />
                        </div>
                        <div>
                            <SwitchComponent text="فقط دوره های تخفیف دار" />
                        </div>
                        {/* // ! Category */}
                        <Opener
                            head="دسته بندی موضوع" 
                            main={
                                <main className="space-y-3">
                                    <MyRadio
                                        options={[
                                            "همه",
                                            "ریاضی و محاسبات",
                                            "زبان پارسی",
                                            "علوم و آزمایشگاه",
                                            "تاریخ و جغرافیا",
                                            "هنر و طراحی",
                                            "درک مطلب",
                                            "متفرقه",
                                        ]}
                                    />
                                </main>
                            } 
                        />
                        {/* // ! User Level */}
                        <Opener
                            head="پایه تحصیلی"
                            main={
                                <main className="space-y-3">
                                    <MyRadio
                                        options={[
                                            "همه",
                                            "اول ابتدایی",
                                            "دوم ابتدایی",
                                            "سوم ابتدایی",
                                            "چهارم ابتدایی",
                                            "پنجم ابتدایی",
                                            "ششم ابتدایی",
                                        ]}
                                    />
                                </main>
                            } 
                        />
                        {/* // ! User Type */}
                        <Opener
                            head="نوع مخاطب"
                            main={
                                <main className="space-y-3">
                                    <MyRadio 
                                        options={[
                                            "همه",
                                            "دانش آموز",
                                            "آموزگاران و دانشجویان",
                                            "والدین دانش آموزان",
                                            "عمومی",
                                        ]}
                                    />
                                </main>
                            } 
                        />
                        {/* // ! User Level */}
                        <Opener
                            head="امتیاز"
                            main={
                                <main className="space-y-3">
                                    <MyRadio
                                        options={[
                                            "همه",
                                            "امتیاز بالاتر از ۵",
                                            "امتیاز بالاتر از ۴",
                                            "امتیاز بالاتر از ۳",
                                            "امتیاز بالاتر از ۲",
                                            "امتیاز بالاتر از ۱",
                                        ]}
                                    />
                                </main>
                            } 
                        />
                        <Opener 
                            head="فیلتر های بیشتر ..."
                            main={
                                <>
                                    {/* // ! User Level */}
                                    <Opener
                                        head="سازنده"
                                        main={
                                            <main className="space-y-3">
                                                <MyRadio
                                                    options={[
                                                        "همه",
                                                        "راحت بخون",
                                                        "سازندگان تاییدشده",
                                                        "سازندگان معمولی"
                                                    ]}
                                                />
                                            </main>
                                        } 
                                    />
                                    {/* // ! Number Of Users Uses Course */}
                                    <Opener
                                        head="تعداد شرکت کنندگان"
                                        main={
                                            <main className="space-y-3">
                                                <MyRadio
                                                    options={[
                                                        "همه",
                                                        "پایین تر از ۱۰۰",
                                                        "بین ۱۰۰ تا ۳۰۰",
                                                        "بین ۳۰۱ تا ۵۰۰",
                                                        "بین ۵۰۰ تا ۷۰۰",
                                                        "بالاتر از ۱۰۰۰",
                                                    ]}
                                                />
                                            </main>
                                        } 
                                    />
                                    {/* // ! Number Of Course Episodes */}
                                    <Opener
                                        head="تعداد قسمت های دوره"
                                        main={
                                            <main className="space-y-3">
                                                <MyRadio
                                                    options={[
                                                        "همه",
                                                        "پایین تر از ۵",
                                                        "بین ۶ تا ۱۰",
                                                        "بین ۱۱ تا ۱۵",
                                                        "بین ۱۶ تا ۲۰",
                                                        "بالاتر از ۲۱",
                                                    ]}
                                                />
                                            </main>
                                        } 
                                    />
                                    {/* // ! Price */}
                                    <Opener
                                        head="بازه قیمتی"
                                        main={
                                            <main className="space-y-3">
                                                <RangeInput />
                                            </main>
                                        } 
                                    />
                                </>
                            }
                        />
                        <button className="group hover:scale-110 transition mx-auto flex bg-gray-800 text-center text-white py-3 px-6 mt-4 rounded-md">
                            اعمال فیلتر بر دوره ها
                            <FilterBrokenIcon cls="group-hover:scale-150 transition mr-2" color="white" />
                        </button>
                    </div>
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