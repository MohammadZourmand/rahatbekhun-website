
interface WebsiteNameProps {
    cls ?: string
}

const WebsiteName : React.FC<WebsiteNameProps> = ({
    cls,
}) => {
    return (
        <div className={`${cls} flex items-center sm:text-[2.5rem] text-[1.8rem]`}>
            <img className="w-20 h-20" src="./images/webLogo.png" alt="rahat-bekhun-learn-easily-website" />
            <div className="mr-2 space-x-1 space-x-reverse">
                <span className={`nozha text-baby-1`}> راحت </span>
                <span className={`nozha text-baby-2`}> بخون </span>
            </div>
        </div>
    )
}

export default WebsiteName;