import { Link } from 'react-router-dom'

import { HyperText } from 'ui/hyper-text'
import SvgIcon from '@/components/SvgIcon'

import { buttonVariants } from 'ui/button'
import { contactUsUrl } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/helpers/lib'

export interface Props {
  className?: string
}

export default function Header({ className }: Props) {
  const classRoot = cn('w-full bg-black z-[2]', className)

  return (
    <div className={classRoot}>
      <div className="base-container flex h-full flex-row items-center justify-between gap-y-2 px-5">
        <div>
          <Link to={ROUTES.home}>
            <SvgIcon className="h-[32px] w-[160px] md:h-[40px] md:w-[200px]" name="logo" />
          </Link>
        </div>

        <div>
          <a
            href={contactUsUrl}
            className={cn(
              buttonVariants({ color: 'transparent', variant: 'outline' }),
              'min-w-[120px] max-xs:px-4 xs:min-w-[150px]'
            )}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <HyperText text="Contact" animateOnIntersection={false} animateOnHover />
          </a>
        </div>
      </div>
    </div>
  )
}
