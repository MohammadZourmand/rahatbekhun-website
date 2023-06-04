import { DocumentBrokenIcon, FolderBroken, StarBroken, UsersBroken } from '@/assets/icons';
import { ReactNode, useState } from 'react';
import CourseInfo from './info';
import { courseDetails } from './courseInfo';
import CourseEpisodes from './episodes';

interface TabSwitcherProps {

}

interface TabSwitcherCategoriesProps {
  id : number,
  text : string,
  icon : ReactNode
}

const TabSwitcher : React.FC<TabSwitcherProps> = () => {

  const [selectedTab, setSelectedTab] = useState(0)

  const categories : TabSwitcherCategoriesProps[] = [
    {id : 0, text : "مشخصات دوره", icon : <DocumentBrokenIcon cls={`${selectedTab === 0 ? "fill-white" : "fill-gray-800" } !w-6 !h-6 transition duration-300`} />},
    {id : 1, text : "ویدیوها", icon : <FolderBroken cls={`${selectedTab === 1 ? "fill-white" : "fill-gray-800" } !w-6 !h-6 transition duration-300`} />},
    {id : 2, text : "نظرات", icon : <StarBroken cls={`${selectedTab === 2 ? "fill-white" : "fill-gray-800" } !w-6 !h-6 transition duration-300`} />},
    {id : 3, text : "پرسش و پاسخ", icon : <UsersBroken cls={`${selectedTab === 3 ? "fill-white" : "fill-gray-800" } !w-6 !h-6 transition duration-300`} />}
  ]
  

  return (
    <div className='mt-8'>
      <div className='grid grid-cols-12 w-full bg-gray-200/80 rounded-md'>
        {
          categories.map((item : TabSwitcherCategoriesProps) => {
            return (
              <div
                className={`
                  ${selectedTab === item.id ? "bg-baby-9" : ""}
                  ${item.id === 0 && "rounded-r-md"}
                  ${item.id === 3 && "rounded-l-md"}
                  flex justify-center items-center col-span-3 py-4 transition duration-300
                `}
                onClick={() => setSelectedTab(item.id)} key={item.id}>
                {(item.icon)}
                <span className={`${selectedTab === item.id ? "text-white" : "text-gray-800"} mr-1`}>{item.text}</span>
              </div>
            )
          })
        }
      </div>
      <div className='mt-16 h-96'>
        { selectedTab === 0 && <CourseInfo description={courseDetails.description} /> }
        { selectedTab === 1 && <CourseEpisodes episodes={courseDetails.episodes} /> }
      </div>
    </div>
  )
}

export default TabSwitcher;