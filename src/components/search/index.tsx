import { FC } from "react"
import AdvancedSearchHeader from "./header"
import AdvancedSearchMain from "./main"
import Footer from "../global/footer"

const AdvancedSearch : FC = () => {

    return (
        <div>
           <AdvancedSearchHeader />
           <AdvancedSearchMain />
           <Footer />
        </div>
    )
}

export default AdvancedSearch