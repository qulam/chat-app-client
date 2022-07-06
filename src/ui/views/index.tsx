import React from 'react'
import { Route, Routes } from 'react-router-dom'

import browserRoutes from 'src/common/browserRoutes'

import Users from './Users'

const Views: React.FC = () => {
  return (
    <Routes>
      <Route path={browserRoutes.HOME()} element={<Users />} />
      <Route path={browserRoutes.USERS()} element={<Users />} />
    </Routes>
  )
}

export default Views
