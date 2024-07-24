import { worksheetsDataProps } from "@/components/worksheets/data";
import Image from "next/image";
import { useState } from "react";
import Gallery from "../textPart/header/gallery";
import { ErrorToast } from "@/utils/swal";

interface SheetsCardImgPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardImgPart = ({item, cls} : SheetsCardImgPartProps) => {

    const [showWorksheet, setShowWorksheet] = useState<boolean>(false)

    const showHandler = () => {
        Number(item?.price) === 0
            ? setShowWorksheet(true)
            : ErrorToast("ابتدا باید کاربرگ را خریداری کنید !")
    }

    return (
        <div className={`${cls} border border-baby-7 overflow-hidden group absolute -top-12 shadow-all-sm sm:h-1/2 h-[38%] w-11/12 mx-auto rounded-md`}>
            <Image
                loader={({ src, width }) => { return src + "?w=" + width }}
                width={500}
                height={50}
                className="group-hover:scale-110 transition duration-500 rounded-md mx-auto"
                src={item?.image}
                alt="worksheet"
                style={{objectFit:"cover"}}
                onClick={showHandler}
                priority
            />
            <Gallery item={item?.image} setShow={setShowWorksheet} show={showWorksheet} />
        </div>
    )
}

export default SheetsCardImgPart;