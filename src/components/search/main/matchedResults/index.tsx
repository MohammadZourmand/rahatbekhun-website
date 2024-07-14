
import SheetsCard from "@/components/global/elements/cards/sheetsCard";
import ErrorShower from "@/components/global/elements/loadings/error";
import { SearchContext } from "@/context/search";
import Pagination from "@/utils/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";

const MatchedSearchResults = () => {

    const {data} = useContext(SearchContext)
    const router = useRouter()
    const queryPage = useSearchParams().get('page')

    console.log(data)

    return (
        <div className="grid grid-cols-12 gap-y-16 gap-x-6 lg:mx-6 md:mx-6 sm:mx-2 xs:mx-6 mx-2 mt-16 mb-16">
            {
                !data?.error && data?.data.length === 0
                    ? <ErrorShower cls="col-span-12" textHead="هنوز چیزی را جست و جو نکرده ای (:" text="اطلاعات رو درخواست کن !"/>
                    : data?.error
                        ? <ErrorShower cls="col-span-12" text="نتوانستم اطلاعات را دریافت کنم !"/>
                        : data?.data.length === 0
                            ?   <ErrorShower cls="col-span-12" text="هیچ موردی مشابه آنچه می خواهید پیدا نکردم !"/>
                            :   data?.data.map((item, index) => {
                                return (
                                    <SheetsCard 
                                        key={index}
                                        item={item}
                                        cls="col-span-4 !bg-gray-100"
                                    />
                                )
                            })
                
            }
            <div className="col-span-12">
            {
                data?.data.length > 1 && <Pagination
                            totalPages={data?.totalPages ?? 1} 
                            onClick={({selected}) => router.push(`/search?page=${selected+1}&per_page=${15}`)} 
                            initialPage={queryPage}
                        />
            }
            </div>
        </div>
    )
}

export default MatchedSearchResults;

