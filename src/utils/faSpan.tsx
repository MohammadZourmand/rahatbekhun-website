
import PN from "persian-number";

interface FaSpanProps {
    hasSlicer ?: boolean
    value ?: any
    cls ?: string
    suffix ?: string
}

const FaSpan = ({cls, hasSlicer, value, suffix} : FaSpanProps) => {
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