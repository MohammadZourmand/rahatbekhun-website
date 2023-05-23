import PageHeader from "../global/elements/header/pageHeader";

// ? libraries ===================
import Lottie from "lottie-react";

// ? assets ======================
import ReadingBoy from "@/assets/animation/lottieFiles/searching-cartoon.json"; 
import Heading5 from "../global/elements/headings/h5";
import Paragraph from "../global/elements/paragraph";
import { SearchBrokenIcon } from "@/assets/icons";
import Heading6 from "../global/elements/headings/h6";


const Courses : React.FC = () => {

    return (
        <>
            <PageHeader title="دوره های آموزشی" pagination={["دوره های آموزشی"]} />
            <section className="grid grid-cols-12 mt-24 mx-48">
                <aside className="col-span-3 space-y-8">
                    {/* // ! searchbox */}
                    <form className="relative !mb-16" action="#">
                        <input placeholder="دنبال چی میگردی ؟" type="text" className="p-3 bg-gray-100 w-full placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm" />
                        <button className="absolute top-3 left-3">
                            <SearchBrokenIcon cls="fill-gray-600" />
                        </button>
                    </form>
                    {/* // ! Category */}
                    <form action="#" className="bg-gray-100 py-8 px-6">
                        <header>
                            <Heading6 cls="text-gray-900" text="دسته بندی موضوع" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="ریاضی و محاسبات" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="زبان پارسی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="علوم و آزمایشگاه" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="تاریخ و جغرافیا" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="هنر و طراحی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="درک مطلب" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="متفرقه" />
                            </label>
                        </main>
                    </form>
                    {/* // ! User Level */}
                    <form action="#" className="bg-gray-100 py-8 px-6">
                        <header>
                            <Heading6 cls="text-gray-900" text="سطح دانش آموز" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="اول ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="دوم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="سوم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="چهارم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="پنجم ابتدایی" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="ششم ابتدایی" />
                            </label>
                        </main>
                    </form>
                    {/* // ! Course Price */}
                    <form action="#" className="bg-gray-100 py-8 px-6">
                        <header>
                            <Heading6 cls="text-gray-900" text="هزینه دوره ها" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="تمامی دوره ها" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="دوره های رایگان" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="دوره های ویژه" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="دوره های نقدی" />
                            </label>
                        </main>
                    </form>
                    {/* // ! User Type */}
                    <form action="#" className="bg-gray-100 py-8 px-6">
                        <header>
                            <Heading6 cls="text-gray-900" text="نوع مخاطب" />
                        </header>
                        <main className="mt-5 mr-4 space-y-3">
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="دانش آموز" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="آموزگاران و دانشجویان" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="والدین دانش آموزان" />
                            </label>
                            <label className="group myCheckbox !flex items-center">
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                                <Paragraph cls="text-gray-700 font-medium !text-[.9rem] mr-2 group-hover:text-baby-9" text="عمومی" />
                            </label>
                        </main>
                    </form>
                </aside>
                <main className="col-span-9">

                </main>
            </section>
        </>
    )
}

export default Courses;