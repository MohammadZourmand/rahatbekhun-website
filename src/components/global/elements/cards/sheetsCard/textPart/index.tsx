import { worksheetsDataProps } from "@/components/worksheets/data";
import WorksheetCardMain from "./main";
import WorksheetCardHeader from "./header";
import WorksheetCardFooter from "./footer";

interface SheetsCardTextPartProps {
    item : worksheetsDataProps
    cls ?: string
    grade ?: string
}

const SheetsCardTextPart = ({item, cls, grade} : SheetsCardTextPartProps) => {

    return (
        <div className={`${cls ?? ''} sm:py-10 sm:px-5 mt:pt-0 pb-5`}>
            <WorksheetCardHeader item={item} grade={grade}/>
            <WorksheetCardMain item={item}/>
            <WorksheetCardFooter item={item}/>
        </div>
    )
}

export default SheetsCardTextPart;