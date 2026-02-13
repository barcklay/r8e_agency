// import { Carousel, CarouselItem, CarouselContent, CarouselDots, CarouselPrevious, CarouselNext } from 'ui/carousel'
import { HyperText } from 'ui/hyper-text'
import AnimatedArrows from '@/components/AnimatedArrows'
// import GalleryCard from '@/components/GalleryCard'
import SvgIcon from '@/components/SvgIcon'

import { cn } from '@/helpers/lib'
// import { CARDS } from './constants'

export interface Props {
  className?: string
}

export default function Description({ className }: Props) {
  const classRoot = cn('base-container', className)

  return (
    <div className={classRoot}>
      <div className="text-[56px] font-light leading-none xs:max-w-[400px] md:max-w-[630px] lg:max-w-[900px]">
        <div className="max-lg:text-[40px]" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span className="font-pixel-arial-14 text-[22px] text-lightgray">{'>_'}</span>
          We’re Web3 team, driven by a desire{' '}
          <SvgIcon className="inline-block h-6 w-6 align-baseline lg:h-10 lg:w-10" name="sun" /> to build things{' '}
          <AnimatedArrows /> that are both innovative and useful
        </div>
        <div className="mt-10 max-lg:text-[40px]" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          We want to create real-world applications, that make{' '}
          <AnimatedArrows />{' '}
          <span className="whitespace-nowrap">
            a <HyperText classNameRoot="inline-flex" text="difference" />{' '}
            <SvgIcon className="inline-block h-7 w-5 lg:h-9 lg:w-7" name="flask" />
          </span>
        </div>
      </div>

      {/* <div className="mt-[48px]">
        <Carousel
          className="mx-auto"
          opts={{
            align: 'start',
            loop: true
          }}
        >
          <CarouselContent>
            {CARDS.map(({ avatar, text, username }, i) => (
              <CarouselItem key={i} className="flex sm:basis-[47%] lg:basis-[30%] xl:basis-1/4">
                {[0, 3].includes(i) ? (
                  <GalleryCard
                    className={cn('flex-1 max-xs:min-h-[370px]', { 'bg-primary': !i, 'text-lightgray': i })}
                    header={
                      <div className="mb-7 flex items-center gap-x-2">
                        <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
                          <img src={avatar} />
                        </div>
                        <div>{username}</div>
                      </div>
                    }
                    body={<span className="max-sm:text-xl">{text}</span>}
                  />
                ) : (
                  <GalleryCard
                    className="flex-1 text-lightgray max-xs:min-h-[370px]"
                    body={<span className="max-sm:text-xl">{text}</span>}
                    footer={
                      <div className="mt-[50px] flex justify-between">
                        <div>{username}</div>
                        <div className="font-pixel-arial-14 text-3xl">#</div>
                      </div>
                    }
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-0 top-0 flex -translate-y-1/2 -translate-y-[calc(100%+20px)] gap-x-2 max-sm:hidden">
            <CarouselPrevious
              className="static h-[48px] w-[48px] translate-x-0 translate-y-0"
              color="transparent-white"
            />
            <CarouselNext className="static h-[48px] w-[48px] translate-x-0 translate-y-0" color="transparent-white" />
          </div>
          <CarouselDots className="mt-8" />
        </Carousel>
      </div> */}
    </div>
  )
}
