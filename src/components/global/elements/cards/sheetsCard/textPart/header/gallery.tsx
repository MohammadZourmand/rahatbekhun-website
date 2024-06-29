import { ChevronLeft } from "@/assets/icons";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";


const Gallery = ({ items, show, setShow} : {items : string[], show : boolean, setShow : Dispatch<SetStateAction<boolean>>}) => {

    const [imgNumber, setImgNumber] = useState<number>(0)
    const ref = useRef(null)

    const increaser = () => {
        imgNumber + 1 === items.length
            ? setImgNumber(0)
            : setImgNumber(imgNumber+1)
    }

    const decreaser = () => {
        imgNumber === 0
        ?   setImgNumber(items.length-1)
        :   setImgNumber(imgNumber-1)
    }

    return (
        <div ref={ref} onClick={(e) => ref?.current === e?.target && setShow(false)} className={`${show ? "fixed" : "hidden" } z-[9999] flex items-center justify-center top-0 left-0 w-full h-full bg-gray-900/60`}>
            <div className="fixed xs:w-[30rem] w-[320px] h-[90%] rounded-lg overflow-hidden">
                <Image
                    src={items[imgNumber]}
                    alt="worksheet"
                    className="z-50"
                    fill
                />
            </div>
            <ChevronLeft onClick={() => decreaser()} cls="absolute w-36 h-36 -left-8 z-50 fill-gray-200"/>
            <ChevronLeft onClick={() => increaser()} cls="absolute w-36 h-36 -right-8 z-50 rotate-180 z-50 fill-gray-200"/>
        </div>
    )
}

export default Gallery;