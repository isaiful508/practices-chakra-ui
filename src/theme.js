import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e9e4fd',
      100: '#c6b9fa',
      200: '#a28ef7',
      300: '#8063f4',
      400: '#6B46C1', // primary
      500: '#5737b0',
      600: '#4d2eaf',
      700: '#40269b',
      800: '#351e87',
      900: '#221462',
    },
    accent: {
      50: '#e6f1fe',
      100: '#b9d8fc',
      200: '#8bbefb',
      300: '#5ca4f9',
      400: '#3182CE', // accent
      500: '#1a73e8',
      600: '#0b67e6',
      700: '#0f5cd5',
      800: '#1251c4',
      900: '#113fa3',
    },
    success: {
      500: '#38A169', // success
    },
    warning: {
      500: '#DD6B20', // warning
    },
    error: {
      500: '#E53E3E', // error
    },
  },
  fonts: {
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontWeight: '500',
        _hover: {
          transform: 'translateY(-1px)',
          boxShadow: 'md',
        },
        _active: {
          transform: 'translateY(0)',
        },
      },
      variants: {
        primary: {
          bg: 'brand.400',
          color: 'white',
          _hover: {
            bg: 'brand.500',
          },
        },
        accent: {
          bg: 'accent.400',
          color: 'white',
          _hover: {
            bg: 'accent.500',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: 'lg',
          },
        },
      },
    },
  },
  space: {
    // 8px spacing system
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '32px',
    '5': '40px',
    '6': '48px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
  },
  shadows: {
    card: '0 4px 12px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
})

export default theme