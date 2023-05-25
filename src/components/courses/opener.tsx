import { ChevronLeftCircleBroken } from '@/assets/icons'
import { Disclosure } from '@headlessui/react'
import Heading6 from '../global/elements/headings/h6';
import Paragraph from '../global/elements/paragraph';


interface OpenerProps {
    main : any
    head : string
    cls ?: string
}

const Opener : React.FC<OpenerProps> = ({head, main}) => {
  return (
    <div className={`$cls w-full`}>
      <div className="mx-auto w-full max-w-md rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex w-full justify-between rounded-lg p-4 text-left text-sm font-medium text-purple-900 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <header>
                    <Heading6 cls="text-gray-900 group-hover:text-white" text={head} />
                </header>
                <ChevronLeftCircleBroken
                  cls={`${
                    open ? 'rotate-90 transition-all' : '-rotate-90'
                  } h-6 w-6 fill-gray-700 group-hover:fill-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {main}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default Opener;