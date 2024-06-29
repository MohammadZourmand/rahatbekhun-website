import { SearchIcon } from "@/assets/animation/svg";

interface LoadingsProps {
    loadingText : string
}

const Loadings = ({loadingText} : LoadingsProps) => {


    return (
        // loadingType && <div className="fixed inset-0 w-full h-full bg-black/90 flex flex-col items-center justify-center z-50">
        //     {
        //         loadingType === "pages" && <>
        //             <SearchIcon />
        //             <span className="text-white text-lg text-center">
        //                 {loadingText}
        //             </span>
        //         </>
        //     }
        // </div>
        <></>
    )
}

export default Loadings;