

const HomeHeader : React.FC = () => {

    return (
        <header className="flex items-center justify-center bg-[url('/images/home/drawing-by-desk.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-[45rem] ">
            <div className="absolute sm:left-[100px] xs:left-[20px] left-[1.5vw] top-16 sm:w-[32rem] sm:h-[32rem] xs:w-[28rem] xs:h-[28rem] w-[90vw] h-[32rem] sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center xs:rounded-[5rem] rounded-[3rem] bg-white">
                <h2 className="roosta text-baby-1 sm:text-[96px] text-[88px] !leading-tight font-extrabold md:text-right text-center">  یادگیری باکیفیت </h2>
                <h3 className="roosta text-baby-4 sm:text-4xl !leading-none text-[1.8rem] my-8"> برای تمامی سنین ابتدایی </h3>
                <button className="btnHoverToRight ">
                    <span className="sm:!text-xl xs:text-xl !text-2xl"> مشاهده دوره ها </span>
                </button>
            </div>
        </header>
    )
}

export default HomeHeader;