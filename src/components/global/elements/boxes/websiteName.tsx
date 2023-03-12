
interface WebsiteNameProps {
    cls ?: string
}

const WebsiteName : React.FC<WebsiteNameProps> = ({
    cls
}) => {
    return (
        <section className={cls}>
            <div className="sm:text-3xl text-[1.8rem] py-6">
                <span className="roosta text-baby-1"> مدرسه </span>
                <span className="roosta text-baby-6"> آنلاین </span>
                <span className="roosta text-baby-4"> راحت </span>
                <span className="roosta text-baby-2"> بخون </span>
            </div>
        </section>
    )
}

export default WebsiteName;