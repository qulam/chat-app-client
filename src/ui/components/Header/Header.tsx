import React from 'react'
import { Box, Typography } from '@mui/material'

import classes from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">CHAT APP</Typography>
    </Box>
  )
}

export default Header
