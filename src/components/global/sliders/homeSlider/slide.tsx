import { ActivityBroken, EditSquareBroken, GameBroken, TickSquareBroken } from "@/assets/icons"
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
        <div className={cls}>
            <div className="absolute bottom-[30%] left-[15%]">
                <MovingText
                    type="slideInFromLeft"
                    duration="2000ms"
                    delay="4s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="both"
                >
                    <ActivityBroken cls="w-24 h-24" color="#d35400" />
                </MovingText>
            </div>
            <div className="absolute bottom-[30%] right-[10%]">
                <MovingText
                    type="slideInFromRight"
                    duration="2000ms"
                    delay="3s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="both"
                >
                    <TickSquareBroken cls="w-24 h-24" color="green" />
                </MovingText>
            </div>
            <div className="absolute top-[20%] left-[20%]">
                <MovingText
                    type="slideInFromLeft"
                    duration="2000ms"
                    delay="3s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="both"
                >
                    <GameBroken cls="w-24 h-24 rotate-[-10deg]" color="#8e44ad" />
                </MovingText>
            </div>
            <div className="absolute top-[12%] right-[20%]">
                <MovingText
                    type="slideInFromRight"
                    duration="2000ms"
                    delay="4s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="both"
                >
                    <EditSquareBroken cls="w-24 h-24 rotate-[25deg]" color="#3498db" />
                </MovingText>
            </div>
            <MovingText
                type="fadeInFromTop"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
            >
                <div className="overflow-hidden">
                    <h2 className="w-[40rem] text-center text-[5rem] leading-relaxed nozha text-[yellow] text-shadow">
                        {text}
                    </h2>
                </div>
            </MovingText>
        </div>
    )
}

export default Slide;