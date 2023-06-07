
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
    
    const calcWidth = () => {
        let widthSize = completed/all*100
        return `w-[${widthSize}%]`
    }

    return (
        <div className={`relative h-1 ${cls} bg-gray-50 rounded-md`}>
            <div className={`${calcWidth()} bg-baby-9 rounded-md absolute top-0 left-0 h-full`}></div>
        </div>
    )
}

export default StaticProgressbar;