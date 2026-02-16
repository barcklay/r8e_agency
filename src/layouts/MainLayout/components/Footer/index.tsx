import HyperLink from '@/components/HyperLink'
import { cn } from '@/helpers/lib'
import { contactUsUrl, githubUrl, xUrl, legalName } from '@/constants/common'

export interface Props {
  className?: string
}

export default function Footer({ className }: Props) {
  const classRoot = cn(
    'small-container flex flex-col items-center justify-center gap-y-3 py-6',
    className
  )

  return (
    <div className={classRoot}>
      {/* links row */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 whitespace-nowrap">
        <HyperLink className="text-sm md:text-xl" href={xUrl} text="X" />
        <HyperLink className="text-sm md:text-xl" href={githubUrl} text="Github" />
        <HyperLink className="text-sm md:text-xl" href={contactUsUrl} text="Contact us" />
      </div>

      {/* legal name */}
      <div className="text-center text-sm opacity-70">
        {legalName}
      </div>
    </div>
  )
}
