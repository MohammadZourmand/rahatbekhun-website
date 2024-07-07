// ? assets =================
import { SearchBrokenIcon } from "@/assets/icons";

interface SearchFormProps {
    cls ?: string
    placeholder ?: string
}

const SearchForm = ({cls, placeholder}: SearchFormProps) => {
    return (
        <form className={`${cls} lg:col-span-3 col-span-12 relative`} action="#">
            <input placeholder={placeholder ?? "دنبال چی میگردی ؟"} type="text" className="outline-gray-100 focus:outline-baby-9 transition-all duration-500 focus:bg-white p-[1.1rem] bg-gray-100 w-full placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm rounded-md" />
            <button className="absolute top-4 left-3">
                <SearchBrokenIcon cls="fill-gray-600" />
            </button>
        </form>
    )
}

export default SearchForm;