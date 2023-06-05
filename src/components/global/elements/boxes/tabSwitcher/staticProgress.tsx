
interface StaticProgressbarProps {
    completed : number
    all : number
    cls ?: string
}

const StaticProgressbar : React.FC<StaticProgressbarProps> = ({
    completed,
    all,
    cls
}) => {
    
    return (
        <div className={`relative h-1 ${cls} bg-gray-50 rounded-md`}>
            <div className={`w-${[completed/all*100]} bg-baby-9 rounded-md absolute top-0 left-0 h-full`}></div>
        </div>
    )
}

export default StaticProgressbar;