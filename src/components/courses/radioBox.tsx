// ? react =================
import { FC, useState } from 'react'

// ? assets ================
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@/assets/icons';
interface MyRadioProps {
    cls ?: string
    options : string[]
}


const MyRadio : FC<MyRadioProps> = ({cls, options}) => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className={`${cls} w-full`}>
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((plan: string, index : number) => (
              <RadioGroup.Option
                key={index}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? ''
                      : ''
                  }
                  ${
                    checked ? '!bg-gray-700' : ''
                  }
                    hover:bg-gray-300 relative transition-all flex cursor-pointer rounded-lg px-5 py-2 outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`transition-all ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon cls="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

export default MyRadio;