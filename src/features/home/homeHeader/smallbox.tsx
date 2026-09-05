import { DataProps } from "./boxesData";

const SmallBox = ({item} : {item : DataProps}) => {

    return (
        <div className="sm:col-span-6 col-span-12 flex items-center justify-center font-semibold text-gray-500">
            <div className={`relative w-6 h-6 rounded-full ${item.circleColor}`}>
                {item.icon}
            </div>
            <div className="mr-2">
                {item.text}
            </div>
        </div>
    )
}

export default SmallBox;