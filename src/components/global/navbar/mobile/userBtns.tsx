import { IconBellRinging, IconBrightness, IconShoppingCart } from "@tabler/icons-react";

const UserBtns : React.FC = () => {

    return (
        <div className="flex items-center justify-center !self-center border-t pt-4">
            <IconBellRinging color="#2c3e50" className="relative bottom-[2px] w-10 h-10 p-2 my-4 mx-2 bg-slate-200 rounded-full" />
            <IconShoppingCart color="#2c3e50" className="relative bottom-[2px] w-10 h-10 p-2 my-4 mx-2 bg-slate-200 rounded-full" />
            <IconBrightness color="#2c3e50" className="relative bottom-[2px] w-10 h-10 p-2 my-4 mx-2 bg-slate-200 rounded-full" />
        </div>
    )
}

export default UserBtns;