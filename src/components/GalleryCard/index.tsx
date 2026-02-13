import { HTMLAttributes, ReactNode } from 'react'

import BackgroundBlock from '@/components/BackgroundBlock'

import { cn } from '@/helpers/lib'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
}

export default function GalleryCard({ className, header, body, footer, ...otherProps }: Props) {
  const classRoot = cn('flex flex-col justify-between', className)

  return (
    <BackgroundBlock className={classRoot} {...otherProps}>
      {!!header && <div>{header}</div>}

      {!!body && <div>{body}</div>}

      {!!footer && <div>{footer}</div>}
    </BackgroundBlock>
  )
}
