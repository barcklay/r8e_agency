import { useEffect, useRef } from 'react'

import { HyperText } from 'ui/hyper-text'
import AnimatedArrows from '@/components/AnimatedArrows'

import { buttonVariants } from 'ui/button'
import { contactUsUrl } from '@/constants/common'
import { cn } from '@/helpers/lib'
import { Nullable } from '@/types/common'
import { useIntersection } from 'react-use'

export interface Props {
  className?: string
}

export default function ContactUs({ className }: Props) {
  const leftArrowRef = useRef<Nullable<HTMLSpanElement>>(null)
  const rightArrowRef = useRef<Nullable<HTMLSpanElement>>(null)
  const intersection = useIntersection(leftArrowRef, {
    rootMargin: '50px',
    threshold: 1
  })

  const classRoot = cn('base-container text-center', className)

  useEffect(() => {
    if (intersection?.isIntersecting) {
      if (leftArrowRef.current) leftArrowRef.current.className += ' animate-slide-left'
      if (rightArrowRef.current) rightArrowRef.current.className += ' animate-slide-right'
    }
  }, [intersection])

  return (
    <div className={classRoot}>
      <div className="mb-4 text-lightgray md:text-xl">Contact us</div>
      <div className="title leading-tight max-lg:text-[40px]">
        We’re looking for new ways
        <br />
        to push <AnimatedArrows />{' '}
        <span className="whitespace-nowrap">
          <span ref={leftArrowRef} className="inline-block align-middle font-pixel-arial-14 text-lg text-secondary">
            [
          </span>
          the boundaries 
          <span ref={rightArrowRef} className="inline-block align-middle font-pixel-arial-14 text-lg text-secondary">
            ]
          </span>
        </span>
        <br />
        of what's possible
      </div>
      <a
        href={contactUsUrl}
        className={cn(buttonVariants(), 'mt-6 h-[64px] max-md:w-[280px] max-xs:px-[15px] md:w-[350px] lg:h-[80px]')}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <HyperText
          text="Let’s build something"
          classNameRoot="justify-center w-full md:text-xl"
          animateOnIntersection={false}
          animateOnHover
        />
      </a>
    </div>
  )
}
