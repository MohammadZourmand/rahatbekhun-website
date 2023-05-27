// ? react ===================
import { Dispatch, FC, SetStateAction } from "react";

// ? components ==============
import CloseIcon from "@/components/global/navbar/mobile/closeIcon";

interface CloseIconAbsProps {
    setState ?: Dispatch<SetStateAction<boolean>>
    cls ?: string
}

const CloseIconAbs : FC<CloseIconAbsProps> = ({setState, cls}) => {

    return (
        <>
            {
                setState && <div className={`${cls} absolute top-8 right-8`}>
                    <CloseIcon cls="w-8 h-8" setState={setState} />
                </div>
            }
        </>
    )
}

export default CloseIconAbs