'use client'

import { useContext, useState } from "react";

import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { courseOptions, testOptions, values, videosOptions, worksheetOptions } from "./initialvalues";
import ContectType from "./contentType";
import { SearchContext } from "@/context/search";
import Selecters from "./selecters";

const AdvancedSearchFrom = () => {
    
    const [typeData, setTypeData] = useState<any>(worksheetOptions)
    const [initialvalues, setInitialValues] = useState(values)

    const {searchData, setSearchData} = useContext(SearchContext)
    
    const contentTypeHandler = (item : string) => {
        setInitialValues(prev => {
            return {...prev, _type : item}
        })

        switch (item) {
            case 'ویدیوها': 
                setTypeData(videosOptions)
                break;
            case 'آزمون': 
                setTypeData(testOptions)
                break;
            case 'دوره های آموزشی': 
                setTypeData(courseOptions)
                break;
            default : 
                setTypeData(worksheetOptions)
        }
    }

    const changeHandler = (key : string, value : string) => {
        setInitialValues(prev => {
            return {
                ...prev,
                [key] : value
            }
        })
    }

    const SearchHandler = async () => {

        let data = ''

        Object.entries(initialvalues).forEach((item) => {
            if(item[1] !== 'همه') {
                data += `${item[0]}=${item[1]}&`
            }
        })

        setSearchData(data)
    }

    return (
        <div className="max-w-7xl w-full mx-auto z-20">
            <ContectType
                initialvalues={initialvalues}
                handler={contentTypeHandler}
            />
            <Selecters 
                changeHandler={changeHandler}
                initialvalues={initialvalues}
                typeData={typeData}
            />
            <IconBtn
                onClick={SearchHandler}
                iconName="search"
                cls="w-64 mx-auto"
                text="جست و جو رو آغاز کن"
            />
        </div>
    )
}

export default AdvancedSearchFrom