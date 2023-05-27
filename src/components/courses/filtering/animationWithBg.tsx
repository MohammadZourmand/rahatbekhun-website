// ? libraries =====================
import Lottie from "lottie-react";

interface AnimationWithBgProps {
    animationDate : any
    cls ?: string
}

const AnimationWithBg : React.FC<AnimationWithBgProps> = ({animationDate, cls}) => {

    return (
        <div className={cls}>
            <Lottie className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 w-32 h-32 z-10" animationData={animationDate} />
            <div className="absolute lg:-top-8 -top-6 lg:-left-8 -left-6 w-[7.2rem] h-[7.2rem] bg-white rounded-full"></div>
        </div>
    )
}

export default AnimationWithBg;