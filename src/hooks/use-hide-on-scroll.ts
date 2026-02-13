import { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'

export function useHideOnScroll() {
  const { y } = useWindowScroll()
  // const throttledY = useThrottle(y, 200)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setHidden(y > lastScrollY)
    setLastScrollY(y)
  }, [lastScrollY, y])

  return hidden
}
