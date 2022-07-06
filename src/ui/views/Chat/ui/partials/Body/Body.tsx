import React from 'react'
import { useQuery } from '@apollo/client'
import { Card, Typography } from '@mui/material'

import { GET_LOCATIONS } from 'src/ui/views/Chat/common/apollo/queries'

import classes from './Body.module.scss'

const Body: React.FC = () => {
  const { loading, data, error } = useQuery(GET_LOCATIONS)

  console.log({
    loading,
    data,
    error,
  })

  return (
    <Card elevation={6} className={classes.body}>
      <Typography variant='h1'>Welcome to Chat</Typography>
    </Card>
  )
}

export default Body
