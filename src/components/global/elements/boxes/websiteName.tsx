
interface WebsiteNameProps {
    cls ?: string
}

const WebsiteName : React.FC<WebsiteNameProps> = ({
    cls,
}) => {
    return (
        <div className={`${cls} flex items-center text-[2.5rem]`}>
            <img className="w-16 h-16" src="./images/webLogo.png" alt="rahat-bekhun-learn-easily-website" />
            <div className="xl:flex lg:hidden flex mr-1 space-x-1 space-x-reverse">
                <div className={`nozha text-baby-1`}> راحت </div>
                <div className={`nozha text-baby-2`}> بخون </div>
            </div>
        </div>
    )
}

export default WebsiteName;