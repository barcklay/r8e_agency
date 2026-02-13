import { useContext } from 'react'

import { ThemeProviderContext } from './index'

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderContext')
  }

  return context
}
