import BlueBtn from "@/components/global/elements/buttons/blue";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { worksheetsDataProps } from "@/components/worksheets/data";

interface WorksheetCardFooterProps {
    item : worksheetsDataProps
}

const WorksheetCardFooter : React.FC<WorksheetCardFooterProps> = ({item}) => {

    return (
        <footer>
            {
                item.price === 0
                ? <BlueBtn
                    text="دانلود کاربرگ"
                    cls="text-sm mt-3 mb-0 w-full !py-2"
                />
                : <IconBtn 
                    iconName="cart"
                    text="خرید کاربرگ"
                    cls="text-sm mt-3 mb-0 w-full px-5 py-2 bg-baby-9"
                />
            }
        </footer>
    )
}

export default WorksheetCardFooter;