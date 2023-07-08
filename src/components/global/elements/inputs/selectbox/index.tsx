// ? react ==================
import { useState, FC } from 'react'

// ? assets =================
import { Listbox, Transition } from '@headlessui/react'
import { TickSquareBroken } from '@/assets/icons';

// ? types ==================
import { SelectBoxProps } from '@/types/forms';
import ListBoxBtn from './btn';

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

const SelectBox : FC<SelectBoxProps> = ({textBtnCls, cls, items, label, labelCls, btnCls, selected, setSelected}) =>  {
  
  const [changeSelected, setChangeSelected] = useState<string>(selected[1])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Listbox 
      value={selected[1]}
      onChange={(selectboxSelected) => {
        setSelected(selected[0],selectboxSelected)
      }}
    >
      {({ open }) => {

        return (
          <div className={`${cls} flex items-center`}>
            {
              label && <Listbox.Label className={`${labelCls} basis-2/5 text-sm font-medium leading-6 text-gray-900 ml-2 sm:mb-0 mb-3`}>{label}</Listbox.Label>
            }
            <div className={`relative h-full w-full`}>
              <ListBoxBtn
                  textBtnCls={textBtnCls}
                  btnCls={btnCls}
                  changeSelected={changeSelected}
                  open={open}
                  setIsOpen={setIsOpen}
              />
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
                      value={item.text}
                      onClick={() => setChangeSelected(item.text)}
                    >
                      {({selected, active}) => {
  
                        return (
                          <>
                            <div 
                              className="flex items-center"
                            >
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
                                  'absolute inset-y-0 left-0 flex items-center pl-3 transition'
                                )}
                              >
                                <TickSquareBroken cls={`${active ? "fill-white" : "fill-green-600" } transition h-6 w-6 stroke-2`} aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )
                      }}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )
      }}
    </Listbox>
  )
}

export default SelectBox;