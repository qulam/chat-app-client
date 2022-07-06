import React from 'react'
import { Box, Typography } from '@mui/material'

import classes from './Aside.module.scss'

const Aside: React.FC = () => {
  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">Chat Aside</Typography>
    </Box>
  )
}

export default Aside
