import { ChevronLeftCircleBroken } from '@/assets/icons'
import Heading6 from '../global/elements/headings/h6';
import {useState, FC} from "react";
interface OpenerProps {
    main : any
    head : string
    cls ?: string
    defaultOpen ?: boolean
}

const Opener : FC<OpenerProps> = ({head, main, cls, defaultOpen}) => {

  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div className={`$cls w-full`}>
      <div className="mx-auto w-full max-w-md rounded-2xl">
      <header onClick={() => setOpen(!open)} className='group flex w-full justify-between rounded-lg p-4 text-left text-sm font-medium text-purple-900 hover:bg-gray-800 focus:outline-none'>
        <Heading6 cls="text-gray-900 group-hover:text-white" text={head} />
        <ChevronLeftCircleBroken
          cls={`${
            open ? 'rotate-90 transition-all' : '-rotate-90'
          } h-6 w-6 fill-gray-700 group-hover:fill-white`}
        />
      </header>
      <main className={`${open ? "block" : "hidden"} animate-comeFromTop mx-4 mt-2 mb-4`}>
          {main}
      </main>
      </div>
    </div>
  )
}

export default Opener;