
// ? components ==================
import ComputerNavbar from "./computer";
import WindowSize from "../functions/windowSize";
import FloatBtn from "./mobile/floatBtn";

interface NavbarProps {
    cls ?: string
    isWhite : boolean
}

const Navbar : React.FC<NavbarProps> = ({cls, isWhite}) => {

    
    return (
        <>
            <nav className={`${cls} grid grid-cols-12 w-full px-4 items-center`}>
                {/* <SearchModal isFocus={isFocus} setIsFocus={setIsFocus} /> */}
                <ComputerNavbar isWhite={isWhite} cls="col-span-12"/>
            </nav>
            {WindowSize().width <= 1024 && <FloatBtn />}
        </>
    )
}

export default Navbar;