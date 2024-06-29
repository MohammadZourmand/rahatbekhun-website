'use client'

import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Heading6 from '../headings/h6'

interface SwitchComponentProps {
    cls ?: string
    text : string
}

const SwitchComponent = ({cls, text} : SwitchComponentProps) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className={`flex justify-between p-4`}>
        <Heading6 text={text} cls='text-gray-900'/>
        <div className={cls}>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-baby-9' : 'bg-gray-400'}
            relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Use setting</span>
            <span
            aria-hidden="true"
            className={`${enabled ? '-translate-x-[1.33rem]' : 'translate-x-0'}
                pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
        </div>
    </div>
  )
}

export default SwitchComponent;