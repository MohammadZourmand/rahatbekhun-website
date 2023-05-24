import { useState, FC } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TickSquareBroken, ChevronLeftCircleBroken } from '@/assets/icons';

const people = [
  {
    id: 1,
    name: 'پربازدیدترین ها',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'محبوب ترین ها',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'گران ترین ها',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'ارزان ترین ها',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'جدیدترین ها',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

interface SelectBoxProps {
    cls ?: string
}

const SelectBox : FC<SelectBoxProps> = ({cls}) =>  {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className={`${cls}`}>
          <Listbox.Label className="basis-2/5 text-sm font-medium leading-6 text-gray-900 ml-2"> مرتب سازی بر اساس : </Listbox.Label>
          <div className={`relative basis-3/5`}>
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pr-3 pl-10 text-left text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="block truncate mr-2 text-[.9rem]">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 left-0 ml-2 flex items-center">
                <ChevronLeftCircleBroken cls={"h-5 w-5 text-gray-400 -rotate-90 fill-gray-400"} aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={"div"}
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-[.9rem] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-baby-3 text-white' : 'text-gray-800',
                        'relative cursor-default select-none py-2 px-3 transition duration-150'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'mr-1 block truncate text-[.9rem]')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pr-4'
                            )}
                          >
                            <TickSquareBroken cls={"h-6 w-6 stroke-2"} color='#22c55e' aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}

export default SelectBox;