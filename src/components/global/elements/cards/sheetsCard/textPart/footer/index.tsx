import PN from "persian-number";

import { worksheetsDataProps } from "@/components/worksheets/data";

import BlueBtn from "@/components/global/elements/buttons/blue";
import IconBtn from "@/components/global/elements/buttons/iconBtn";


interface WorksheetCardFooterProps {
    item : worksheetsDataProps
}

const WorksheetCardFooter = ({item} : WorksheetCardFooterProps) => {

    return (
        <footer>
            {
                item.worksheetPrice === 0
                ? <BlueBtn
                    text="دانلود کاربرگ"
                    cls="text-sm mt-3 mb-0 w-full !py-2"
                />
                : <IconBtn 
                    iconName="cart"
                    text={`خرید کاربرگ (${PN.convertEnToPe(item.worksheetPrice)} تومان)`}
                    cls="text-sm mt-3 mb-0 w-full px-5 py-2 bg-baby-9"
                    // onClick={() => addProductToCart(item)}
                />
            }
        </footer>
    )
}

export default WorksheetCardFooter;