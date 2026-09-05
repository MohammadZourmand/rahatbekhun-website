
import Home from '@/features/home'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'راحت بخون',
  description: 'با بروز ترین دوره های آموزشی، کاربرگ ها، آزمون ها برای پایه های اول تا ششم ابتدایی در تمامی سطوح یادگیری',
  keywords : [''],
  alternates : {
      canonical : 'https://rahatbekhun.com',
  },
  robots : {
    follow : true,
    index : true,
    
  },
}

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  )
}
