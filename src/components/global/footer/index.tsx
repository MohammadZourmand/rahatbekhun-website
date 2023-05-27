// ? React ==========================
import Link from "next/link";

// ? Components =====================
import Paragraph from "../elements/paragraph";
import WebsiteInfo from "./websiteInfo";
import Heading6 from "../elements/headings/h6";

// ? assets =========================
import { SearchBrokenIcon } from "@/assets/icons";

interface FooterProps {
    cls ?: string
}

const Footer : React.FC<FooterProps> = ({cls}) => {
    
    return (
        <footer className={`${cls} bg-gray-200/80 text-white flex flex-col`}>
            <div className="grid grid-cols-12 lg:gap-x-8 xl:px-12 lg:px-6 sm:px-12 sm:pt-12 sm:pb-6 pb-6">
                <WebsiteInfo  cls="lg:col-span-4 col-span-12" />
                <div className="lg:col-span-5 col-span-12 grid grid-cols-12 sm:p-6 p-2">
                    <div className="col-span-6">
                        <Heading6 cls="text-gray-900 lg:!text-right !text-center" text="لینک های سریع" />
                        <ul className="space-y-4 mt-6 text-sm">
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    کلاس ها
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    پیوستن به ما    
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    درباره ما    
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    وبلاگ
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    رویدادها
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6">
                        <Heading6 cls="text-gray-900 lg:!text-right !text-center" text="ارتباط با ما" />
                        <ul className="space-y-4 mt-6 text-sm">
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    تیم ما
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    قوانین و مقررات   
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    دریافت گواهی    
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    انتقادات و پیشنهادات
                                </Link>
                            </li>
                            <li className="text-gray-600 lg:text-right text-center">
                                <Link href="#">
                                    چشم انداز
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 flex justify-center sm:py-6 py-2">
                    <form className="flex flex-col lg:items-start items-center">
                        <Heading6 text={"خبررسانی"} cls="text-gray-900 mt-4 lg:mt-0" />
                        <div className="grid grid-cols-12 lg:pl-6 mt-6">
                            <input placeholder="ایمیل خود را وارد کنید." className="col-span-9 py-1 px-5 text-gray-900 outline-none" />
                            <button type="submit" className="flex justify-center p-3 bg-baby-9 col-span-3">
                                <SearchBrokenIcon color="white" cls="w-6 h-6" />
                            </button>
                        </div>
                        <Paragraph cls="font-medium text-sm mt-6 leading-loose !text-center lg:!text-right" text="آخرین اخبار درمورد تخفیف ها، اطلاع رسانی ها و موارد دیگر را دریافت کنی ." />
                    </form>
                </div>
            </div>
            <div className="xl:py-8 py-4 md:text-base text-xs sm:text-sm xl:mx-32 mx-4 text-center text-gray-700 border-t border-t-gray-300">
                تمام حقوق مادی و معنوی این سایت متعلق به راحت بخون است .
            </div>
        </footer>
    )
}

export default Footer;