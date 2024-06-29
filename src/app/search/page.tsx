
import { NextPage } from "next";
import Head from "next/head";

import AdvancedSearch from "@/components/search";

const AdvancedSearchPage : NextPage = () => {

    
    return (
        <>
            <Head>
                <title>جستجوی پیشرفته</title>
            </Head>
            <AdvancedSearch />
        </>
    )
}

export default AdvancedSearchPage;