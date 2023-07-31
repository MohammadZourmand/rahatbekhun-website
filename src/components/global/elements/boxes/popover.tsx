
interface PopoverProps {
    distanceCls : string
    cls ?: string
    value : string
}

const Popover : React.FC<PopoverProps> = ({
    distanceCls, cls, value
}) => {
    
    return (
        <div className={`${distanceCls} ${cls} -top-10 hidden group-hover:block text-white bg-gray-900 absolute p-1.5 text-sm rounded-lg whitespace-nowrap`}>
            {value}
        </div>
    )
}

export default Popover;