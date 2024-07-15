'use client'

import useSWR from 'swr'
import { worksheetsDataProps } from '../../data';
import apiHelper from '@/utils/axios';
import Paragraph from '@/components/global/elements/paragraph';
import SheetsCard from '@/components/global/elements/cards/sheetsCard';
import CircleLoading from '@/components/global/elements/loadings';
import ErrorShower from '@/components/global/elements/loadings/error';

const SimilarSheets = ({sheet} : {sheet : worksheetsDataProps})  => {

    const {data, error, isLoading} = useSWR(
        `http://localhost:5000/admin/worksheets/list?_grade=${sheet?._grade}&per_page=6&page=1`,
        async (url) => {
            try {
                const res = await apiHelper().get(url)
                return res?.data?.data
            } catch(err) {
                console.log(err)
                return []
            }
        }
    )

    return (
        <div className="grid grid-cols-12 xs:gap-x-2 gap-y-16 pt-6">
            {
                isLoading
                ? <CircleLoading cls='col-span-12' text='در حال دریافت کاربرگ های مشابه ...'/>
                : error
                    ? <ErrorShower cls='col-span-12' text='مشکلی در دریافت کاربرگ های مشابه رخ داده است !'/>
                    : data.length === 0
                        ?   <Paragraph cls='col-span-12' text='مشکلی در دریافت کاربرگ ها به وجود آمده است !'/>
                        :   data?.map((item, index) => {
                            return (
                                <SheetsCard 
                                    key={index}
                                    item={item}
                                    cls={"lg:col-span-4 md:col-span-6 col-span-12 !bg-gray-50"}
                                />
                            )
                        })
            }
        </div>
    )
}

export default SimilarSheets;