import Link from "next/link";
import WebsiteName from "../elements/boxes/websiteName";
import { IconBrandGooglePlay, IconBrandInstagram, IconBrandTelegram, IconBrandZalando } from "@tabler/icons-react";


const Footer : React.FC = () => {
    
    return (
        <footer className="bg-baby-8 text-white">
            <div className="grid grid-cols-12 gap-x-8 sm:px-12 sm:pt-12 sm:pb-6 pb-6">
                <div className="lg:col-span-5 col-span-12 flex flex-col sm:p-6 p-2">
                    <WebsiteName cls="sm:block flex justify-center" />
                    <p className="text-white sm:text-right text-center leading-[2.5]"> ما در راحت بخون مفتخریم که در خدمت دانش آموزان بزرگ کشور بزرگ و پرشکوه ایران هستیم. دانش آموزانی که هر کدامشان قطعه کوچک پازل بزرگ آینده درخشان کشوری پیشرفته و به دور از هر سختی و جنگی خواهند بود اگر ما راه را به آنها نشان دهیم . </p>
                    <div className="flex sm:justify-start justify-center py-8">
                        <Link href="#" className="bg-baby-1 transition-all duration-500 hover:bg-baby-6 rounded-full p-2 ml-2">
                            <IconBrandGooglePlay color="white" className="scale-[.8]"/>
                        </Link>
                        <Link href="#" className="bg-baby-1 transition-all duration-500 hover:bg-baby-6 rounded-full p-2 mx-2">
                            <IconBrandTelegram color="white" className="scale-[.8]"/>
                        </Link>
                        <Link href="#" className="bg-baby-1 transition-all duration-500 hover:bg-baby-6 rounded-full p-2 mx-2">
                            <IconBrandInstagram color="white" className="scale-[.9]"/>
                        </Link>
                        <Link href="#" className="bg-baby-1 transition-all duration-500 hover:bg-baby-6 rounded-full p-2 mx-2">
                            <IconBrandZalando color="white" className="scale-[.8]"/>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-7 col-span-12 grid grid-cols-12 sm:p-6 p-2">
                    <div className="col-span-6">
                        <h2 className="roosta sm:text-3xl text-[1.8rem] py-7"> لینک های سریع </h2>
                        <ul className="space-y-6">
                            <li>
                                <Link href="#">
                                    کلاس ها
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    پیوستن به ما    
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    درباره ما    
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    وبلاگ
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    رویدادها
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6">
                        <h2 className="roosta sm:text-3xl text-[1.8rem] py-7"> ارتباط با ما </h2>
                        <ul className="space-y-6">
                            <li>
                                <Link href="#">
                                    تیم ما
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    قوانین و مقررات   
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    دریافت گواهی    
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    انتقادات و پیشنهادات
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    چشم انداز
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pb-12 text-center">
                تمام حقوق مادی و معنوی این سایت متعلق به راحت بخون است .
            </div>
        </footer>
    )
}

export default Footer;