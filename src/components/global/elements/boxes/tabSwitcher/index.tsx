import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { DocumentBrokenIcon, FolderBroken, Star, StarBroken, UsersBroken } from '@/assets/icons'

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(' ')
}

const TabSwitcher = () => {

  const [selectedIcon, setSelectedIcon] = useState(0)

  let [categories] = useState({
    "مشخصات دوره": [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "قسمت ها": [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    "نظرات": [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    "پرسش و پاسخ": [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
    ],
  })

  const categoriesIcons = [
    <DocumentBrokenIcon cls={`${selectedIcon === 0 ? 'fill-white' : 'fill-gray-700'} !w-6 !h-6`} />,
    <FolderBroken cls={`${selectedIcon === 1 ? 'fill-white' : 'fill-gray-700'} !w-6 !h-6`} />,
    <StarBroken cls={`${selectedIcon === 2 ? 'fill-white' : 'fill-gray-700'} !w-6 !h-6`} />,
    <UsersBroken cls={`${selectedIcon === 3 ? 'fill-white' : 'fill-gray-700'} !w-6 !h-6`} />,
  ]

  // console.log(Object.values(categories))

  return (
    <div className="w-full py-16">
      <Tab.Group>
        <Tab.List className="flex rounded-xl bg-blue-900/20 ">
          {Object.keys(categories).map((category, categoryIcon) => (
            <Tab
              key={category}
              className={({ selected }) => {

                selected && selectedIcon === categoryIcon

                return classNames(
                  'w-full outline-none flex justify-center items-center text-center py-4 text-sm font-bold leading-5 transition-all',
                  categoryIcon === 0 && 'rounded-r-md',
                  categoryIcon === 3 && 'rounded-l-md',
                  selected 
                    ? 'bg-baby-9 text-white shadow'
                    : 'bg-gray-200 text-gray-800'
                )
              }

              }
            >
              {
                categoriesIcons.map((icon, iconIndex) => (
                  categoryIcon === iconIndex && <div key={iconIndex}>
                    {icon}
                  </div>
                ))
              }             
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default TabSwitcher;