import React from 'react'
import { Box } from '@mui/material'

import { UsersBody } from './ui/partials'

import classes from './Users.module.scss'

const Users: React.FC = () => {
  return (
    <Box className={classes.wrapper}>
      <UsersBody />
    </Box>
  )
}

export default Users
