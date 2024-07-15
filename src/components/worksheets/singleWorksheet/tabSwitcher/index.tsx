'use client'

import { DocumentBrokenIcon, FolderBroken, StarBroken, UsersBroken } from '@/assets/icons';
import { ReactNode, useState } from 'react';
import { worksheetsDataProps } from '../../data';
import dynamic from 'next/dynamic';

const Paragraph = dynamic(() => import('@/components/global/elements/paragraph'))
const Similarsheets = dynamic(() => import('./similar'))
interface TabSwitcherCategoriesProps {
  id : number,
  text : string,
  icon : ReactNode
}

const TabSwitcher = ({data} : {data : worksheetsDataProps}) => {

  const [selectedTab, setSelectedTab] = useState(0)

  const categories : TabSwitcherCategoriesProps[] = [
    {id : 0, text : "کاربرگ های مشابه", icon : <DocumentBrokenIcon cls={`${selectedTab === 0 ? "fill-white" : "fill-gray-800" } group-hover:fill-white !w-6 !h-6 transition duration-300`} />},
    {id : 1, text : "دیگران دیده اند", icon : <FolderBroken cls={`${selectedTab === 1 ? "fill-white" : "fill-gray-800" } group-hover:fill-white !w-6 !h-6 transition duration-300`} />},
    {id : 2, text : "نظرات", icon : <StarBroken cls={`${selectedTab === 2 ? "fill-white" : "fill-gray-800" } group-hover:fill-white !w-6 !h-6 transition duration-300`} />},
    {id : 3, text : "پرسش و پاسخ", icon : <UsersBroken cls={`${selectedTab === 3 ? "fill-white" : "fill-gray-800" } group-hover:fill-white !w-6 !h-6 transition duration-300`} />}
  ]
  

  return (
    <div className='mt-16 max-w-7xl xl:mx-auto mx-2 mb-28'>
      <div className='grid grid-cols-12 w-full bg-gray-200/80 rounded-md'>
        {
          categories.map((item : TabSwitcherCategoriesProps) => {
            return (
              <div
                className={`
                  ${selectedTab === item.id ? "!bg-baby-9" : ""}
                  ${item.id === 0 && "rounded-r-md"}
                  ${item.id === 3 && "rounded-l-md"}
                  flex justify-center items-center col-span-3 py-4 transition duration-300
                  hover:bg-gray-600 group
                `}
                onClick={() => setSelectedTab(item.id)} key={item.id}>
                {(item.icon)}
                <span className={`sm:block group-hover:text-white hidden ${selectedTab === item.id ? "text-white" : "text-gray-800"} mr-1`}>{item.text}</span>
              </div>
            )
          })
        }
      </div>
      <div className='mt-16 px-2'>
        { selectedTab === 0 && <Similarsheets sheet={data} /> }
        { selectedTab === 1 && <Paragraph center={true} text='این قسمت به زودی اضافه می شود .'/> }
        { selectedTab === 2 && <Paragraph center={true} text='این قسمت به زودی اضافه می شود .'/> }
        { selectedTab === 3 && <Paragraph center={true} text='این قسمت به زودی اضافه می شود .'/> }
      </div>
    </div>
  )
}

export default TabSwitcher;