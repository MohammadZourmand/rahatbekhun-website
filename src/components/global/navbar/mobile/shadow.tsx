import { Dispatch, SetStateAction } from "react";

interface ShadowProps {
    setShowNavbar : Dispatch<SetStateAction<boolean>>
}

const Shadow : React.FC<ShadowProps> = ({setShowNavbar}) => {

    return (
        <div onClick={() => setShowNavbar(false)} className="fixed top-0 left-0 w-full h-full bg-slate-400/50 z-[9999]"></div>
    )
}

export default Shadow;