import { worksheetsDataProps } from "@/components/worksheets/data";
import WorksheetCardMain from "./main";
import WorksheetCardHeader from "./header";
import WorksheetCardFooter from "./footer";

interface SheetsCardTextPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardTextPart = ({item, cls} : SheetsCardTextPartProps) => {

    return (
        <div className={`${cls} py-10 px-5`}>
            <WorksheetCardHeader item={item} />
            <WorksheetCardMain item={item}/>
            <WorksheetCardFooter item={item}/>
        </div>
    )
}

export default SheetsCardTextPart;