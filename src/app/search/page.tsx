
import { Metadata, NextPage } from "next";
import AdvancedSearch from "@/components/navigation/search";
import { searchBreadCrumbsJson } from "@/meta/search";

export const metadata: Metadata = {
    title: 'جستجوی پیشرفته',
    description: 'پیدا کردن سریع کاربرگ یا دوره آموزشی متناسب با کودک دلبند شما یا آموزگاران گرامی یه کمک جستجوی پیشرفته محتوا',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/search',
    }
}

const AdvancedSearchPage : NextPage = () => {

    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(searchBreadCrumbsJson)
                }}
            />
            <AdvancedSearch />
        </>
    )
}

export default AdvancedSearchPage;