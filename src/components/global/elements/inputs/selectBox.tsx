// ? react ==================
import { useState, FC, useEffect, Dispatch, SetStateAction } from 'react'

// ? assets =================
import { Listbox, Transition } from '@headlessui/react'
import { TickSquareBroken, ChevronLeftCircleBroken } from '@/assets/icons';

// ? types ==================
import { SortItemsProps } from '@/types/courses';

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

interface SelectBoxProps {
    cls ?: string
    items : SortItemsProps[]
    label ?: string
    labelCls ?: string
    btnCls ?: string
    selected ?: any
    setSelected ?: any
}

const SelectBox : FC<SelectBoxProps> = ({cls, items, label, labelCls, btnCls, selected, setSelected}) =>  {

  return (
    <Listbox value={selected} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setSelected(e,selected[0])}>
      {({ open }) => (
        <div className={`${cls} flex items-center`}>
          {
            label && <Listbox.Label className={`${labelCls} basis-2/5 text-sm font-medium leading-6 text-gray-900 ml-2 sm:mb-0 mb-3`}>{label}</Listbox.Label>
          }
          <div className={`relative basis-3/5 w-full`}>
            <Listbox.Button className={`${btnCls} relative w-full cursor-default rounded-md bg-white py-1.5 pr-3 pl-10 text-left text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6`}>
              <span className="flex items-center">
                <span className="block truncate mr-2 text-[.9rem]">{selected[1]}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 left-0 ml-2 flex items-center">
                <ChevronLeftCircleBroken cls={"h-5 w-5 text-gray-400 -rotate-90 fill-gray-400"} aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={"div"}
              leave="transition ease-in duration-300"
              enter='transition ease-in duration-300'
              enterFrom='opacity-0'
              enterTo="opacity-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-[.9rem] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {items.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-baby-3 text-white' : 'text-gray-800',
                        'relative cursor-default select-none py-2 px-3 transition duration-150'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'mr-1 block truncate text-[.9rem]')}
                          >
                            {item.text}
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