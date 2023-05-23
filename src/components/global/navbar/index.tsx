// ? react =======================
import {useState} from "react";

// ? components ==================
import ComputerNavbar from "./computer";
import SearchModal from "./searchModal";

interface NavbarProps {
    cls ?: string
    isWhite ?: boolean
}

const Navbar : React.FC<NavbarProps> = ({cls, isWhite}) => {

    const [isFocus, setIsFocus] = useState<boolean>(false)
    
    return (
        <nav className={`${cls} grid grid-cols-12 w-full px-4 items-center `}>
            <SearchModal isFocus={isFocus} setIsFocus={setIsFocus} />
            <ComputerNavbar isWhite={isWhite} setIsFocusOnSearch={setIsFocus} cls="col-span-12"/>
        </nav>
    )
}

export default Navbar;