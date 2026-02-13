import { useState } from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'ui/accordion'
import { HyperText } from 'ui/hyper-text'

import { cn } from '@/helpers/lib'
import { FAQ } from './constants'

export interface Props {
  className?: string
}

export default function Experience({ className }: Props) {
  const [selectedAccordionItem, setSelectedAccordionItem] = useState(null)
  const classRoot = cn('small-container', className)

  return (
    <div className={classRoot}>
      <div className="text-center">
        <div className="title">Experience</div>
        <div className="mx-auto mt-4 max-w-[610px] text-lightgray md:text-xl">
          Our team has contributed to success of projects across a wide spectrum of web3 from low level implementation
          to high level strategy
        </div>
      </div>

      <div className="mt-[64px]">
        {FAQ.map(({ title, blocks }) => (
          <div key={title} className="mt-[96px] first:mt-0" data-aos="fade-up">
            <div className="mx-auto mb-6 flex items-baseline justify-center gap-x-1 text-lightgray">
              <span className="font-pixel-arial-14 text-[10px] md:text-xs">{'> '}</span>
              <HyperText className="md:text-xl" duration={1500} text={title} />
              <span className="font-pixel-arial-14 text-[10px] md:text-xs">{' <'}</span>
            </div>
            <Accordion
              key={title}
              value={selectedAccordionItem}
              type="single"
              collapsible
              onValueChange={setSelectedAccordionItem}
            >
              {blocks.map(({ title, description }) => (
                <AccordionItem key={title} className="mt-2 first:mt-0" value={title}>
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent>{description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  )
}
