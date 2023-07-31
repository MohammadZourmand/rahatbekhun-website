import LiTickIcon from "@/components/global/elements/lists/liTickIcon";

interface TickListProps {
    options : string[]
    iconCls ?: string
    cls ?: string
    liCls ?: string
}

const TickList : React.FC<TickListProps> = ({options, iconCls, liCls, cls}) => {

    return (
        <ul className={`${cls} list-none`}>
            {
                options.map((item : string, index) => (
                    <LiTickIcon cls={liCls} iconCls={iconCls} text={item} />
                ))
            }
        </ul>
    )
}

export default TickList;