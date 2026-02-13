import { cn } from '@/helpers/lib'

export interface Props {
  className?: string
}

export default function Ticker({ className }: Props) {
  const classRoot = cn('w-full overflow-hidden', className)

  return (
    <div className={classRoot}>
      <img
        className="h-[90px] w-[5000px] max-w-none animate-ticker md:h-[134px] md:w-[7339px]"
        src="/images/ticker.svg"
      />
    </div>
  )
}
