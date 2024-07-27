import FilterBox from "../filterBox";
import { gradeOneFilters } from "./grade1";
import { gradeTwoFilters } from "./grade2";
import { gradeThreeFilters } from "./grade3";
import { gradeFourFilters } from "./grade4";
import { gradeFiveFilters } from "./grade5";
import { gradeSixFilters } from "./grade6";


export default function SeasonSetter({grade, initialValues, handler} : {grade : string, initialValues : any, handler : any}) {
    
    let data;

    switch (grade) {
        case 'اول':
            data = gradeOneFilters
            break;
        case 'دوم':
            data = gradeTwoFilters
            break;
        case 'سوم':
            data = gradeThreeFilters
            break;
        case 'چهارم':
            data = gradeFourFilters
            break;
        case 'پنجم':
            data = gradeFiveFilters
            break;
        case 'ششم':
            data = gradeSixFilters
            break;
        case 'هفتم':
            data = gradeSixFilters
            break;
        default:
            {};
    }

    const options = () => {

        let seasonsData;

        Object.entries(data).forEach((item) => {
            if(item[0] === initialValues?._subject) {
                seasonsData = item[1]
            }
        })

        return seasonsData ?? ['همه']
    }

    return (
        <FilterBox
            item={['_season', {title : 'فصل' , options : options()}]}
            handler={handler}
            cls="sm:col-span-6 col-span-12"
            values={initialValues}
        />
    )
}