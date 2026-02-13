import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { cn } from '@/helpers/lib'
import { Nullable } from '@/types/common'

export interface Props {
  className?: string
}

export default function AnimatedArrows({ className }: Props) {
  const rootRef = useRef<Nullable<HTMLSpanElement>>(null)
  const arrowsRefs = useRef<HTMLSpanElement[]>([])
  const intersection = useIntersection(rootRef, {
    rootMargin: '50px',
    threshold: 1
  })

  const classRoot = cn('font-pixel-arial-14 text-[22px] text-lightgray max-lg:align-middle', className)

  useEffect(() => {
    if (arrowsRefs.current?.length && intersection?.isIntersecting) {
      Object.values(arrowsRefs.current).forEach((el) => {
        el.className += ' animate-lightUp'
      })
    }
  }, [intersection])

  return (
    <span ref={rootRef} className={classRoot}>
      {new Array(5).fill(null).map((_, i) => (
        <span
          key={i}
          ref={(el) => (arrowsRefs.current[i] = el)}
          className={cn('opacity-70', `[animation-delay:${i * 0.5}s]`)}
        >
          {'>'}
        </span>
      ))}

      {/*<span className="opacity-30 [animation-delay:0.5s]">{'>'}</span>*/}
      {/*<span className="opacity-30 [animation-delay:1s]">{'>'}</span>*/}
      {/*<span className="opacity-30 [animation-delay:1.5s]">{'>'}</span>*/}
      {/*<span className="opacity-30 [animation-delay:2s]">{'>'}</span>*/}
    </span>
  )
}
