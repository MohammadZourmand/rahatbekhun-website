// ? react =======================
import { Dispatch, SetStateAction, useState } from "react";

// ? components ==================
import { SearchTypesData, searchTypesDataProps } from "./searchTypesData";

// ? assets ======================
import { SearchBrokenIcon } from "@/assets/icons";

interface SearchModalProps {
    isFocus : boolean
    setIsFocus : Dispatch<SetStateAction<boolean>>
}

const SearchModal = ({ isFocus, setIsFocus} : SearchModalProps) => {

    // ! user will select type of data he wants search
    const [selectedType, setSelectedType] = useState<number>(1)

    return (
        <>
            {/* shadow for window when the search form is focus ... */}
            <div onClick={() => setIsFocus(false)} className={`${isFocus ? "fixed" : "hidden"} animate-fade bg-gray-900/80 z-50 top-0 left-0 w-full h-full`}></div>
            <div className={`mx-auto xl:w-[60%] xs:w-[70%] w-full relative col-span-12 grid grid-cols-12 gap-x-6 justify-between items-center mt-4 px-4 rounded-xl after:hidden`}>
                <div className={`${isFocus ? "absolute" : "hidden"} w-full top-20 grid grid-cols-12 justify-center z-50 h-96`}>
                    <form className="group col-span-12 mb-4 grid grid-cols-12 relative z-50">
                        <input onFocus={() => setIsFocus(true)} placeholder="دنبال چی میگردی ؟" type="text" className="placeholder:text-sm bg-slate-200 pr-12 py-3 col-span-12 rounded-xl focus:outline-none" />
                        <button className={`absolute top-1/4 right-3`}>
                            <SearchBrokenIcon cls={"group-hover:scale-[1.2] transition-all duration-500"} color="#4b5563" />
                        </button>
                    </form>
                    <h2 className="col-span-12 text-center nozha xs:text-5xl text-[2.41rem] py-6 text-white"> دنبال چه موضوعی می گردی ؟ </h2>
                    {/* user can select which data he wants .... */}
                    <section className="col-span-12 grid justify-center grid-cols-12 gap-x-6 gap-y-4">
                        {
                            SearchTypesData.map((item : searchTypesDataProps) => (
                                <div onClick={() => setSelectedType(item.id)} key={item.id} className={`${selectedType === item.id && "!bg-baby-2"} cursor-pointer hover:bg-baby-2 bg-white rounded-xl xl:col-span-3 md:col-span-4 xs:col-span-6 col-span-12 px-6 py-4 flex flex-col items-center justify-center`}>
                                    <img className="w-20 h-20" src={item.img} alt="" />
                                    <p className="text-4xl nozha mt-4">{item.type}</p>
                                </div>
                            ))
                        }
                    </section>
                </div>
            </div>

        </>
    )
}

export default SearchModal;