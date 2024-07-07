import loading from "@/animations/Eclipse@1x-1.0s-200px-200px.svg";
import Image from "next/image";
interface Props {
    text : string
    fullScreen ?: boolean
    cls ?: string
}

const CircleLoading = ({text, fullScreen, cls} : Props) => {
    return (
        <div className={`${cls} ${fullScreen && 'fixed top-0 left-0 w-full h-full'} flex flex-col items-center justify-center`}>
            <Image src={loading} alt="راحت بخون" width={200} height={200}/>
            <p className="mt-2 text-gray-700 xs:text-lg font-bold">{text}</p>
        </div>
    )
}

export default CircleLoading;