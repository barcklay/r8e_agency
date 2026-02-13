import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import { cn } from '@/helpers/lib'

export interface Props {
  className?: string
}

export default function MainLayout({ className }: Props) {
  const classRoot = cn('min-h-screen pt-[64px] md:pt-[90px] px-5 overflow-hidden', className)

  return (
    <div className={classRoot}>
      <Header className="fixed left-2/4 top-0 h-[64px] -translate-x-2/4 max-md:py-5 md:h-[90px]" />

      <div>
        <Outlet />
      </div>

      <Footer className="mt-[72px]" />
    </div>
  )
}
