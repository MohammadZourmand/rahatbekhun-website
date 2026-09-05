"use client";

import SheetsCard from "@/components/elements/cards/sheetsCard";
import ListPagination from "./pagination";
import { useState } from "react";
import useSWR from "swr";
import apiHelper from "@/utils/apiHelper";
import CircleLoading from "@/components/feedback/loadings";
import ErrorShower from "@/components/feedback/loadings/error";
import Filtering from "./filtering";
import { useSearchParams } from "next/navigation";
import { ErrorToast } from "@/utils/swal";

interface Props {
  grade: string;
  params: any;
}

export default function WorksheetsList({ grade, params }: Props) {
  const [page, setPage] = useState<number>(1);
  const parameters = useSearchParams();

  const filters = parameters
    .toString()
    .split("&")
    .filter((item) => !item.includes("page"))
    .toString();

  const { data, error, isLoading } = useSWR(
    `/admin/worksheets/list?_grade=${grade}&per_page=16&page=${page}&${filters ?? ""}`,
    async (url) => {
      try {
        const res = await apiHelper(url);
        return await res.json();
      } catch (err) {
        ErrorToast("مشکلی در دریافت اطلاعات وجود دارد !");
        console.log(err);
        return { data: [], totalPages: 1 };
      }
    },
  );

  return (
    <>
      <Filtering grade={grade} params={params} />
      <section className="mb-5">
        <h1 className="mt-5 md:mt-12 text-gray-600 text-center text-2xl md:text-5xl font-bold">
          لیست کاربرگ های {grade} {grade === "پیش دبستانی" ? "" : "ابتدایی"}
        </h1>
        <div className="mt-24 grid grid-cols-12 sm:gap-x-6 gap-y-16 mx-3">
          {isLoading ? (
            <CircleLoading
              text="کاربرگ ها در حال بارگذاری هستند ..."
              cls="col-span-12"
            />
          ) : error ? (
            <ErrorShower text="مشکلی در دریافت اطلاعات به وجود آمده است !" />
          ) : (
            data?.data?.map((item, index) => {
              return (
                <SheetsCard
                  grade={params?.grade}
                  cls="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12 "
                  item={item}
                  key={index}
                />
              );
            })
          )}
        </div>
        {Number(data?.totalPages) > 1 && (
          <ListPagination
            params={params}
            setPage={setPage}
            totalPages={data?.totalPages}
          />
        )}
      </section>
    </>
  );
}
