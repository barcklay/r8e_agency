import { HTMLAttributes, PropsWithChildren } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/helpers/lib'

const backgroundBlockVariants = cva('p-6 rounded-lg', {
  variants: {
    color: {
      default: 'bg-gray'
    }
  },
  defaultVariants: {
    color: 'default'
  }
})

type ButtonVariants = VariantProps<typeof backgroundBlockVariants>
export interface Props extends PropsWithChildren, ButtonVariants, HTMLAttributes<HTMLDivElement> {
  className?: string
}

export default function BackgroundBlock({ children, className, color, ...otherProps }: Props) {
  const classRoot = cn('', backgroundBlockVariants({ color }), className)

  return (
    <div className={classRoot} {...otherProps}>
      {children}
    </div>
  )
}
