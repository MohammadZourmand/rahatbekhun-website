// ? assets ======================
import Cart from "./cart";
import Messages from "./messages";
import UserPanelPopup from "./user";

interface PopupIconsProps {
    isWhite : boolean
}

const PopupIcons : React.FC<PopupIconsProps> = ({isWhite}) => {
    
    return (
        <>
            <Cart isWhite={isWhite}/>
            <Messages isWhite={isWhite} />
            <UserPanelPopup isWhite={isWhite} />
        </>
    )
}

export default PopupIcons;