import LiTickIcon from "@/components/elements/lists/liTickIcon";

interface TickListProps {
    options : any
    iconCls ?: string
    cls ?: string
    liCls ?: string
}

const TickList = ({options, iconCls, liCls, cls} : TickListProps) => {

    return (
        <ul className={`${cls} list-none`}>
            {
                options.map((item : string, index) => (
                    <LiTickIcon key={index} cls={liCls} iconCls={iconCls} text={item} />
                ))
            }
        </ul>
    )
}

export default TickList;