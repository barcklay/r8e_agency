import { animocaUrl, iglooUrl, magicEdenUrl } from '@/constants/common'

export type PartnerCard = {
  url: string
  logoUrl: string
  aosAnimation: string
  aosDelay: string
  className: string
}
type PartnerCards = PartnerCard[]

export const PARTNERS: PartnerCards = [
  {
    url: animocaUrl,
    logoUrl: '/images/logos/animoca.svg',
    aosAnimation: 'fade-right',
    aosDelay: '300',
    className: 'h-[50px] md:h-[60px]'
  },
  {
    url: iglooUrl,
    logoUrl: '/images/logos/igloo.png',
    aosAnimation: 'fade-up',
    aosDelay: '100',
    className: 'h-[30px] md:h-[40px]'
  },
  {
    url: magicEdenUrl,
    logoUrl: '/images/logos/magic-eden.svg',
    aosAnimation: 'fade-left',
    aosDelay: '300',
    className: 'h-[25px] md:h-[30px]'
  }
]
