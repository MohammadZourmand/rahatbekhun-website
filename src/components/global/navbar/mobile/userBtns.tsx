import { AlarmBrokenIcon, CartBrokenIcon, ClockBroken, UserBrokenIcon } from "@/assets/icons";

const UserBtns : React.FC = () => {

    const userStyle = "transition cursor-pointer duration-500 group-hover:scale-110 hover:fill-white hover:bg-gray-700 relative fill-gray-800 bottom-[2px] w-10 h-10 p-2 my-4 bg-slate-200 rounded-full" 

    return (
        <div className="flex items-center justify-center gap-x-2 !self-center border-t pt-4">
            <AlarmBrokenIcon cls={userStyle} />
            <CartBrokenIcon cls={userStyle} />
            <ClockBroken cls={userStyle} />
            <UserBrokenIcon cls={userStyle} />
        </div>
    )
}

export default UserBtns;