
import PN from "persian-number";

interface FaSpanProps {
    hasSlicer ?: boolean
    value ?: string | number
    cls ?: string
    suffix ?: string
}

const FaSpan : React.FC<FaSpanProps> = ({cls, hasSlicer, value, suffix}) => {
    return (
        <span className={`${cls ? cls : "ml-0.5"}`}>
            {
                hasSlicer
                ?
                    PN.convertEnToPe(PN.sliceNumber(value))
                :
                    PN.convertEnToPe(value)
            }
            { suffix && ` ${suffix}`}
        </span>
    )
}

export default FaSpan;