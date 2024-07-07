import Image from "next/image";
import Heading3 from "../headings/h3";
import Paragraph from "../paragraph";

interface Props {
    text : string
    text2 ?: string
    cls ?: string
}

const ErrorShower = ({text,text2, cls} : Props) => {
    return (
        <div className={`${cls} flex items-center justify-center`}>
            <Image src={"/images/error-puzzle-boy.png"} alt="error" width={300} height={300}/>
            <div className="flex flex-col gap-y-4">
                <Heading3 text="مشکلی به وجود آمده است !"/>
                <Paragraph text={text}/>
                {text2 && <Paragraph text={text2}/>}
            </div>
        </div>
    )
}

export default ErrorShower;