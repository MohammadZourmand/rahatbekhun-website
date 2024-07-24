import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";


const Gallery = ({ item, show, setShow} : {item : string, show : boolean, setShow : Dispatch<SetStateAction<boolean>>}) => {

    const ref = useRef(null)

    return (
        <div ref={ref} onClick={(e) => ref?.current === e?.target && setShow(false)} className={`${show ? "fixed" : "hidden" } z-[9999] flex items-center justify-center top-0 left-0 w-full h-full bg-gray-900/60`}>
            <div className="fixed xs:w-[30rem] w-[320px] h-[90%] rounded-lg overflow-hidden">
                <Image
                    loader={({ src, width }) => { return src + "?w=" + width }}
                    src={item}
                    alt="worksheet"
                    className="z-50"
                    fill
                />
            </div>
        </div>
    )
}

export default Gallery;