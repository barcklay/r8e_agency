export const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export const CUSTOM_BREAKPOINTS = {
  tiny: 375,
  xs: 480,
  wide: 1100
}
export const TAILWIND_CUSTOM_BREAKPOINTS = Object.fromEntries(
  Object.entries(CUSTOM_BREAKPOINTS).map(([key, value]) => [key, value + 'px'])
)

export const BREAKPOINTS = {
  ...TAILWIND_BREAKPOINTS,
  ...CUSTOM_BREAKPOINTS
}
