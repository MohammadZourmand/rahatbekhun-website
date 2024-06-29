import { worksheetsDataProps } from "@/components/worksheets/data";
import Image from "next/image";
import { useState } from "react";
import Gallery from "../textPart/header/gallery";
import { ErrorToast, WarningToast } from "@/components/lib/swal";

interface SheetsCardImgPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardImgPart = ({item, cls} : SheetsCardImgPartProps) => {

    const [showWorksheet, setShowWorksheet] = useState<boolean>(false)

    const showHandler = () => {
        item?.price === 0
            ? setShowWorksheet(true)
            : ErrorToast("ابتدا باید کاربرگ را خریداری کنید !")
    }

    return (
        <div className={`${cls} overflow-hidden group absolute -top-12 shadow-all-lg sm:h-1/2 h-[38%] w-11/12 mx-auto rounded-md`}>
            <Image
                width={500}
                height={50}
                className="group-hover:scale-110 transition duration-500 rounded-md mx-auto"
                src={item?.pictures[0]}
                alt="worksheet"
                objectFit="cover"
                onClick={showHandler}
            />
            <Gallery items={item?.pictures} setShow={setShowWorksheet} show={showWorksheet }/>
        </div>
    )
}

export default SheetsCardImgPart;