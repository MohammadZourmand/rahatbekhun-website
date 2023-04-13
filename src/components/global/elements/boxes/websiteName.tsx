
interface WebsiteNameProps {
    cls ?: string
    isFixed : boolean
}

const WebsiteName : React.FC<WebsiteNameProps> = ({
    cls,
    isFixed
}) => {
    return (
        <section className={cls}>
            <div className={`${isFixed && "xl:!py-2 xl:!text-3xl !text-2xl sm:pr-0 pr-4"} sm:text-3xl text-[1.8rem] py-6`}>
                <span className={`${isFixed && "!text-white"} roosta text-baby-1`}> مدرسه </span>
                <span className={`${isFixed && "!text-white"} roosta text-baby-6`}> آنلاین </span>
                <span className={`${isFixed && "!text-white"} roosta text-baby-4`}> راحت </span>
                <span className={`${isFixed && "!text-white"} roosta text-baby-2`}> بخون </span>
            </div>
        </section>
    )
}

export default WebsiteName;