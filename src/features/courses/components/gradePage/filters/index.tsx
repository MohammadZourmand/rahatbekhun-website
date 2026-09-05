import { values } from "./intialvalues"
import { filtersInfo } from "./filtersInfo";
import FilterBox from "./filterBox";
import { useState, Dispatch, SetStateAction } from "react";
import IconBtn from "@/components/form/buttons/iconBtn";
import StoryLineBox from "../storyLineBox";
import { subjectsData } from "../data";
import SeasonSetter from "./seasonSetter";
import { useRouter } from "next/navigation";

interface FiltersProps {
    grade : string
    setShow : Dispatch<SetStateAction<boolean>>
    params : any
}

const Filters = ({grade, params, setShow} : FiltersProps) => {
    
    const [initialValues, setInitialValues] = useState(values)
    const router = useRouter()

    const changeHandler : (type : string, value: string) => void = (type, value) => {
        setInitialValues((prevState) => {
            if(type === '_subject') {
                return {
                    ...prevState,
                    [type] : value,
                    _season : 'همه'
                }
            }

            return {...prevState, [type] : value,}
        })
    }

    const searchHandler = () => {
        let filters = ''

        Object.entries(initialValues).forEach((item) => {
            if(item[1] !== 'همه') {
                filters += `${item[0]}=${item[1]}&`
            }
        })

        setShow(false)
        router.push(`http://localhost:3000/worksheets/${params?.grade}?per_page=16&page=1&${filters ?? ''}`)
    } 

    return (
        <div className="grid grid-cols-12 items-start justify-start xs:gap-8 gap-y-8 w-full">
            <StoryLineBox
                clickHandler={(item) => changeHandler('_subject', item)}
                cls="col-span-12 !justify-start pr-2"
                defaultValue={initialValues?._subject}
                data={subjectsData(grade)}
            />
            <SeasonSetter grade={grade} initialValues={initialValues} handler={changeHandler} />
            {
                Object.entries(filtersInfo).map((item, index) => {
                    return (
                        <FilterBox
                            key={index}
                            item={item}
                            handler={changeHandler}
                            cls={`sm:col-span-6 col-span-12 ${item[0] === 'type' && '!col-span-12'}`}
                            values={initialValues}
                        />
                    )
                })
            }
            <IconBtn onClick={searchHandler} cls="!my-0 py-[8px] px-8 self-end col-span-12" iconName="filter" text="اعمال فیلتر"/>
        </div>
    )
}

export default Filters;