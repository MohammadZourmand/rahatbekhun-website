

const Header : React.FC = () => {

    return (
        <header data-aos="fade-up" data-aos-duration="3000">
            <h2 className="flex xs:flex-row flex-col items-center justify-center text-baby-1 roosta">
                <span className="mx-2 text-baby-6 roosta"> به مدرسه راحت بخون </span>
                خوش آمدید
            </h2>
            <p className="text-baby-1 leading-[2.5] sm:mt-6 mt-2 xl:px-24 md:px-12 px-6 text-center text-base font-medium">
                در وبسایت راحت بخون ما برای اولین بار در ایران یک چرخه یادگیری برای شما آماده کرده ایم تا به صورت رایگان تمامی مراحل یادگیری مانند آموزش، پرسش و پاسخ، تکمیل یادگیری در قالب بازی و در نهایت حل سوالات و کاربرگ ها را انجام دهید تا مباحث کتاب را به طور کامل یاد بگیرید.
            </p>
        </header>
    )
}

export default Header;