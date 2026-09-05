
import { SearchBrokenIcon } from "@/assets/icons";
import Heading6 from "../../elements/headings/h6";
import Paragraph from "../elements/paragraph";

const NewsLetters = () => {

    return (
        <form className={`flex flex-col lg:items-start items-center`}>
            <Heading6 text={"خبررسانی"} cls="text-gray-900 mt-4 lg:mt-0" />
            <div className="grid grid-cols-12 lg:pl-6 mt-6">
                <input placeholder="ایمیل خود را وارد کنید." className="col-span-9 py-1 px-5 text-gray-900 outline-none" />
                <button type="submit" className="flex justify-center p-3 bg-baby-9 col-span-3">
                    <SearchBrokenIcon color="white" cls="w-6 h-6" />
                </button>
            </div>
            <Paragraph cls="font-medium text-sm mt-6 leading-loose !text-center lg:!text-right" text="آخرین اخبار درمورد تخفیف ها، اطلاع رسانی ها و موارد دیگر را دریافت کنی ." />
        </form>
    )
}

export default NewsLetters;