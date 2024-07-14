import { globalOptions } from "./initialvalues"
import SelectBoxDiv from "./selectboxDiv"

interface Props {
    changeHandler : (key : string, value : string) => void
    initialvalues : any
    typeData : any
}

const Selecters = ({changeHandler, initialvalues, typeData} : Props) => {
    return (
        <div className="grid grid-cols-12 gap-x-6 mt-6">
            {
                Object.entries(globalOptions).map((item : any, index : number) => {
                    return (
                        <SelectBoxDiv 
                            key={index}
                            changeHandler={changeHandler}
                            initialState={initialvalues}
                            options={item[1].options}
                            title={item[1].title}
                            name={item[0]}
                        />
                    )
                })
            }
            {
                Object.entries(typeData).map((item : any, index : number) => {
                    return (
                        <SelectBoxDiv
                            key={index}
                            changeHandler={changeHandler}
                            initialState={initialvalues}
                            options={item[1].options}
                            title={item[1].title}
                            name={item[0]}
                        />
                    )
                })
            }
        </div>
    )
}

export default Selecters