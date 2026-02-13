/** @type {import('tailwindcss').Config} */
import pluginAnimate from 'tailwindcss-animate'

import { TAILWIND_CUSTOM_BREAKPOINTS } from './src/constants/breakpoints'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        lightUp: 'lightUp 2.5s',
        ticker: 'ticker 35s linear infinite',
        'slide-left': 'slideLeftAndBack 1s ease-in-out 2',
        'slide-right': 'slideRightAndBack 1s ease-in-out 2',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      keyframes: {
        slideLeftAndBack: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-3px)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideRightAndBack: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(0)' }
        },
        ticker: {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(-100%)'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        lightUp: {
          'from, to': {
            opacity: 0.3
          },
          '10%': {
            opacity: 1
          }
        }
      },
      screens: TAILWIND_CUSTOM_BREAKPOINTS,
      fontFamily: {
        geist: 'Geist, sans-serif',
        'geist-mono': 'GeistMono, sans-serif',
        'pixel-arial-14': 'PixelArial14, sans-serif'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        button: '100px'
      },
      transitionProperty: {
        classic: 'all 0.3 ease-in-out'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        black: 'hsl(var(--black))',
        white: 'hsl(var(--white))',
        gray: 'hsla(var(--gray))',
        'gray-light': 'hsla(var(--gray-light))',
        lightgray: 'hsla(var(--lightgray))',
        green: 'hsl(var(--green))'
      },
      width: {
        carousel: 'calc(100% - 100px)'
      },
      zIndex: {
        '1': '1'
      }
    }
  },
  plugins: [pluginAnimate]
}
