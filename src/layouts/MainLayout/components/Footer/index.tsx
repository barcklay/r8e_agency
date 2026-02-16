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
  <div className="flex items-center justify-between py-6">
  <div className="flex items-center gap-x-[48px] whitespace-nowrap">
    <HyperLink
      href={xUrl}
      text="X"
      hyperTextProps={{ className: 'text-white' }}
    />

    <HyperLink
      href={githubUrl}
      text="Github"
      hyperTextProps={{ className: 'text-white' }}
    />

    <HyperLink
      href={contactUsUrl}
      text="Contact us"
      hyperTextProps={{ className: 'text-white' }}
    />
  </div>

  <span className="text-base font-normal text-white/70 whitespace-nowrap">
    © 2026 Resilience.hk Limited
  </span>
</div>



)
}
