import Intro from './components/Intro'
import Description from './components/Description'
import WhatWeDo from './components/WhatWeDo'
import ContactUs from './components/ContactUs'
// import Experience from './components/Experience'
import Ticker from './components/Ticker'

import { useAos } from '@/hooks/use-aos'

import 'aos/dist/aos.css'

export default function HomePage() {
  useAos()

  return (
    <div>
      <Intro />
      <Description className="mt-[200px]" />
      <WhatWeDo className="mt-[240px]" />
      <ContactUs className="mt-[200px]" />
      {/* <Experience className="mt-[240px]" /> */}
      <Ticker className="mt-[140px]" />
    </div>
  )
}
