
import PN from "persian-number";

const EventTimer : React.FC = () => {

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="flex items-center justify-around px-16 mt-8">
            <div className="flex flex-col px-4 py-2 items-center bg-[#fbce0f1a] text-baby-1 rounded-lg">
                <span className="roosta text-3xl">{PN.convertEnToPe(25)}</span>
                <span className="font-semibold mt-2">روز</span>
            </div>
            <div className="flex flex-col px-4 py-2 items-center bg-[#fbce0f1a] text-baby-1 rounded-lg">
                <span className="roosta text-3xl">{PN.convertEnToPe(25)}</span>
                <span className="font-semibold mt-2">روز</span>
            </div>
            <div className="flex flex-col px-4 py-2 items-center bg-[#fbce0f1a] text-baby-1 rounded-lg">
                <span className="roosta text-3xl">{PN.convertEnToPe(25)}</span>
                <span className="font-semibold mt-2">روز</span>
            </div>
            <div className="flex flex-col px-4 py-2 items-center bg-[#fbce0f1a] text-baby-1 rounded-lg">
                <span className="roosta text-3xl">{PN.convertEnToPe(25)}</span>
                <span className="font-semibold mt-2">روز</span>
            </div>
        </div>
    )
}

export default EventTimer;