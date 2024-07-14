'use client'

import dynamic from "next/dynamic";
import {Suspense, useState} from "react";
import useSWR from 'swr';

import SheetsCard from "@/components/global/elements/cards/sheetsCard";
import { getWorksheets } from "./handler";
import CircleLoading from "@/components/global/elements/loadings";
import ErrorShower from "@/components/global/elements/loadings/error";
import { worksheetsDataProps } from "../data";

const Filtering = dynamic(() => import('./filters/filter'))
const ListPagination = dynamic(() => import('./pagination'))

const WorksheetsMain = () => {

    const [page, setPage] = useState<number>(1)
    const [filters , setFilters] = useState<{grade : string, book : string, price : string|number}>({
        grade : '',
        book : '',
        price : ''
    })

    const {data, error, isLoading} = useSWR(
        `http://localhost:5000/admin/worksheets/list?per_page=${2}&page=${page}`,
        getWorksheets
    )

    return (
        <div className={`relative grid grid-cols-12 gap-y-16 xl:gap-x-8 lg:gap-x-4 md:gap-x-4 bg-gray-200/70 xl:px-8 px-4 py-20`}>
            <Filtering filters={filters} setFilters={setFilters} />
            {
                error
                ? <ErrorShower cls="col-span-12" text2="احتمال دارد مشکلی در سمت سرور به وجود آمده باشد !" text="نتوانستیم کاربرگ ها را از سرور بگیریم صفحه را مجدد بارگذاری کنید !"/>
                : isLoading
                    ? <CircleLoading cls={'col-span-12'} text="در حال دریافت کاربرگ ها ..."/>
                    : data?.data.length === 0
                        ? <ErrorShower cls="col-span-12" text2="اتصال اینترنت خود را بررسی کنید !" text={'مشکلی پیش آمده است ! لطفا دوباره سعی کنید !'}/>
                        : data?.data.map((item : worksheetsDataProps, index : number) => {
                            return <SheetsCard
                                key={index}
                                item={item}
                                cls={"lg:col-span-4 md:col-span-6 col-span-12"}
                            />
                    })
            }
            <Suspense>
                {
                    Number(data?.totalPage) > 1 && <ListPagination setPage={setPage} data={data} /> 
                }
            </Suspense>
        </div>
    )
}

export default WorksheetsMain;