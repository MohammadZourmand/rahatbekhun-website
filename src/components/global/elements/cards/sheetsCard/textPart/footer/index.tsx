import { worksheetsDataProps } from "@/components/worksheets/data";

import IconBtn from "@/components/global/elements/buttons/iconBtn";

interface WorksheetCardFooterProps {
    item : worksheetsDataProps
}

const WorksheetCardFooter = ({item} : WorksheetCardFooterProps) => {

    return (
        <footer>
            {
                Number(item?.price) === 0
                ? <IconBtn
                    text="دانلود کاربرگ"
                    cls="text-sm mt-3 mb-0 w-full !py-2 bg-baby-9"
                    iconName="download"
                    href={item?.pdf}
                    target="_blank"
                />
                : <IconBtn 
                    iconName="cart"
                    text="EDIT NEED"
                    // text={`خرید کاربرگ (${PN.convertEnToPe(item?.price)} تومان)`}
                    cls="text-sm mt-3 mb-0 w-full px-5 py-2 bg-baby-9"
                    // onClick={() => addProductToCart(item)}
                />
            }
        </footer>
    )
}

export default WorksheetCardFooter;