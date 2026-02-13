import { useMemo } from 'react'
import { useWindowSize } from 'react-use'

import { HyperText } from 'ui/hyper-text'
import BackgroundBlock from '@/components/BackgroundBlock'

import { BREAKPOINTS } from '@/constants/breakpoints'
import { cn } from '@/helpers/lib'
import { PARTNERS } from './constants'

export interface Props {
  className?: string
}

export default function Intro({ className }: Props) {
  const { width } = useWindowSize()

  const poster = useMemo(() => {
    if (width <= BREAKPOINTS.wide) return '/videos/intro_720p.jpg'
    else return '/videos/intro.jpg'
  }, [width])

  const classRoot = cn('', className)

  return (
    <div className={classRoot}>
      <div className="relative">
        <div className="absolute left-2/4 top-2/4 z-1 -translate-x-2/4 -translate-y-2/4 text-center font-pixel-arial-14 text-[50px] uppercase leading-loose xs:text-[60px] sm:text-[80px] md:w-[90%] xl:w-[85%] xl:text-[120px]">
          We build in Web3
        </div>
        <video
          className="h-[715px] w-full object-cover opacity-50 max-md:relative max-md:-left-5 max-md:w-[calc(100%+40px)] max-md:max-w-none md:rounded-[56px] lg:h-[770px]"
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/intro.mp4" type="video/mp4" media="(min-width: 1100px)" />
          <source src="/videos/intro_720p.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <div className="base-container mt-10">
        <div className="text-center font-geist-mono text-lightgray md:text-xl">
          <HyperText classNameRoot="justify-center" text="Trusted by" />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {PARTNERS.map(({ aosAnimation, aosDelay, className, logoUrl, url }) => (
            <a
              key={logoUrl}
              href={url}
              className="max-md:w-full md:flex-1"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <BackgroundBlock
                className="flex h-[120px] items-center justify-center bg-gray md:h-[140px]"
                data-aos={width <= BREAKPOINTS.md ? 'fade-up' : aosAnimation}
                data-aos-delay={width <= BREAKPOINTS.md ? '' : aosDelay}
                data-aos-anchor-placement="center-bottom"
              >
                <img src={logoUrl} className={className} />
              </BackgroundBlock>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
