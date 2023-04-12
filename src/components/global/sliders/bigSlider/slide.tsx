import MovingText from "react-moving-text"

interface SlideProps {
    text : string
    cls : string
}

const Slide : React.FC<SlideProps> = ({
    text,
    cls
}) => {

    return (
        <>
            <div className={cls}>
            <MovingText
                type="fadeInFromTop"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <div className="overflow-hidden">
                    <h2 className="w-[40rem] text-center text-[5rem] leading-relaxed nozha text-[yellow] text-shadow">
                        {text}
                    </h2>
                </div>
            </MovingText>
            </div>
        </>
    )
}

export default Slide;