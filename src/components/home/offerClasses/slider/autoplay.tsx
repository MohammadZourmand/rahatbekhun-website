// ? react =========================
import { useRef } from "react";

// ? libraries =====================
import PN from "persian-number";

let progressCircle : any;
let progressContent : any; 

const onAutoplayTimeLeft = (s : any, time :number, progress : number) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${PN.convertEnToPe(Math.ceil(time / 1000))}`;
};

const OfferSliderAutoPlay : React.FC = () => {

    progressCircle = useRef(null);
    progressContent = useRef(null);
    
    return (
        <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
        </div>
    )
}

export { OfferSliderAutoPlay , onAutoplayTimeLeft};