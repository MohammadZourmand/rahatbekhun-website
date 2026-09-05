"use client";

import AdvancedSearchHeader from "./header";
import AdvancedSearchMain from "./main";
import Footer from "../global/footer";
import { useState } from "react";
import { SearchContext } from "@/context/search";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { getSearchResult } from "./header/form/getResult";
import CircleLoading from "../global/elements/loadings";

const AdvancedSearch = () => {
  const queryPage = useSearchParams().get("page");

  const [page, setPage] = useState(() => {
    const parsedPage = Number.parseInt(queryPage ?? "", 10);

    return Number.isNaN(parsedPage) ? 1 : parsedPage;
  });

  const [searchData, setSearchData] = useState("_type=کاربرگ&");

  const { data, error, isLoading } = useSWR(
    `http://localhost:5000/admin/search?${searchData}per_page=${20}&page=${page}`,
    getSearchResult,
  );

  return (
    <SearchContext.Provider
      value={{
        data,
        error,
        isLoading,
        page,
        setPage,
        setSearchData,
        searchData,
      }}
    >
      <AdvancedSearchHeader />
      {isLoading ? (
        <CircleLoading cls="mb-16" text="درحال جست و جو برای درخواست شما ..." />
      ) : (
        <AdvancedSearchMain />
      )}
      <Footer />
    </SearchContext.Provider>
  );
};

export default AdvancedSearch;
