import { FC } from "react"

import { coursesData } from "@/components/data/coursesData";
import Card from "@/components/global/elements/cards/card";


const MatchedSearchResults : FC = () => {

    return (
        <div className="grid grid-cols-12 gap-6 lg:mx-6 md:mx-6 sm:mx-2 xs:mx-6 mx-2 mt-8 mb-16">
        {
            coursesData.map((item) => {
                return (
                    <Card
                        key={item.name}
                        item={item}
                        cls="lg:col-span-4 md:col-span-6 col-span-12"
                    />
                )
            })
        }
        </div>
    )
}

export default MatchedSearchResults;