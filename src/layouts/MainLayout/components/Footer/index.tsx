import HyperLink from '@/components/HyperLink'

import { contactUsUrl, githubUrl, xUrl, legalName } from '../../../../constants/common'

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
  <div className="flex items-center gap-x-[48px] md:gap-x-[64px] whitespace-nowrap">
  <span>
    <HyperLink className="min-w-[14px]" href={xUrl} text="X" />
  </span>

  <span>
    <HyperLink className="min-w-[90px]" href={githubUrl} text="Github" />
  </span>

  <span>
    <HyperLink className="min-w-[140px]" href={contactUsUrl} text="Contact us" />
  </span>

  <span className="text-white/70 text-base">
    {legalName}
  </span>
</div>

)
}
