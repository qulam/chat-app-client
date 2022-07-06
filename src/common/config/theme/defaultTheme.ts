import { createTheme } from '@mui/material'
import { indigo, pink } from '@mui/material/colors'

export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4,
  direction: 'ltr',
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: indigo,
    secondary: pink,
    background: {
      paper: '#FFFFFF',
      default: '#f4f4f7',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 'bold',
    h1: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
    },
    h6: {
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 0.5,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0.25,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          letterSpacing: 1.25,
          fontSize: 13,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textColorPrimary: {
            color: 'rgba(0, 0, 0, 0.87)',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
  },
})

export default defaultTheme
