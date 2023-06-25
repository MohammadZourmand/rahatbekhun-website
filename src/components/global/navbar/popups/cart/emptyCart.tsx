import { BagIcon } from "@/assets/icons";

const EmptyCart : React.FC = () => {
    
    return (
        <div className="flex flex-col text-lg font-semibold text-gray-400 items-center justify-center border-[3px] border-dashed rounded-lg m-3 h-72">
            <BagIcon cls="fill-gray-400 w-16 h-16 mb-2" />
            سبد خرید شما خالی است.
        </div>
    )
}

export default EmptyCart;