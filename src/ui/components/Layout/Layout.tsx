import React from 'react'
import { Box, Container } from '@mui/material'

import Header from 'src/ui/components/Header'

import classes from './Layout.module.scss'

interface ILayout {
  children: JSX.Element
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Box className={classes.wrapper}>
      <Header />
      <Container className={classes.wrapper_container}>{children}</Container>
    </Box>
  )
}

export default Layout
