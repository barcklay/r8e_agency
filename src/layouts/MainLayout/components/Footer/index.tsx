import HyperLink from '@/components/HyperLink'

import { contactUsUrl, githubUrl, xUrl } from '@/constants/common'
import { cn } from '@/helpers/lib'

export interface Props {
  className?: string
}

export default function Footer({ className }: Props) {
  const classRoot = cn(
    'small-container flex max-md:flex-col max-md:items-center justify-center max-md:gap-y-[48px] md:gap-x-[64px] py-6',
    className
  )

  return (
    <div className={classRoot}>
      <div className="flex min-w-[180px] items-center justify-between">
        <span>
          ↳ <HyperLink className="min-w-[14px]" href={xUrl} text="X" />
        </span>
        {' / '}
        <span>
          ↳ <HyperLink className="min-w-[90px]" href={githubUrl} text="Github" />
        </span>
      </div>
      <div>
        ↳ <HyperLink className="min-w-[140px]" href={contactUsUrl} text="Contact us" />
      </div>
    </div>
  )
}
