import React from 'react'
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'

import defaultTheme from 'src/common/config/theme/defaultTheme'

interface IThemeProvider {
  children: JSX.Element
}

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <MUIThemeProvider theme={defaultTheme}>{children}</MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
