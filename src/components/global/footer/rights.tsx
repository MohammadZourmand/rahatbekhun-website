import { FC } from "react";

interface RightsProps {
    
}


const Rights : FC<RightsProps> = () => {

    return (
        <div className="xl:py-8 py-4 md:text-base text-xs sm:text-sm xl:mx-32 mx-4 text-center text-gray-700 border-t border-t-gray-300">
            تمام حقوق مادی و معنوی این سایت متعلق به راحت بخون است .
        </div>
    )
}

export default Rights;