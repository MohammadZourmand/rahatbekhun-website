import { IconBrandYoutube, IconDeviceGamepad2, IconFileReport } from "@tabler/icons-react";


const Welcome : React.FC = () => {

    return (
        <article className="flex flex-col mt-20 lg:mx-[80px] lg:text-6xl md:mx-[40px] md:text-6xl sm:mx-[30px] sm:text-5xl xs:mx-[10px] xs:text-[2.45rem] text-[2.65rem] leading-relaxed mb-64">
            <section>
                <h2 className="flex xs:flex-row flex-col items-center justify-center text-baby-1 roosta z-[9999999]">
                    <span className="mx-2 text-baby-6 roosta"> به مدرسه راحت بخون </span>
                    خوش آمدید
                </h2>
                <p className="text-baby-1 leading-[2.5] sm:mt-6 mt-2 xl:px-24 md:px-12 px-6 text-center text-base font-medium">
                    در وبسایت راحت بخون ما برای اولین بار در ایران یک چرخه یادگیری برای شما آماده کرده ایم تا به صورت رایگان تمامی مراحل یادگیری مانند آموزش، پرسش و پاسخ، تکمیل یادگیری در قالب بازی و در نهایت حل سوالات و کاربرگ ها را انجام دهید تا مباحث کتاب را به طور کامل یاد بگیرید.
                </p>
            </section>
            <section className="grid grid-cols-12 my-8">
                <div className="flex flex-col p-4 space-y-8 lg:col-span-5 col-span-12 justify-center">
                    <div className="grid grid-cols-12 xs:justify-start justify-center xs:mr-0 mr-2 gap-0">
                        <IconBrandYoutube color="white" className="mt-2 lg:col-span-2 col-span-1 bg-baby-3 lg:w-16 lg:h-16 w-20 h-20 rounded-full p-2" stroke={0.7} />
                        <div className="text-base xs:mr-[3.5rem] mr-16 lg:col-span-10 col-span-11 ">
                            <h2 className="text-baby-3 roosta text-2xl"> ویدیوهای جذاب آموزشی </h2>
                            <p className="text-baby-1 leading-loose md:pl-12 xs:pl-8 mt-2 text-[0.95rem]"> آموزش هایی با سطوح مختلف و صفحه به صفحه برای تمامی دانش آموزان </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 xs:justify-start justify-center xs:mr-0 mr-2 gap-0">
                        <IconFileReport color="white" className="mt-2 lg:col-span-2 col-span-1 bg-baby-4 lg:w-16 lg:h-16 w-20 h-20 rounded-full p-3" stroke={0.7} />
                        <div className="text-base xs:mr-[3.5rem] mr-16 lg:col-span-10 col-span-11">
                            <h2 className="text-baby-4 roosta text-2xl"> کاربرگ های متنوع، جذاب و به روز </h2>
                            <p className="text-baby-1 leading-loose md:pl-12 xs:pl-8 mt-2 text-[0.95rem]"> کاربرگ هایی از پایه اول تا ششم به همراه آزمون های عملکردی و تکالیف خلاقیتی و مهارتی </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 xs:justify-start justify-center xs:mr-0 mr-2 gap-0">
                        <IconDeviceGamepad2 color="white" className="mt-2 lg:col-span-2 col-span-1 bg-baby-2 lg:w-16 lg:h-16 w-20 h-20 rounded-full p-2" stroke={0.7} />
                        <div className="text-base xs:mr-[3.5rem] mr-16 lg:col-span-10 col-span-11">
                            <h2 className="text-baby-2 roosta text-2xl"> بازی های سرگرم کننده آموزشی </h2>
                            <p className="text-baby-1 leading-loose md:pl-12 xs:pl-8 mt-2 text-[0.95rem]"> اگر از دیدن و شنیدن فیلم آموزشی خسته شده اید پس بازی کنید، لذت ببرید و یاد بگیرید! </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 col-span-12 xs:mt-0 mt-8">
                    <img className="xs:p-4 p-1 xl:rounded-[5rem] xs:rounded-[3rem] rounded-2xl h-full w-full" src="./images/home/classmates-working-together.jpg" alt="kids-learning-online-by-rahatbekhun" />
                </div>
            </section>
        </article>
    )
}

export default Welcome;