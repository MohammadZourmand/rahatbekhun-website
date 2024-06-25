
import { FC, useState } from "react";

interface DarkBackgroundProps {
    show : boolean,
    setShow : any
}

const DarkBackground : FC<DarkBackgroundProps> = ({
    show,
    setShow
}) => {
    
    return (
        <div 
            className={`
                ${show ? "block" : "hidden"}
                fixed top-0 left-0 w-full h-full z-40 
            `}
            onClick={() => setShow(false)}
        ></div>
    )
}

export default DarkBackground;