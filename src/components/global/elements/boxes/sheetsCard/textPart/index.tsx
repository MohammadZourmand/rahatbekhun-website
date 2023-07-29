import { worksheetsDataProps } from "@/components/worksheets/data";
import Paragraph from "../../../paragraph";
import Heading1 from "../../../headings/h1";
import FaSpan from "../../card/faSpan";
import WorksheetCardMain from "./main";
import WorksheetCardHeader from "./header";
import WorksheetCardFooter from "./footer";

interface SheetsCardTextPartProps {
    item : worksheetsDataProps
    cls ?: string
}

const SheetsCardTextPart : React.FC<SheetsCardTextPartProps> = ({item, cls}) => {

    return (
        <div className={`${cls} py-10 px-5 w-72 h-full`}>
            <WorksheetCardHeader item={item} />
            <WorksheetCardMain item={item}/>
            <WorksheetCardFooter item={item}/>
        </div>
    )
}

export default SheetsCardTextPart;