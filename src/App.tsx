import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { RecoilRoot } from 'recoil'

import { client } from 'src/common/config/apollo'
import { ThemeProvider } from 'src/ui/components'
import Views from 'src/ui/views'

const App = () => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Router>
            <Views />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  )
}

export default App
