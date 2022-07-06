import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import { RecoilRoot } from 'recoil'

import { client } from 'src/common/config/apollo'
import defaultTheme from 'src/common/config/theme/defaultTheme'
import Views from 'src/ui/views'

const App = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider theme={defaultTheme}>
          <Router>
            <Views />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  )
}

export default App
