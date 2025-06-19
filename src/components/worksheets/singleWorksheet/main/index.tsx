/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { worksheetsDataProps } from "../../data";
import PN from 'persian-number'
import { CartBrokenIcon, DownloadPaperBrokenIcon, MessageBrokenIcon, StarBroken } from "@/assets/icons";
import IconBtn from "@/components/global/elements/buttons/iconBtn";


const SingleWorksheetMain = ({data} : {data : worksheetsDataProps}) => {

    const badgeBgColorChooser = (value : string) => {

        switch (value) {
            case "آسان":
                return "bg-blue-500"
            case "تسلا":
                return "bg-red-500"
            default:
                return "bg-green-500"
        }
    }

    console.log('http://localhost:5000'+ data.pdf.split('https://rahatbekhun.ir')[1])

    return (
        <main className="realtive xl:mx-auto mx-2 grid grid-cols-5 max-w-7xl gap-4 lg:mt-0 mt-16">
            <Image 
                src={"/images/courses/page-title-shape-6.webp"}
                alt="circle-pink-with-dashed-div-to-it"
                width={59}
                height={56}
                className="absolute xl:top-72 top-12 xl:right-6 xl:block hidden rotate-90"
            />
            <Image 
                src={"/images/courses/page-title-shape-4.webp"}
                alt="دایره صورتی"
                width={47}
                height={170}
                className="absolute xl:top-48 xl:block lg:hidden block top-48 left-0 rotate-180"
            />
            <Image 
                src={"/images/courses/page-title-shape-1.webp"}
                alt="دایره آبی آسمانی"
                width={55}
                height={191}
                className="absolute 2xl:top-[36rem] lg:top-[40rem] lg:block hidden right-0 rotate-180"
            />
            <div className="lg:col-span-1 sm:col-span-2 col-span-5 z-10 mx-auto">
                <img
                    src={'http://localhost:5000'+data?.image.split('http://rahatbekhun.ir')[1]}
                    alt={data?.name}
                    className="h-80 rounded-lg"
                />
            </div>
            <div className="lg:col-span-3 col-span-5 lg:-order-none order-first">
                <div className="flex items-center text-gray-400 gap-x-1">
                    <span className="hidden xs:inline"> کاربرگ {data._subject} پایه {data?._grade} / </span>
                    <span> {data?.season} </span>
                    <span className={`px-2 py-0.5 rounded text-sm block ${badgeBgColorChooser(data?.level)} text-white`}>{data?.level}</span>
                </div>
                <h1 className="sm:text-4xl text-3xl font-bold text-gray-700 mt-7">
                        {data?.name}
                </h1>
                <div className="grid grid-cols-4 gap-2 mt-7">
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">نویسنده :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.author}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">سطح :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.level}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">صفحات :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{PN.convertEnToPe(data?.pages)}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">جهت :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.rotation}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">نوع :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.type}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">مناسب برای :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.usableFor}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">پاسخنامه :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.key}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm sm:col-span-1 col-span-2 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">سطح نویسنده :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?._author}</span>
                    </div>
                    <div className="bg-gray-100/90 hover:bg-gray-600 transition group rounded-lg text-sm col-span-4 gap-y-2 flex flex-col p-2">
                        <span className="text-gray-400 text-sm transition group-hover:text-gray-200">توضیحات نویسنده :</span>
                        <span className="group-hover:text-gray-50 transition font-semibold text-gray-700">{data?.info}</span>
                    </div>
                    <div className="flex">
                        {
                            data?.hashtags?.map((value, index) => (
                                <h2 className="bg-gray-100 hover:bg-gray-600 hover:text-white transition rounded-lg text-sm py-1 px-3" key={index}>
                                    {value}
                                </h2>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1 sm:col-span-3 col-span-5 p-3">
                <div className="flex items-center">
                    <img
                        src="/images/home/teachers/mohammad-zourmand.webp"
                        alt="Mohammad Zourmand"
                        className="rounded-full w-12 h-12"  
                    />
                    <div className="flex flex-col mr-3">
                        <span className="text-gray-700 text-md font-extrabold"> {data?.author} </span>
                        <span className="text-gray-400 mt-1 text-xs font-semibold"> {data?._author} </span>
                    </div>
                </div>
                <div className="mt-3 border-t">
                    <div className="text-sm flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <StarBroken cls="fill-gray-400 w-6 h-6 ml-1"/>
                            <span className="text-gray-400">امتیاز کاربرگ</span>
                        </div>
                        <span className="font-semibold text-gray-700">{PN.convertEnToPe(data?._rating)}</span>
                    </div>
                </div>
                <div className="border-t">
                    <div className="text-sm flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <DownloadPaperBrokenIcon cls="fill-gray-400 w-6 h-6 ml-1"/>
                            <span className="text-gray-400">تعداد دانلود</span>
                        </div>
                        <span className="font-semibold text-gray-700">{PN.convertEnToPe(135)}</span>
                    </div>
                </div>
                <div className="border-t">
                    <div className="text-sm flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <MessageBrokenIcon cls="fill-gray-400 w-6 h-6 ml-1"/>
                            <span className="text-gray-400">تعداد نظرات</span>
                        </div>
                        <span className="font-semibold text-gray-700">{PN.convertEnToPe(12)}</span>
                    </div>
                </div>
                <div className="border-t">
                    <div className="text-sm flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <CartBrokenIcon cls="fill-gray-400 w-6 h-6 ml-1"/>
                            <span className="text-gray-400">قیمت</span>
                        </div>
                        <span className="font-semibold text-gray-700">
                            {
                                Number(data?.price) === 0
                                ? 'رایگان'
                                : PN.convertEnToPe(data?.price)
                            }
                        </span>
                    </div>
                </div>
                {
                    Number(data?.price) === 0
                    ? <IconBtn
                        text="دانلود کاربرگ"
                        cls="text-sm mt-3 mb-0 w-full !py-2 bg-baby-9 !rounded-lg"
                        iconName="download"
                        href={'http://localhost:5000'+data?.pdf.split('https://rahatbekhun.ir')[1]}
                        target={'_blank'}
                    />
                    : <IconBtn 
                        iconName="cart"
                        text={`خرید کاربرگ (${PN.convertEnToPe(data?.price)} تومان)`}
                        cls="text-sm mt-3 mb-0 w-full px-5 py-2 bg-baby-9 !rounded-lg"
                        // onClick={() => addProductToCart(item)}
                    />
                }
            </div>

        </main>
    )
}

export default SingleWorksheetMain;