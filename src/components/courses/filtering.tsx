import { FilterBrokenIcon } from "@/assets/icons";
import Opener from "./opener";
import MyRadio from "./radioBox";
import RangeInput from "./rangeInput";
import SwitchComponent from "./switch";
import Heading6 from "../global/elements/headings/h6";
import Lottie from "lottie-react";
import SearcherAnimal from "@/assets/animation/lottieFiles/searching-cartoon.json"; 
import CloseIcon from "../global/navbar/mobile/closeIcon";
import {SetStateAction, Dispatch, FC} from "react";

interface FilteringProps {
    cls ?: string
    hasCloseBtn ?: boolean
    setState ?: Dispatch<SetStateAction<boolean>>
    state ?: boolean
}

const Filtering : FC<FilteringProps> = ({cls, setState, state}) => {

    return (
        <div className={`${cls} relative lg:col-span-12 flex flex-col col-span-12 bg-gray-100 py-8 px-2 rounded-md`}>
            <Lottie className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 w-32 h-32 z-10" animationData={SearcherAnimal} />
            {
                setState && <div className="absolute top-8 right-8">
                    <CloseIcon cls="w-8 h-8" setState={setState} />
                </div>
            }
            <div className="absolute lg:-top-8 -top-6 lg:-left-8 -left-6 w-[7.2rem] h-[7.2rem] bg-white rounded-full"></div>
            <header className={`${setState === undefined ? "mr-4" : "mx-auto justify-center justify-self-center" } mb-6 flex items-center`}>
                <FilterBrokenIcon cls="ml-2 mb-1 fill-gray-800 w-8 h-8" />
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
    )
}

export default Filtering;