
interface BgColorfulBadgeProps {
    color ?: "green" | "red" | "yellow" | "sky" | "purple" | "gray" | "orange"
    darkness ?: "900" | "800" | "700" | "600" | "500" | "400" | "300" | "200" | "100"
    text : string
    cls ?: string
}

const BgColorfulBadge : React.FC<BgColorfulBadgeProps> = ({
    color,
    darkness,
    text,
    cls
}) => {
    
    return (
        <span className={`
            ${color && darkness ? `bg-${color}-${darkness}` :  "bg-green-600"}
            text-white px-4 py-1 rounded-md font-semibold text-sm inline-block
            ${cls}
        `}>
            {text}
        </span>
    )
}

export default BgColorfulBadge;