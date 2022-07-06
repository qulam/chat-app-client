import React from 'react'
import { Route, Routes } from 'react-router-dom'

import browserRoutes from 'src/common/browserRoutes'
import { Layout } from 'src/ui/components'

import Chat from './Chat'

const Views: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={browserRoutes.HOME()} element={<Chat />} />
        <Route path={browserRoutes.CHAT()} element={<Chat />} />
      </Routes>
    </Layout>
  )
}

export default Views
