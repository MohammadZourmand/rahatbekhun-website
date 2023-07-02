// ? react ======================
import Link from "next/link";

// ? assets =====================
import { LeftIcon } from "@/assets/icons";

interface BlueLeftProps {
    text : string
    href ?: string, 
    cls ?: string
}

const BlueLeft : React.FC<BlueLeftProps> = ({text, href, cls}) => {

    return (
        <Link href={href ?? "//"} className={`${cls} group my-8 flex items-center text-base font-semibold bg-baby-3 text-white p-5 rounded-xl`}>
            {text}
            <LeftIcon color="white" cls="group-hover:-translate-x-2 transition mr-2" />
        </Link>
    )
}

export default BlueLeft