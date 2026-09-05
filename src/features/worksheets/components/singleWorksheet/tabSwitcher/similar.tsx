"use client";

import useSWR from "swr";
import { worksheetsDataProps } from "../../data";
import apiHelper from "@/utils/apiHelper";
import Paragraph from "@/components/global/elements/paragraph";
import SheetsCard from "@/components/elements/cards/sheetsCard";
import CircleLoading from "@/components/feedback/loadings";
import ErrorShower from "@/components/feedback/loadings/error";

const SimilarSheets = ({ sheet }: { sheet: worksheetsDataProps }) => {
  const { data, error, isLoading } = useSWR(
    `/admin/worksheets/list?_grade=${sheet?._grade}&per_page=6&page=1`,
    async (url) => {
      try {
        const res = await apiHelper(url);
        const responseData = await res.json();

        return responseData?.data;
      } catch (err) {
        console.log(err);
        return [];
      }
    },
  );

  return (
    <div className="grid grid-cols-12 xs:gap-x-2 gap-y-16 pt-6">
      {isLoading ? (
        <CircleLoading
          cls="col-span-12"
          text="در حال دریافت کاربرگ های مشابه ..."
        />
      ) : error ? (
        <ErrorShower
          cls="col-span-12"
          text="مشکلی در دریافت کاربرگ های مشابه رخ داده است !"
        />
      ) : data?.length === 0 ? (
        <Paragraph
          cls="col-span-12"
          text="مشکلی در دریافت کاربرگ ها به وجود آمده است !"
        />
      ) : (
        data?.map((item, index) => {
          return (
            <SheetsCard
              key={index}
              item={item}
              cls={"lg:col-span-4 md:col-span-6 col-span-12 !bg-gray-50"}
            />
          );
        })
      )}
    </div>
  );
};

export default SimilarSheets;
