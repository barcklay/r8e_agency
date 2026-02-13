import { HTMLAttributes } from 'react'

import { type HyperTextProps, HyperText } from 'ui/hyper-text'

import { cn } from '@/helpers/lib'

export interface Props extends HTMLAttributes<HTMLLinkElement> {
  className?: string
  hyperTextProps?: HyperTextProps
  text: string
}

export default function HyperLink({ className, hyperTextProps = {}, text, ...otherProps }: Props) {
  const classRoot = cn('inline-block active:text-primary md:text-xl', className)

  return (
    <a className={classRoot} target="_blank" rel="nofollow noopener noreferrer" {...otherProps}>
      <HyperText text={text} animateOnIntersection={false} animateOnHover {...hyperTextProps} />
    </a>
  )
}
