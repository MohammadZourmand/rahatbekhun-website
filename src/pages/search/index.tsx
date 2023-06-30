
import { NextPage } from "next";
import Head from "next/head";

import AdvancedSearch from "@/components/search";
import AdvancedSearchHead from "@/components/search/head";

const AdvancedSearchPage : NextPage = () => {

    
    return (
        <>
            <Head>
                <AdvancedSearchHead />
            </Head>
            <AdvancedSearch />
        </>
    )
}

export default AdvancedSearchPage;