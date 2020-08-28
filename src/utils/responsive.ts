export enum screenSizes {
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1600
}

export const breakpoints = {
  xs: `(min-width: ${screenSizes.xs}px)`,
  sm: `(min-width: ${screenSizes.sm}px)`,
  md: `(min-width: ${screenSizes.md}px)`,
  lg: `(min-width: ${screenSizes.lg}px)`,
  xl: `(min-width: ${screenSizes.xl}px)`,
  xxl: `(min-width: ${screenSizes.xxl}px)`
}

export const isMobile = () => window.innerWidth <= screenSizes.md
export const isDesktop = () => !isMobile()
