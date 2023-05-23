import Navbar from "../../navbar";


interface PageHeaderProps {
    head1 ?: string,
    head2 ?: string,
}

const PageHeader : React.FC<PageHeaderProps> = ({
    head1,
    head2,
}) => {

    return (
        <header className={`
            bg-[url('/images/courses/school-girl-wearing-headphones-virtual-school.jpg')]
            lg:bg-[center_top_-8rem]
            sm:h-[30rem] h-[25rem] bg-cover overflow-hidden relative w-full
        `}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            <Navbar isWhite={true} />
            <div className="text-white sm:px-[6.5rem] sm:py-16 px-[3rem] py-8 flex flex-col md:items-start items-center justify-center my-32 xs:rounded-[5rem] rounded-[3rem]">
                <h2 className="sm:text-5xl text-[1.9rem] !leading-tight font-extrabold md:text-right text-center z-10"> دوره های آموزشی </h2>
                <h3 className="text-medium !leading-none my-8 z-10">
                    <span>خانه </span>
                    <span className="relative mx-3 after:absolute after:bottom-2 after:left-0 after:w-1 after:h-1 after:bg-white after:rounded-full"></span>
                    <span>دوره های صفر تا صد</span>
                </h3>
            </div>
        </header>
    )
}

export default PageHeader;