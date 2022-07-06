import React from 'react'
import { useQuery } from '@apollo/client'
import { Box, Typography } from '@mui/material'

import { GET_LOCATIONS } from 'src/ui/views/Users/common/apollo/queries'

import classes from './Body.module.scss'

const Body: React.FC = () => {
  const { loading, data, error } = useQuery(GET_LOCATIONS)

  console.log({
    loading,
    data,
    error,
  })

  return (
    <Box className={classes.body}>
      <Typography variant='h1'>Users Page</Typography>
    </Box>
  )
}

export default Body
