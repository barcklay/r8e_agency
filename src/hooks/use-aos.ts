import AOS from 'aos'
import { useEffect } from 'react'

export const useAos = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 500,
        once: true
      })
    }, 1)

    return () => clearTimeout(timer)
  }, [])
}
