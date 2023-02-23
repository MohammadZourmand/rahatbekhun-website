
interface BoxProps {
    Icon : any,
    iconColor ?: string,
    iconBgColor ?: string,
    iconCls ?: string,
    iconStroke ?: number,
    headerText : string,
    headerColor ?: string,
    paraText : string
}

const Box : React.FC<BoxProps> = ({
    Icon,
    iconCls,
    iconColor,
    iconBgColor,
    iconStroke,
    headerText,
    headerColor,
    paraText
}) => {
    
    return (
        <div className="grid grid-cols-12 xs:justify-start justify-center xs:mr-0 mr-2 gap-0">
            <Icon color={iconColor ?? "white"} className={`${iconCls} ${iconBgColor ?? "bg-baby-3"} mt-2 lg:col-span-2 col-span-1  lg:w-16 lg:h-16 w-20 h-20 rounded-full p-2`} stroke={iconStroke ?? 0.7} />
            <div className="text-base xs:mr-[3.5rem] mr-16 lg:col-span-10 col-span-11">
                <h2 className={`${headerColor ?? "text-baby-3"} roosta text-2xl`}> {headerText} </h2>
                <p className="text-baby-1 leading-loose md:pl-12 xs:pl-8 mt-2 text-[0.95rem]"> {paraText} </p>
            </div>
        </div>
    )
}

export default Box;