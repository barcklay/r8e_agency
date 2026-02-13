import { useWindowSize } from 'react-use'

import GalleryCard from '@/components/GalleryCard'
import SvgIcon from '@/components/SvgIcon'

import { BREAKPOINTS } from '@/constants/breakpoints'
import { cn } from '@/helpers/lib'
import { Block, BLOCKS } from './constants'

export interface Props {
  className?: string
}

export default function WhatWeDo({ className }: Props) {
  const { width } = useWindowSize()

  const classRoot = cn('base-container', className)

  function CardHeader(title: Block['title'], icon: Block['icon']) {
    return (
      <div className="flex justify-between gap-x-2">
        <div className="text-xl font-medium leading-tight md:text-2xl">{title}</div>
        {!!icon && (
          <div>
            <SvgIcon className="h-10 w-8" name={icon} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={classRoot}>
      <div data-aos="fade-up">
        <div className="title md:text-center">What we do</div>
        <div className="flex gap-2">
          <div className="md:flex-[0.5] lg:flex-1" />
          <div className="mt-4 text-lightgray md:flex-[3] md:text-xl lg:flex-[2]">
            We’re a rapid Web3 team built around experienced engineers. We form focused crews to solve real problems —
            and you can bring us in, when it matters
          </div>
          <div className="md:flex-[0.5] lg:flex-1" />
        </div>
      </div>
      <div className="mt-10">
        <div className="gap-2 max-sm:flex max-sm:flex-col max-sm:flex-wrap sm:grid sm:grid-cols-2 sm:grid-rows-3 wide:grid-cols-4 wide:grid-rows-2">
          <div className="flex-1 max-wide:hidden" />
          {BLOCKS.map(({ aosAnimation, icon, title, text }) => (
            <GalleryCard
              key={icon}
              header={CardHeader(title, icon)}
              body={<div className="mt-10 text-lightgray">{text}</div>}
              className="flex-1"
              data-aos={width <= BREAKPOINTS.md ? 'fade-up' : aosAnimation}
            />
          ))}
          <div className="flex-1 max-wide:hidden" />
        </div>
      </div>
    </div>
  )
}
