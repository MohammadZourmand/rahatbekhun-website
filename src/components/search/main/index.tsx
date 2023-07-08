import { FC } from "react"
import SortBox from "./sort";
import MassageBox from "./massageBox";

const AdvancedSearchMain : FC = () => {

    return (
        <main className="max-w-7xl mx-auto mt-8 mb-16">
            <MassageBox />
            <SortBox />
        </main>
    )
}

export default AdvancedSearchMain;