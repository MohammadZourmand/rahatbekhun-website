
interface WebsiteNameProps {
    cls ?: string
    textCls ?: string
    isWhite ?: string
}

const WebsiteName : React.FC<WebsiteNameProps> = ({
    cls,
    textCls,
    isWhite
}) => {
    return (
        <div className={`${cls} flex items-center text-[2.5rem]`}>
            {
                isWhite
                ? <img className="w-16 h-16 z-10" src="./images/webLogo.png" alt="rahat-bekhun-learn-easily-website" />
                : <img className="w-16 h-16 z-10" src="./images/white-webLogo.svg" alt="rahat-bekhun-learn-easily-website" />
            }
            
            <div className={`xl:flex lg:hidden ${textCls} flex mr-1 space-x-1 space-x-reverse`}>
                <div className={`nozha ${!isWhite ? "text-white" : "text-baby-1"} z-10`}> راحت </div>
                <div className={`nozha ${!isWhite ? "text-white" : "text-baby-2"} z-10`}> بخون </div>
            </div>
        </div>
    )
}

export default WebsiteName;